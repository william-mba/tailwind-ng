import { ButtonConfig, ButtonVariant } from "../config/interfaces/button-config.interface";
import { ButtonBase } from "../injectables/button.token";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseStates } from "./base";
import { Popup } from "./popup";

/**
 * @TailwindNG Button component immutable states.
 */
export interface ButtonImmutableStates {
  readonly config: Partial<ButtonConfig>;
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

/**
 * Checks if the component is a Button.
 * If so, you can have access to the Button members inside this block scope.
 */
export function isButton(component: unknown): component is Button {
  return component instanceof ButtonBase;
}

/**
 * Checks if the component is a Primary Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isPrimaryButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'primary';
}

/**
 * Checks if the component is a Secondary Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isSecondaryButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'secondary';
}

/**
 * Checks if the component is a Tonal Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isTonalButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'tonal';
}

/**
 * Checks if the component is a Text Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isTextButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'text';
}
