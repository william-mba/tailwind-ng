import { OutputEmitterRef } from "@angular/core";
import { BaseActions, BaseStates } from "./base";

export interface Toggle extends BaseStates, BaseActions {
  readonly tabIndex: number;
  /**
   * Whether the toggle is checked. Default is `false`.
   */
  readonly isChecked: boolean;
  /**
   * Toggles the toggle's state.
   */
  toggle(): void;
  /**
   * Emits the toggle's state when it changes.
   */
  checked: OutputEmitterRef<boolean>;
}
