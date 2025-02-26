import { ModelSignal } from "@angular/core";
import { BaseActions, BaseProps } from "./base";

export interface Toggle extends BaseProps, BaseActions {
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
