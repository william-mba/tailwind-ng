import { contentChild, Directive, forwardRef } from "@angular/core";
import { PopupDirective } from "../directives";
import { DropdownBase } from "./dropdown.token";

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => ComboboxBase) }] })
export abstract class ComboboxBase extends PopupDirective {
  readonly dropdown = contentChild.required<DropdownBase>(DropdownBase);
  readonly type = 'Combobox';
  protected activeElement?: HTMLElement;
}
