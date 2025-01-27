import { Observable } from "rxjs";
import { DropdownConfig } from "../config/interfaces";
import { OverlayPosition } from "../types/layout";
import { Popup } from "./popup";

/**
 * @TailwindNG Dropdown component interface.
 */
export interface Dropdown extends Popup {
  config: Observable<DropdownConfig>;
  position: OverlayPosition;
}
