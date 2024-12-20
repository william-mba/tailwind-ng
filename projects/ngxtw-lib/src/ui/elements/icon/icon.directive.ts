import { Directive } from '@angular/core';
import { IconConfig } from './icon.config';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';
import { SizeOption } from '../../../core/types/size-options.type';

@Directive({
  selector: 'tw-icon, [tw-icon], [twIcon]',
  exportAs: 'twIcon',
  host: {
    class: 'inline-block',
  },
  inputs: [{ name: 'key', required: true }, 'size'],
})
export class IconDirective extends ElementBaseDirective {
  key!: string;
  size: SizeOption = 'md';

  protected override onInit(): void {
    this.config.get<IconConfig>('Icon').subscribe((config) => {
      this.classList.set([config.size[this.size]!]);
      if (!config.source[this.key]) {
        console.error(new Error(`Icon with key "${this.key}" does not exists in the icons source config.`));
      } else {
        this.nativeElement.insertAdjacentHTML('afterbegin', config.source[this.key]);
      }
    });
  }
}
