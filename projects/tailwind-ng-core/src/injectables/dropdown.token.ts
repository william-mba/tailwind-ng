import { Directive, forwardRef, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { PopupDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Dropdown } from "../interfaces/dropdown";

export const DROPDOWN_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Dropdown'>>>({}, 'DROPDOWN_CONFIG');

@Directive({
  host: {
    '[attr.tabindex]': '-1',
  },
  providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DropdownBase) }]
})
export abstract class DropdownBase extends PopupDirective implements ConfigOf<'Dropdown'> {
  @Input() config = inject(DROPDOWN_CONFIG);
}


/**
 * Checks if the component is a Dropdown.
 * If so, you can safely access the Dropdown members inside this block scope.
 */
export function isDropdown(component: unknown): component is Dropdown {
  return component instanceof DropdownBase;
}
