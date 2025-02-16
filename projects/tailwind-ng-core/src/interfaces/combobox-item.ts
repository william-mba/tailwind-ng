import { InputSignal, OutputEmitterRef } from "@angular/core";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Combobox Item component interface.
 */
export interface ComboboxItem extends BaseStates, BaseActions {
  readonly value: InputSignal<string>;
  readonly selected: OutputEmitterRef<ComboboxItem>;
  /**
   * Returns true if the item is selected. Otherwise, returns false.
   */
  readonly isSelected: boolean;
  select(): void;
}
