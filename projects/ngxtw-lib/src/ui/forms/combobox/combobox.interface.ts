import { OutputEmitterRef } from "@angular/core";
import { ComboboxItem } from "./combobox-item/combobox-item.interface";
import { FormControl } from "@angular/forms";
import { PopoverBaseDirective } from "../../../core/directives/popover-base.directive";

/**
 * @ngxtw Combobox
 */
export interface Combobox extends PopoverBaseDirective {
  readonly valueSeparator: string;
  /**
   * Returns true if the combobox is valid. Otherwise, returns false.
   * - A combobox is valid if it control is valid and touched or dirty.
   */
  readonly isValid: boolean;
  readonly isMultiselect: boolean;
  /**
   * The form control instance of the input element.
   */
  readonly control: FormControl<string>;
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
  /**
   * Event that emits the selected item(s) when a selection occurs.
   * Emits an empty array if no item is selected.
   */
  readonly valueSelected: OutputEmitterRef<string[]>;
  /**
   * Event that emits the combobox value when it changes.
   */
  readonly valueChanged: OutputEmitterRef<string>;
  /**
   * Emits the Keyboard event corresponding to the key pressed.
   */
  readonly keyPressed: OutputEmitterRef<KeyboardEvent>;
}
