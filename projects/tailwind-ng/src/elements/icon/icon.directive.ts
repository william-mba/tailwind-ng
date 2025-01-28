import { Directive, Input } from '@angular/core';
import { SizeOption, IconBase, IconKey, Icon } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [tw-icon], [twIcon]',
  exportAs: 'twIcon',
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  @Input({ required: true }) key!: IconKey;
  @Input() size: SizeOption = 'md';

  protected override onInit(): void {
    this.config.subscribe((config) => {
      this.classList.init(config[this.size]);
      this.classList.set(config.base);
      if (!config.source[this.key]) {
        console.error(`Icon with key "${this.key}" is undefined. Please set it using the config provider.`);
      } else {
        this.nativeElement.insertAdjacentHTML('afterbegin', config.source[this.key]);
      }
    });
  }
}
