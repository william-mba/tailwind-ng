import { BaseElement } from "../../../../core/directives/element-base.interface";
import { Combobox } from "../combobox.interface";

/**
 * @ngxtw Combobox Item
 */
export interface ComboboxItem extends BaseElement {
  readonly value: string;
  readonly isSelected: boolean;
  readonly combobox: Combobox;
  /**
   * Scrolls the element's ancestor (combobox) such that the item is visible to the user.
   */
  scrollIntoView(): void;
}
