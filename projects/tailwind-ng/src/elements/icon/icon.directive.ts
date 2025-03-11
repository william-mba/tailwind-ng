import { Directive, inject } from '@angular/core';
import { classlist, ICON_CONFIG, IconBase } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase {
  protected override buildStyle(): void {
    const { [this.size]: size, className } = inject(ICON_CONFIG);
    this.nativeElement.innerHTML = (inject(ICON_CONFIG).map || {})[this.name] || '';
    if (this.nativeElement.classList.length === 0) {
      this.nativeElement.className = classlist(this.class).set(`${size} ${className}`).value;
    } else {
      this.nativeElement.className = classlist(this.class).set(`${size} ${className}`).with(this.nativeElement.className);
    }
  }
}
