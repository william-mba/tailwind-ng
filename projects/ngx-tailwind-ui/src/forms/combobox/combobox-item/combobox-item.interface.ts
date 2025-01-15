import { BaseActions, BaseState } from "@ngx-tailwind/core";

/**
 * @ngx-tailwind Combobox Item's state
 */
export interface ComboboxItemState extends BaseState {
  value: string;
  readonly isSelected: boolean;
}

/**
 * @ngx-tailwind Combobox Item's actions
 */
export interface ComboboxItemActions extends BaseActions {
  /**
   * Scrolls the element's ancestor (combobox) such that the item is visible to the user.
   */
  scrollIntoView(): void;
}

/**
 * @ngx-tailwind Combobox Item's interface
 */
export interface ComboboxItem extends ComboboxItemState, ComboboxItemActions { }
