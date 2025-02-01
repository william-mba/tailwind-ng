import { Directive, inject, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SizeOption, IconBase, IconKey, Icon } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [tw-icon], [twIcon]',
  exportAs: 'twIcon',
  host: { '[innerHTML]': 'source' },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  private readonly _sanitizer = inject(DomSanitizer);
  protected source?: SafeHtml;
  @Input({ required: true }) key!: IconKey;
  @Input() size: SizeOption = 'md';

  protected override onInit(): void {
    this.config.subscribe((config) => {
      this.classList.init(config[this.size]);
      this.classList.set(config.base);
      if (!config.source[this.key]) {
        console.error(`Icon with key "${this.key}" is undefined. Please set it using the config provider.`);
      } else {
        this.source = this._sanitizer.bypassSecurityTrustHtml(config.source[this.key]);
      }
    });
  }
}
