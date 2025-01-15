import { Directive, Input } from '@angular/core';
import { IconConfig } from './icon.config';
import { SizeOption, IconToken } from '@ngxtw/core';

@Directive({
  selector: 'tw-icon, [tw-icon], [twIcon]',
  exportAs: 'twIcon',
  host: {
    class: 'inline-block',
  },
  providers: [{ provide: IconToken, useExisting: IconDirective }]
})
export class IconDirective extends IconToken {
  @Input({ required: true }) key!: string;
  @Input() size: SizeOption = 'md';

  protected override onInit(): void {
    this.config.get<IconConfig>('Icon').subscribe((config) => {
      this.classList.initFrom(config[this.size]);
      this.classList.setFrom(config.base);
      if (!config.source[this.key]) {
        console.error(new Error(`Icon with key "${this.key}" does not exists in the icons source config.`));
      } else {
        this.nativeElement.insertAdjacentHTML('afterbegin', config.source[this.key]);
      }
    });
  }
}
