import { computed, Directive, inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SizeOption, IconBase, IconName, Icon, ClassList } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  host: {
    '[class]': 'classList.value()',
    '[innerHTML]': 'icon()'
  },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  private _sanitizer = inject(DomSanitizer);
  @Input() size: SizeOption = 'md';
  @Input({ required: true }) name!: IconName;
  icon = computed(() => this._sanitizer.bypassSecurityTrustHtml(this.config.map![this.name] || ''));

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.init(this.config[this.size])
        .then(() => this.classList.set(this.config));
    }
  }
}
