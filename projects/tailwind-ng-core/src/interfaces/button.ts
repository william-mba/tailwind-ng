import { ButtonConfig, ButtonVariant } from "../config/interfaces";
import { ButtonBase } from "../injectables";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseState } from "./base";
import { Popup } from "./popup";

/**
 * @TailwindNG Button component interface.
 */
export interface Button extends BaseState, BaseActions {
  config: Partial<ButtonConfig>;
  size: SizeOption;
  tabIndex: number;
  isFab: boolean;
  variant: ButtonVariant;
  popup?: Popup;
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
