import { ElementBaseActions, ElementBaseState } from "../../core/bases/element-base.interface";

export interface ButtonGroupState extends ElementBaseState<HTMLElement> { }
export interface ButtonGroupActions extends ElementBaseActions { }

/**
 * @ngxtw Button Group
 */
export interface ButtonGroup extends ButtonGroupState, ButtonGroupActions { }
