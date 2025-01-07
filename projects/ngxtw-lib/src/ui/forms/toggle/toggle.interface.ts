import { OutputEmitterRef } from "@angular/core";
import { BaseState, BaseActions, BaseEvents } from "../../../core/directives/base.interface";

/**
 * @ngxtw Toggle's state
 */
export interface ToggleState extends BaseState {
  /**
   * The state of the toggle.
   */
  readonly isChecked: boolean;
}

/**
 * @ngxtw Toggle's actions
 */
export interface ToggleActions extends BaseActions {
  toggle(): void;
}

/**
 * @ngxtw Toggle's events
 */
export interface ToggleEvents extends BaseEvents {
  /**
   * Emits the toggle's state when it changes.
   */
  toggled: OutputEmitterRef<boolean>;
}
