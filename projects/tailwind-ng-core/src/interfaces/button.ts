import { ButtonVariant } from "../config/interfaces/button-config.interface";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseStates } from "./base";
import { Popup } from "./popup";

/**
 * @TailwindNG Button component immutable states.
 */
export interface ButtonImmutableStates {
  readonly popup?: Popup;
}

/**
 * @TailwindNG Button component mutable states.
 */
export interface ButtonMutableStates {
  size: SizeOption;
  isFab: boolean;
  tabIndex: number;
  variant: ButtonVariant;
}

/**
 * @TailwindNG Button component interface.
 */
export interface Button extends BaseStates, BaseActions, ButtonImmutableStates, ButtonMutableStates {
  size: SizeOption;
  isFab: boolean;
  variant: ButtonVariant;
}
