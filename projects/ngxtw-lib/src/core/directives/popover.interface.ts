import { OutputEmitterRef, } from "@angular/core";
import { ElementActions, ElementEvents, ElementState } from "./element.interface";

/**
 * @ngxtw Popover component's base state.
 */
export interface PopoverState extends ElementState {
  /**
   * Whether the component is hovered.
   */
  readonly isHovered: boolean;
}

/**
 * @ngxtw Popover component's actions.
 */
export interface PopoverActions extends ElementActions {
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
}

/**
 * @ngxtw Popover component's events.
 */
export interface PopoverEvents extends ElementEvents {
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
