import { Directive, Input } from '@angular/core';
import { SizeOption, IconBase, Icon, ClassList } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  host: {
    '[class]': 'classList.value()'
  },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    if (!this.classList) {
      this.classList = new ClassList(this.class)
        .init(this.config[this.size])
        .set(this.config);
    }
  }
}
