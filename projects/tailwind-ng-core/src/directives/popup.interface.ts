import { EventEmitter, } from "@angular/core";
import { BaseActions, BaseState } from "./base.interface";

/**
 * @TailwindNG Popup base state.
 */
export interface PopupState<T extends HTMLElement = HTMLElement> extends BaseState<T> {
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
 * @TailwindNG Basic Popup actions.
 */
export interface BasicPopupActions extends BaseActions {
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
 * @TailwindNG Advanced popup actions.
 */
export interface AdvancedPopupActions {
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
 * @TailwindNG Popup events.
 */
export interface PopupEvents {
  /**
   * Event emitted when the component is toggled.
   */
  readonly toggled: EventEmitter<boolean>
  /**
   * Event emitted when the component is opened.
   */
  readonly opened: EventEmitter<void>
  /**
   * Event emitted when the component is closed.
   */
  readonly closed: EventEmitter<void>
}

export interface Popup<T extends HTMLElement = HTMLElement> extends PopupState<T>, BasicPopupActions, AdvancedPopupActions, PopupEvents { }
