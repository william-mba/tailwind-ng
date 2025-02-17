import { OverlayPosition } from "../types/layout";
import { Popup, PopupExtraOptons } from "./popup";

/**
 * @TailwindNG Dropdown component interface.
 */
export interface Dropdown extends Popup {
  position: OverlayPosition;
  /**
   * The options for the dropdown.
   */
  options?: DropdownOptions;
}
export interface DropdownOptions extends PopupExtraOptons {
  /**
   * Close the dropdown when the user clicks outside of it.
   */
  closeOnBlur?: boolean;
}
