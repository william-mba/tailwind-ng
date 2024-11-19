import { ElementBaseActions, ElementBaseState } from "../../core/bases/element-base.interface";

/**
 * @ngxtw Input State
 */
export interface InputState extends ElementBaseState<HTMLInputElement> {}
/**
 * @ngxtw Input Actions
 */
export interface InputActions extends ElementBaseActions {}

/**
 * @ngxtw Input
 */

export interface TwInput extends InputState, InputActions { }
