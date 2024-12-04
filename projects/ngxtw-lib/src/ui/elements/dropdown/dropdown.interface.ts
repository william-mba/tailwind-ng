import { PopupBaseState, PopupBaseActions, PopupBaseEvents } from "@core/directives/popup-base.interface";
import { OverlayPosition } from "@core/types/layout/position.type";


export interface DropdownState extends PopupBaseState {
  readonly position: OverlayPosition;
}

export interface DropdownActions extends PopupBaseActions {
  setPosition(position: OverlayPosition): void;
}

export interface DropdownEvents extends PopupBaseEvents { }

/**
 * @ngxtw Dropdown component
 */
export interface Dropdown extends DropdownState, DropdownActions, DropdownEvents { }
