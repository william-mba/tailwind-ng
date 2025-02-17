import { InputSignal, ModelSignal } from "@angular/core";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Combobox Item component interface.
 */
export interface ComboboxItem extends BaseStates, BaseActions {
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
