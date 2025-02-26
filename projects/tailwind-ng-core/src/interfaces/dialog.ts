import { PopupAdvancedActions, PopupBaseActions, PopupProps } from "./popup";

/**
 * @TailwindNG Dialog component interface.
 */
export interface Dialog extends PopupProps, PopupBaseActions, PopupAdvancedActions {
  /**
   * Whether the dialog should close automatically after the given `displayDuration`.
   * Default is `false`.
   */
  readonly autoClose: boolean;
  /**
   * Whether to automatically focus the dialog's primary action when its open.
   * If no primary action button is found, the dialog's icon (if any), will be focused instead.
   * Default is `true`.
   */
  readonly autoFocus: boolean;
  /**
   * The delay to display the dialog before it auto closes. Only applicable if `autoClose` is `true`.
   * - Range in milliseconds: `[min: 1000, max: 10000]`; Default is `2000`.
   * - If the given delay is outside this range, the default delay will be used.
   */
  readonly displayDelay?: number;
  /**
   * Whether the dialog is modal. If `true`, the dialog will be modal and will prevent any interaction with the rest of the page.
   * Default is `true`.
   */
  readonly isModal: boolean;
}
