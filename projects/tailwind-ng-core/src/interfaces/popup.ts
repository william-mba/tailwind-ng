import { ModelSignal } from "@angular/core";
import { BaseActions, BaseProps } from "./base";

/**
 * @TailwindNG Popup base props.
 */
export interface PopupProps<T extends HTMLElement = HTMLElement> extends BaseProps<T> {
  readonly id: string;
  /**
   * The popup's extra options.
   */
  readonly options?: PopupExtraOptons;
}

export interface PopupExtraOptons {
  /**
   * The popup's trigger.
   */
  trigger?: BaseActions;
  /**
   * Whether to focus the trigger when the popup closes.
   */
  focusTriggerOnClose?: boolean;
}

/**
 * @TailwindNG Popup basic actions.
 */
export interface PopupBaseActions extends BaseActions {
  /**
   * Toggles the component.
   */
  toggle(): void;
  /**
   * Opens the component.
   */
  open(): void;
  /**
   * Closes the component.
   */
  close(): void;
}

/**
 * @TailwindNG Popup advanced actions.
 */
export interface PopupAdvancedActions {
  /**
   * Closes the component after the given delay in milliseconds without `ms` suffix.
   * - Acceptable delay is between `[1000, 10_000]`. The default value is `2000`.
   * - If the given delay is out of range, the default value is used.
   * @param delay The delay in milliseconds.
   */
  closeAfter(delay: number): void;
}

export interface Popup<T extends HTMLElement = HTMLElement> extends PopupProps<T>, PopupBaseActions, PopupAdvancedActions {
  /**
   * A signal that indicates whether the popup is opened. Emits `true` when the popup opens and `false` when it closes.
   */
  readonly opened: ModelSignal<boolean>;
}
