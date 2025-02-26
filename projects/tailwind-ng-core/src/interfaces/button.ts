import { ModelSignal } from "@angular/core";
import { ButtonVariant } from "../config/interfaces/button-config.interface";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseProps } from "./base";
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
  size: ModelSignal<SizeOption>;
  isFab: ModelSignal<boolean>;
  tabIndex: number;
  variant: ModelSignal<ButtonVariant>;
}

/**
 * @TailwindNG Button component interface.
 */
export interface Button extends BaseProps, BaseActions, ButtonImmutableStates, ButtonMutableStates { }
