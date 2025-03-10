import { Directive, inject } from '@angular/core';
import { classlist, ICON_CONFIG, IconBase } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase {
  protected override buildStyle(): void {
    const config = inject(ICON_CONFIG);
    const className = `${config[this.size]} ${config.className}`;
    this.nativeElement.className = classlist(this.class).set(className).with(this.nativeElement.className);
    this.nativeElement.innerHTML = config.map![this.name] || '';
  }
}
