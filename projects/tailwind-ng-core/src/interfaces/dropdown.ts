import { OverlayPosition } from "../types/layout";
import { Popup } from "./popup";

/**
 * @TailwindNG Dropdown component interface.
 */
export interface Dropdown extends Popup {
  position: OverlayPosition;
  /**
   * Whether to close the dropdown when the user clicks outside of it.
   * Default it's `false`.
   */
  closeOnBlur: boolean;
}
