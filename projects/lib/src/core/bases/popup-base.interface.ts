import { EventEmitter } from "@angular/core";
import { ElementBaseActions, ElementBaseState } from "./element-base.interface";

export interface PopupBaseState extends ElementBaseState<HTMLElement> {
  /**
   * Whether the component is opened.
   */
  readonly opened: boolean;
}

export interface PopupBaseActions extends ElementBaseActions {
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
   * Close the component after the specified delay.
   * @param delay The delay in milliseconds.
   */
  closeAfter(delay: number): void
}

export interface PopupBaseEvents {
  /**
   * Event emitted when the component is opened.
   */
  readonly onOpen: EventEmitter<void>
  /**
   * Event emitted when the component is closed.
   */
  readonly onClose: EventEmitter<void>
  /**
   * Event emitted when the component is toggled.
   */
  readonly onToggle: EventEmitter<boolean>
}

/**
 * @ngxtw Popup component base
 */
export interface PopupBase extends PopupBaseState, PopupBaseActions, PopupBaseEvents { }
