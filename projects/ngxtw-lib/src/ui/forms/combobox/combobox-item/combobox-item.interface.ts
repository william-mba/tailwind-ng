import { BaseActions, BaseState } from "../../../../core/directives/base.interface";
import { Combobox } from "../combobox.interface";

/**
 * @ngxtw Combobox Item's state
 */
export interface ComboboxItemState extends BaseState {
  value: string;
  readonly isSelected: boolean;
  readonly combobox: Combobox;
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
