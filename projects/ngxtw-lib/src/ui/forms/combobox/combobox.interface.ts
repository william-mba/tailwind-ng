import { EventEmitter } from "@angular/core";
import { ComboboxItem } from "./combobox-item/combobox-item.interface";
import { FormControl } from "@angular/forms";
import { PopupBaseActions, PopupBaseEvents, PopupBaseState } from "../../core/bases/popup-base.interface";

export interface ComboboxState extends PopupBaseState {
  /**
   * Returns true if the combobox is valid. Otherwise, returns false.
   * - A combobox is valid if it control is valid and touched or dirty.
   */
  readonly isValid: boolean;
  /**
   * The form control instance of the input element.
   */
  readonly control: FormControl<string>;
}

export interface ComboboxActions extends PopupBaseActions {
  /**
   * Resets the combobox.
   */
  reset(): void;
  /**
   * Selects the specified item.
   * @param item The item to select.
   */
  select(item: ComboboxItem): void;
  /**
   * Returns true if the combobox contains the specified value. Otherwise, returns false.
   * @param value The value to check.
   */
  contains(value: string): boolean;
  /**
   * Returns true if the combobox contains the specified item. Otherwise, returns false.
   * @param item The item to check.
   */
  has(item: ComboboxItem): boolean;
}

export interface ComboboxEvents extends PopupBaseEvents {
  /**
   * Event emitted when the value of the combobox changes.
   */
  onValueChanges: EventEmitter<string>;
}

/**
 * @ngxtw Combobox
 */
export interface Combobox extends ComboboxState, ComboboxActions, ComboboxEvents { }
