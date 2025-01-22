import { OutputEmitterRef } from "@angular/core";
import { ComboboxItemState } from "./combobox-item/combobox-item.interface";
import { FormControl } from "@angular/forms";
import { BasicPopupActions, PopupState, PopupEvents } from "@tailwind-ng/core";

/**
 * @TailwindNG Combobox's state
 */
export interface ComboboxState extends PopupState {
  /**
   * Returns true if the combobox is valid. Otherwise, returns false.
   * - A combobox is valid if it control is valid and touched or dirty.
   */
  readonly isValid: boolean;
  /**
   * Whether the combobox is in multi-selection mode.
   */
  readonly isMulti: boolean;
  /**
   * The form control instance of the input element.
   */
  readonly control: FormControl<string>;
}

/**
 * @TailwindNG Combobox's actions
 */
export interface ComboboxActions extends BasicPopupActions {
  /**
   * Resets the combobox.
   */
  reset(): void;
  /**
   * Selects the specified item.
   * @param item The item to select.
   */
  select(item: ComboboxItemState): void;
  /**
   * Returns true if the combobox has the specified item. Otherwise, returns false.
   * @param item The item to check.
   */
  has(item: ComboboxItemState): boolean;
}

/**
 * @TailwindNG Combobox's events
 */
export interface ComboboxEvents extends PopupEvents {
  /**
   * Event that emits the selected item(s) when a selection occurs.
   * Emits an empty array if no item is selected.
   */
  readonly valueSelected: OutputEmitterRef<string[]>;
  /**
   * Event that emits the combobox value when it changes.
   */
  readonly valueChanged: OutputEmitterRef<string>;
}

export interface Combobox extends ComboboxState, ComboboxActions, ComboboxEvents { }
