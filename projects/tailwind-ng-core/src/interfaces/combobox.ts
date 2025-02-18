import { OutputEmitterRef, Signal } from "@angular/core";
import { ComboboxItem } from "./combobox-item";
import { BasicPopupActions, Popup, PopupState } from "./popup";
import { InputText } from "./input-text";

/**
 * @TailwindNG Combobox component state
 */
export interface ComboboxState extends PopupState {
  /**
   * The combobox's input text.
   */
  readonly input: Signal<InputText>;
  /**
   * The combobox's dropdown.
   */
  readonly dropdown: Signal<Popup>;
  /**
   * The combobox's selection mode. Default is 'single'.
   */
  readonly selectionMode: ComboboxSelectionMode;
  /**
   * The combobox's selected values.
   */
  readonly selectedValues: Set<string>;
}

export type ComboboxSelectionMode = 'single' | 'multi';

/**
 * @TailwindNG Combobox component actions
 */
export interface ComboboxActions extends BasicPopupActions {
  /**
   * Resets the combobox.
   */
  reset(): void;
  /**
   * Sets the combobox's active item.
   * @param item The item to set as active.
   */
  setActiveItem(item: ComboboxItem): void;
}

export interface Combobox extends ComboboxState, ComboboxActions {
  /**
   * Emits the combobox's current selected values.
   */
  readonly selectedValuesChange: OutputEmitterRef<Set<string>>;
  /**
   * Emits when the combobox is reset.
   */
  readonly resetted: OutputEmitterRef<void>;
}
