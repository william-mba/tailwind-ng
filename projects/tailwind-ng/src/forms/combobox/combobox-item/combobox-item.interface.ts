import { BaseActions, BaseState } from "@tailwind-ng/core";

/**
 * @TailwindNG Combobox Item's state
 */
export interface ComboboxItemState extends BaseState {
  value: string;
  readonly isSelected: boolean;
}

/**
 * @TailwindNG Combobox Item's actions
 */
export interface ComboboxItemActions extends BaseActions {
  /**
   * Scrolls the element's ancestor (combobox) such that the item is visible to the user.
   */
  scrollIntoView(): void;
}

/**
 * @TailwindNG Combobox Item's interface
 */
export interface ComboboxItem extends ComboboxItemState, ComboboxItemActions { }
