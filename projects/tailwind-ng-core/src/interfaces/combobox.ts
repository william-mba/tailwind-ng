import { ModelSignal, OutputEmitterRef, Signal } from "@angular/core";
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
   * The combobox's selection mode. Default is 'single'.
   */
  readonly selectMode: ModelSignal<SelectMode>;
}

export type SelectMode = 'single' | 'multi';

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
   * Deselects the specified item.
   * @param item The item to deselect.
   */
  deselect(item: ComboboxItem): void;
  /**
   * Returns true if the combobox has the specified item. Otherwise, returns false.
   * @param item The item to check.
   */
  has(item: ComboboxItem): boolean;
}

export interface Combobox extends ComboboxState, ComboboxActions {
  /**
   * Emits the latest selected item when combobox's selection changes.
   */
  readonly selected: OutputEmitterRef<ComboboxItem[]>;
}
