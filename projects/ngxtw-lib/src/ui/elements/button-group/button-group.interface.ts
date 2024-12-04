import { ElementBaseState, ElementBaseEvents } from "@core/directives/element-base.interface";

export interface ButtonGroupState extends ElementBaseState<HTMLElement> { }
export interface ButtonGroupActions extends ElementBaseEvents { }

/**
 * @ngxtw Button Group
 */
export interface ButtonGroup extends ButtonGroupState, ButtonGroupActions { }
