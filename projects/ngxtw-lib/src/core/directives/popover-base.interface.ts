import { OutputEmitterRef, } from "@angular/core";
import { BaseElement } from "./element-base.interface";

/**
 * @ngxtw Popover base component
 */
export interface PopoverBase extends BaseElement {
  /**
   * Whether the component is opened.
   */
  readonly isOpened: boolean;
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
