import { Directive, Input } from '@angular/core';
import { Icon } from './icon.interface';
import { IconConfig, IconKey, IconSourceOption } from './icon.config';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';
import { SizeOption } from '../../core/types/size-options.type';

@Directive({
  selector: 'tw-icon, [tw-icon], [twIcon]',
  exportAs: 'twIcon',
  standalone: true,
  host: {
    class: 'inline-block',
    '[attr.key]': 'key',
    '[attr.size]': 'size',
    '[attr.source]': 'source',
  },
})
export class IconDirective extends ElementBaseDirective<HTMLElement> implements Icon {
  @Input() key: IconKey = 'ngxtw';
  @Input() size: SizeOption = 'md';
  @Input() source: IconSourceOption = 'default';

  protected override buildStyle(): void {
    this._configManager.get<IconConfig>('Icon').subscribe((config) => {
      const size = config.size[this.size];
      if (!size) {
        console.error(new Error(`Icon size "${this.size}" is undefined`));
        return;
      }
      const source = config.source[this.source];
      if (!source) {
        console.error(new Error(`Icon source "${this.source}" is undefined`));
        return;
      }
      let found = false;
      for (const [key, value] of Object.entries(source)) {
        if (key === this.key) {
          this.nativeElement.insertAdjacentHTML('afterbegin', value);
          found = true;
          break;
        }
      }
      if (!found) {
        console.error(new Error(`Icon key "${this.key}" is not in source "${this.source}"`));
      }
      // If size is prefixed with `*:`, then it already targets the SVG element
      this.classList.merge(/^\*:{1,2}/.test(size) ? [size] : [`*:${size}`]);
    });
  }

  setKey(value: IconKey): void {
    this.key = value;
    this.buildStyle();
  }
  setSize(value: SizeOption): void {
    this.size = value;
    this.buildStyle();
  }
  setSource(value: IconSourceOption): void {
    this.source = value;
    this.buildStyle();
  }
}
