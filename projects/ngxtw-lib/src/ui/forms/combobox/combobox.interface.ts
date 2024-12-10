import { InputSignal, OutputEmitterRef } from "@angular/core";
import { ComboboxItem } from "./combobox-item/combobox-item.interface";
import { FormControl } from "@angular/forms";
import { PopupBaseDirective } from "../../../core/directives/popup-base.directive";

/**
 * @ngxtw Combobox
 */
export interface Combobox extends PopupBaseDirective {
  readonly valueSeparator: InputSignal<string>;
  /**
   * Event that emits the selected values of the combobox when an item is selected.
   * - When isMultiselect is false, it emits a string corresponding to the control value.
   * - When isMultiselect is true, it emits an array of strings corresponding to the selected values.
   */
  readonly valueSelected: OutputEmitterRef<any>;
  /**
   * Event that emits the combobox value when it changes.
   */
  readonly valueChanged: OutputEmitterRef<string>;
  /**
   * Returns true if the combobox is valid. Otherwise, returns false.
   * - A combobox is valid if it control is valid and touched or dirty.
   */
  readonly isValid: boolean;
  readonly isMultiselect: InputSignal<boolean>;
  /**
   * The form control instance of the input element.
   */
  readonly control: InputSignal<FormControl<string>>;
  /**
   * Emits the Keyboard event corresponding to the key pressed.
   */
  readonly keyPressed: OutputEmitterRef<KeyboardEvent>;
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
   * Returns true if the combobox has the specified item. Otherwise, returns false.
   * @param item The item to check.
   */
  has(item: ComboboxItem): boolean;
}
