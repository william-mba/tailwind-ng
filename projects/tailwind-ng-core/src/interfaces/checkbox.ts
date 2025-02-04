import { BaseActions, BaseState } from "./base";
import { CheckboxConfig } from "../config/interfaces";
import { OutputEmitterRef } from "@angular/core";

export interface Checkbox extends BaseState, BaseActions {
  readonly config: Partial<CheckboxConfig>
  /**
   * Whether the checkbox is checked. default is false
   */
  readonly checked: boolean
  /**
   * Whether the checkbox is indeterminate. default is false
   */
  readonly indeterminate: boolean
  readonly id: string
  /**
   * Toggles the checkbox from origin. Default origin is `'self'`.
   */
  toggle(origin?: EventOrigin, event?: Event): void
  /**
   * Emits when the checkbox state changes.
   */
  readonly changes: OutputEmitterRef<{ checked: boolean, indeterminate: boolean }>
}

type EventOrigin = "self" | "parent" | "child"
