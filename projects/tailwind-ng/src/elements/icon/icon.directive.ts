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
    this.nativeElement.className = classlist(this.class).set(`${size} ${className}`).with(this.nativeElement.className);
    const { [this.name]: icon = '' } = inject(ICON_CONFIG).map || {};
    this.nativeElement.innerHTML = icon;
  }
}
