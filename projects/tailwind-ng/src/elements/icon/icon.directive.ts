import { Directive, inject, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SizeOption, IconBase, IconName, Icon } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon',
  exportAs: 'twIcon',
  host: { '[innerHTML]': 'source' },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  private readonly _sanitizer = inject(DomSanitizer);
  protected source?: SafeHtml;
  @Input() size: SizeOption = 'md';
  @Input({ required: true }) name!: IconName;

  protected override onInit(): void {
    this.config.subscribe((config) => {
      this.classList.init(config[this.size]);
      this.classList.set(config.base);
      if (!config.map[this.name]) {
        console.error(`Icon with name "${this.name}" must be setted.`);
      } else {
        this.source = this._sanitizer.bypassSecurityTrustHtml(config.map[this.name]);
      }
    });
  }
}
