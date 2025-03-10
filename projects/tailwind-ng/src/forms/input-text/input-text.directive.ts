import { Directive } from '@angular/core';
import { InputTextBase } from '@tailwind-ng/core';

@Directive({
  selector: 'input[tw-input][type="text"], input[twInput][type="text"], input[tw-input][type="password"], input[twInput][type="password"], input[tw-input][type="email"], input[twInput][type="number"], input[twInput][type="tel"], input[twInput][type="url"]',
  exportAs: 'twInputText',
  providers: [{ provide: InputTextBase, useExisting: InputTextDirective }]
})
export class InputTextDirective extends InputTextBase { }
