import { Directive, inject, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SizeOption, IconBase, IconName, Icon, ClassList } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  host: {
    '[innerHTML]': 'source',
    '[class]': 'classList.value()'
  },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  private readonly _sanitizer = inject(DomSanitizer);
  protected source?: SafeHtml;
  @Input() size: SizeOption = 'md';
  @Input({ required: true }) name!: IconName;

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.init(this.config[this.size])
        .then(() => {
          this.classList.set(this.config);
        });
    }
    if (this.config.map) {
      if (!this.config.map[this.name]) {
        console.error(`Icon with name "${this.name}" must be setted.`);
      } else {
        this.source = this._sanitizer.bypassSecurityTrustHtml(this.config.map[this.name]);
      }
    } else {
      console.error('Icon map must be setted.');
    }
  }
}
