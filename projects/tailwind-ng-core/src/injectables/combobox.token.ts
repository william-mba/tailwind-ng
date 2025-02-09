import { Directive, forwardRef, Input } from "@angular/core";
import { PopupDirective } from "../directives";
import { Combobox } from "../interfaces/combobox";

/**
 * Checks if the component is a Combobox.
 * If so, you can safely access the Combobox members inside this block scope.
 */
export function isCombobox(component: unknown): component is Combobox {
  return component instanceof ComboboxBase;
}

@Directive({
  host: {
    role: 'combobox',
    '[attr.aria-expanded]': 'isOpened',
    '[attr.aria-activedescendant]': 'activeElement?.textContent || null',
  },
  providers: [
    {
      provide: PopupDirective,
      useExisting: forwardRef(() => ComboboxBase)
    }
  ]
})
export abstract class ComboboxBase extends PopupDirective {
  protected activeElement?: HTMLElement;
  @Input() override id = this.randomId('combobox');
}
