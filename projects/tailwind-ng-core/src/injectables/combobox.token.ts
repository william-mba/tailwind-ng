import { Directive, forwardRef, Input } from "@angular/core";
import { PopupDirective } from "../directives";

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
  readonly type = 'Combobox';
  protected activeElement?: HTMLElement;
  @Input() override id = this.randomId('combobox');
}
