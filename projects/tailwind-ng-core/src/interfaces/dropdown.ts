import { OverlayPosition } from "../types/layout";
import { Popup } from "./popup";

/**
 * @TailwindNG Dropdown component interface.
 */
export interface Dropdown extends Popup {
  position: OverlayPosition;
  /**
   * Close the dropdown when the user clicks outside of it.
   */
  closeOnBlur?: boolean;
}
