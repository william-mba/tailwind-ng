import { InputSignal, Signal } from "@angular/core";
import { ComboboxItem } from "./combobox-item";
import { BasicPopupActions, Popup, PopupState } from "./popup";
import { InputText } from "./input-text";

/**
 * @TailwindNG Combobox component state
 */
export interface ComboboxState extends PopupState {
  readonly input: Signal<InputText>;
  readonly dropdown: Signal<Popup>;
  /**
   *  The combobox's selection mode.
   */
  readonly selectionMode: InputSignal<ComboboxMode>;
}

export type ComboboxMode = 'single' | 'multiple';

/**
 * @TailwindNG Combobox component actions
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
  select(item: ComboboxItem): void;
  /**
   * Returns true if the combobox has the specified item. Otherwise, returns false.
   * @param item The item to check.
   */
  has(item: ComboboxItem): boolean;
}

export interface Combobox extends ComboboxState, ComboboxActions { }
