import { Directive } from '@angular/core';
import { IconBase } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase { }
