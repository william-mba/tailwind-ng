import { BaseActions, BaseState } from "@ngxtw/core";

/**
 * @ngxtw Combobox Item's state
 */
export interface ComboboxItemState extends BaseState {
  value: string;
  readonly isSelected: boolean;
}

/**
 * @ngxtw Combobox Item's actions
 */
export interface ComboboxItemActions extends BaseActions {
  /**
   * Scrolls the element's ancestor (combobox) such that the item is visible to the user.
   */
  scrollIntoView(): void;
}

/**
 * @ngxtw Combobox Item's interface
 */
export interface ComboboxItem extends ComboboxItemState, ComboboxItemActions { }
