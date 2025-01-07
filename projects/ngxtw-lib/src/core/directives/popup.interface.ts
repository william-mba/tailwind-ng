import { OutputEmitterRef, } from "@angular/core";
import { BaseActions, BaseEvents, BaseState } from "./base.interface";

/**
 * @ngxtw Popup base state.
 */
export interface PopupState extends BaseState {
  readonly id: string;
  /**
   * Whether the component is hovered.
   */
  readonly isHovered: boolean;
  /**
   * Whether the component is opened.
   */
  readonly isOpened: boolean;
}

/**
 * @ngxtw Popup actions.
 */
export interface PopupActions extends BaseActions {
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
  /**
   * Closes the component after the specified delay (in milliseconds).
   * - Delay range: Minimum = 1000ms; Maximum = 10000ms; Default = 5000ms (5 seconds).
   * - If the given delay is outside the range, the default delay will be used.
   * @param delay The delay in milliseconds.
   */
  closeAfter(delay: number): void
  /**
   * Updates the position of the component if needed.
   */
  updatePositionIfNeeded(): void;
}

/**
 * @ngxtw Popup events.
 */
export interface PopupEvents extends BaseEvents {
  /**
   * Event emitted when the component is toggled.
   */
  readonly toggled: OutputEmitterRef<boolean>
  /**
   * Event emitted when the component is opened.
   */
  readonly opened: OutputEmitterRef<void>
  /**
   * Event emitted when the component is closed.
   */
  readonly closed: OutputEmitterRef<void>
}

export interface Popup extends PopupState, PopupActions, PopupEvents { }
