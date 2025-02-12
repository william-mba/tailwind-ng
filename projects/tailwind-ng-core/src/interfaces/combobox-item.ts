import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Combobox Item component interface.
 */
export interface ComboboxItem extends BaseStates, BaseActions {
  readonly value: string;
  /**
   * Returns true if the item is selected. Otherwise, returns false.
   */
  readonly isSelected: boolean;
  /**
   * Scrolls the element's ancestor (combobox) such that the item is visible to the user.
   */
  scrollIntoView(): void;
  select(): void;
}
