import { DropdownConfig } from "../config/interfaces/dropdown-config.interface";
import { OverlayPosition } from "../types/layout";
import { Popup } from "./popup";

/**
 * @TailwindNG Dropdown component interface.
 */
export interface Dropdown extends Popup {
  config: Partial<DropdownConfig>;
  position: OverlayPosition;
  /**
   * Whether to close the dropdown when the user clicks outside of it.
   * Default it's `false`.
   */
  closeOnBlur: boolean;
}
