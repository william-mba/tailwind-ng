import { Directive, inject } from "@angular/core";
import { classlist } from "../utils";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { InputSignal, ModelSignal } from "@angular/core";
import { BaseActions, BaseProps } from "../directives";

/**
 * @TailwindNG Combobox Item component interface.
 */
export interface ComboboxItem extends BaseProps, BaseActions {
  readonly value: InputSignal<string>;
  /**
   * Selects the item.
   */
  select(): void;
  /**
   * Deselects the item.
   */
  deselect(): void;
  /**
   * Whether the item is selected.
   * Emits true when the item is selected and false when it is not.
   */
  selected: ModelSignal<boolean>;
}


export const COMBOBOX_ITEM_CONFIG = InjectionTokenFactory.create<string>('', 'COMBOBOX_ITEM_CONFIG');

@Directive()
export abstract class ComboboxItemBase extends BaseDirective {
  protected override buildStyle(): void {
    this.nativeElement.classList.add(...classlist(this.class).set(inject(COMBOBOX_ITEM_CONFIG)).value);
  }
}
