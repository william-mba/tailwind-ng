import { ModelSignal } from "@angular/core";
import { BaseActions, BaseStates } from "./base";

export interface Toggle extends BaseStates, BaseActions {
  readonly tabIndex: number;
  /**
   * Toggles the toggle's state.
   */
  toggle(): void;
  /**
   * The toggle's state. Default is `false`.
   * Emits the state's changes when toggled.
   */
  checked: ModelSignal<boolean>;
}
