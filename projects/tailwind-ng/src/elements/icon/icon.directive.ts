import { Directive, Input } from '@angular/core';
import { SizeOption, IconBase, Icon } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  host: {
    '[class]': 'classList.value()',
  },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    this.classList.set({ ...this.config.base, ...this.config[this.size] });
  }
}
