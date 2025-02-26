import { ModelSignal, OutputEmitterRef, Signal } from "@angular/core";
import { ComboboxItem } from "./combobox-item";
import { PopupBaseActions, Popup, PopupProps } from "./popup";
import { InputText } from "./input-text";

/**
 * @TailwindNG Combobox component state
 */
export interface ComboboxState extends PopupProps {
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
  readonly selectedValues: ModelSignal<Set<string>>;
  /**
   * The combobox's active element.
   */
  readonly activeElement?: HTMLElement;
}

export type ComboboxSelectionMode = 'single' | 'multi';

/**
 * @TailwindNG Combobox component actions
 */
export interface ComboboxActions extends PopupBaseActions {
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
   * Emits when the combobox is reset.
   */
  readonly resetted: OutputEmitterRef<void>;
}
