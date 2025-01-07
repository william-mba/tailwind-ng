import { Signal } from "@angular/core";
import { PopupActions, PopupEvents, PopupState } from "../../../core/directives/popup.interface";
import { DialogContainer } from "./dialog-container.directive";

export interface DialogState extends PopupState {
  /**
   * Maximum duration (in milliseconds) of all animations defined on the dialog to complete before removing the dialog in the DOM
   * - Default is `500` = 500ms
   */
  animationDuration: number;
  /**
   * Whether the dialog should close automatically after the given `displayDuration`.
   * Default is `false`.
   */
  autoClose: boolean;
  /**
   * Whether to automatically focus the dialog's primary action button after the given `animationDuration` on open.
   * If no primary action button is found, the dialog's icon (if any), will be focused instead.
   * Default is `true`.
   */
  autoFocus: boolean;
  /**
   * Duration (in milliseconds) to display the dialog before it auto closes. Only applicable if `autoClose` is `true`.
   * - Range: Minimum = 1000ms; Maximum = 10000ms; Default = 5000ms (5 seconds).
   * - If the given delay is outside the range, the default delay will be used.
   */
  displayDuration?: number;
  container: Signal<DialogContainer>;
}

/**
 * @ngxtw Dialog component interface.
 */
export interface Dialog extends DialogState, PopupActions, PopupEvents { }
