import { AdvancedPopupActions, BasicPopupActions, PopupEvents, PopupState } from "./popup";

/**
 * @TailwindNG Dialog component interface.
 */
export interface Dialog extends PopupState, BasicPopupActions, AdvancedPopupActions, PopupEvents {
  /**
   * Maximum duration (in milliseconds) of all animations defined on the dialog to complete before removing the dialog in the DOM
   * - Default is `500` = 500ms
   */
  readonly animationDuration: number;
  /**
   * Whether the dialog should close automatically after the given `displayDuration`.
   * Default is `false`.
   */
  readonly autoClose: boolean;
  /**
   * Whether to automatically focus the dialog's primary action button after the given `animationDuration` on open.
   * If no primary action button is found, the dialog's icon (if any), will be focused instead.
   * Default is `true`.
   */
  readonly autoFocus: boolean;
  /**
   * Duration (in milliseconds) to display the dialog before it auto closes. Only applicable if `autoClose` is `true`.
   * - Range: Minimum = 1000ms; Maximum = 10000ms; Default = 5000ms (5 seconds).
   * - If the given delay is outside the range, the default delay will be used.
   */
  readonly displayDuration?: number;
  /**
   * Whether the dialog is modal or not. If `true`, the dialog will be modal and will prevent any interaction with the rest of the page.
   * Default is `true`.
   */
  readonly isModal: boolean;
}
