import { BaseActions, BaseState } from "./base";
import { OutputEmitterRef } from "@angular/core";
import { SizeOption } from "../types";
import { ConfigOf } from "../config";
import { CheckboxBase } from "../injectables";

/**
 * The mutable state of the checkbox.
 */
export interface CheckboxMutableState {
  /**
   * Whether the checkbox is checked. default is false
   */
  readonly checked: boolean
  /**
   * Whether the checkbox is indeterminate. default is false
   */
  readonly indeterminate: boolean
  /**
   * The checkbox's children if any.
   */
  readonly children?: Checkbox[]
}

export interface CheckboxActions {
  /**
   * Toggles the checkbox from origin.
   * @param options The options for the toggle.
   * @returns A promise that resolves with the changes.
   */
  toggle(options?: CheckboxToggleOptions): Promise<CheckboxMutableState>
}

export interface CheckboxEvents {
  /**
   * Emits when the checkbox state changes.
   */
  readonly changes: OutputEmitterRef<CheckboxMutableState>
}

export interface Checkbox extends
  BaseState,
  BaseActions,
  CheckboxActions,
  CheckboxEvents,
  CheckboxMutableState,
  ConfigOf<'Checkbox'> {
  readonly id: string
}

export interface CheckboxToggleOptions {
  /**
   * The origin of the event. Default is `'self'`.
   */
  origin?: EventOrigin
  /**
   * The event that triggered the toggle.
   */
  event?: Event
}

/**
 * The icon to display when the checkbox is indeterminate or checked.
 * Default is `{ indeterminate: 'minus', checked: 'check' }`
 */
export interface CheckboxIcon {
  /**
   * The name of the icon to display when the checkbox is indeterminate.
   * Default is `'minus'`. The icon must be configured. Otherwise, it will not display.
   */
  onIndeterminate: string,
  /**
   * The name of the icon to display when the checkbox is checked.
   * Default is `'check'`. The icon must be configured. Otherwise, it will not display.
   */
  onChecked: string,
  /**
   * The size of the icon. Default is `'sm'`.
   */
  size: SizeOption;
}

type EventOrigin = "self" | "parent" | "child"

/**
 * Checks if the component is a Checkbox.
 * If so, you can safely access the Checkbox members inside this block scope.
 */
export function isCheckbox(component: unknown): component is Checkbox {
  return component instanceof CheckboxBase
}
