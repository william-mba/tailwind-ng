import { ButtonConfig, ButtonVariant } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseState } from "./base";
import { PopupControl } from "./popup";

/**
 * @TailwindNG Button component interface.
 */
export interface Button extends BaseState, BaseActions {
  config: Partial<ButtonConfig>;
  size: SizeOption;
  tabIndex: number;
  isFab: boolean;
  variant: ButtonVariant;
  popup?: PopupControl;
}

/**
 * Checks if the component is a Button.
 * If so, you can have access to the Button members inside this block scope.
 */
export function isButton(component: unknown): component is Button {
  return component != undefined && (component as Button).variant !== undefined &&
    (component as Button).size !== undefined &&
    (component as Button).isFab !== undefined &&
    (component as Button).config.primary !== undefined &&
    (component as Button).config.secondary !== undefined &&
    (component as Button).config.tonal !== undefined &&
    (component as Button).config.text !== undefined;
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
