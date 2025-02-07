import { DropdownConfig } from "../config/interfaces";
import { DropdownBase } from "../injectables";
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

/**
 * Checks if the component is a Dropdown.
 * If so, you can safely access the Dropdown members inside this block scope.
 */
export function isDropdown(component: unknown): component is Dropdown {
  return component instanceof DropdownBase;
}
