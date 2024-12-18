import { PopoverBase } from "../../../core/directives/popover-base.interface";

export interface Dialog extends PopoverBase {
  /**
   * Maximum duration (in ms) of transition to complete before removing the element in the DOM
   * - Default is `500` = 500ms
   */
  transitionDuration: number;
  /**
   * If `true`, the dialog will close automatically after the `displayDuration`.
   */
  isAutoClose: boolean;
  /**
   * Duration (in ms) to display the dialog before closing it automatically.
   * - Range: Minimum = 1000ms; Maximum = 10000ms; Default = 5000ms (5 seconds).
   * - If the given delay is outside the range, the default delay will be used.
   */
  displayDuration?: number;
}
