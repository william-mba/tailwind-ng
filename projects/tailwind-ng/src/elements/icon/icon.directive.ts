import { Directive, inject } from '@angular/core';
import { classlist, ICON_CONFIG, IconBase } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase {
  protected override buildStyle(): void {
    const { [this.name]: icon } = inject(ICON_CONFIG).map ?? {};
    const { [this.size]: size, className } = inject(ICON_CONFIG);
    if (!icon) {
      console.error(`Icon "${this.name}" is not set. Please add it to the icon config through dependency injection.`);
    } else {
      this.nativeElement.innerHTML = icon;
    }
    classlist(this.nativeElement).merge((value) => [`${size} ${className}`, value, this.class]);
  }
}
