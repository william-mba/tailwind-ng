import { InputSignal } from "@angular/core";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Combobox Item component interface.
 */
export interface ComboboxItem extends BaseStates, BaseActions {
  readonly value: InputSignal<string>;
  /**
   * Returns true if the item is selected. Otherwise, returns false.
   */
  readonly isSelected: boolean;
  select(): void;
}
