
import { BaseActions, BaseProps } from "./base";
import { OutputEmitterRef } from "@angular/core";

/**
 * The mutable states of the checkbox.
 */
export interface CheckboxMutableStates {
  /**
   * Whether the checkbox is checked. default is false
   */
  readonly checked: boolean
  /**
   * Whether the checkbox is indeterminate. default is false
   */
  readonly indeterminate?: boolean
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
  toggle(options?: CheckboxToggleOptions): void
}

export interface CheckboxEvents {
  /**
   * Emits when the checkbox state changes.
   */
  readonly changes: OutputEmitterRef<CheckboxMutableStates>
  /**
   * Emits when the checkbox checked state changes.
   */
  readonly checkedChange: OutputEmitterRef<boolean>
  /**
   * Emits when the checkbox indeterminate state changes.
   */
  readonly indeterminateChange: OutputEmitterRef<boolean>
}

type EventOrigin = "self" | "parent" | "child"
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


export interface Checkbox extends BaseProps, BaseActions, CheckboxActions, CheckboxEvents, CheckboxMutableStates {
  readonly id: string
}
