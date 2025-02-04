import { Directive, forwardRef, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { PopupDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const DROPDOWN_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Dropdown'>>>({}, 'DROPDOWN_CONFIG');

@Directive({
  providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DropdownBase) }]
})
export abstract class DropdownBase extends PopupDirective implements ConfigOf<'Dropdown'> {
  readonly type = 'Dropdown';
  @Input() config = inject(DROPDOWN_CONFIG);
}
