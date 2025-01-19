import { OutputEmitterRef } from "@angular/core";
import { BaseState, BaseActions } from "@tailwind-ng/core";

/**
 * @ngx-tailwind Toggle's state
 */
export interface ToggleState extends BaseState {
  /**
   * The state of the toggle.
   */
  readonly isChecked: boolean;
}

/**
 * @ngx-tailwind Toggle's actions
 */
export interface ToggleActions extends BaseActions {
  toggle(): void;
}

/**
 * @ngx-tailwind Toggle's events
 */
export interface ToggleEvents {
  /**
   * Emits the toggle's state when it changes.
   */
  checked: OutputEmitterRef<boolean>;
}

export interface Toggle extends ToggleState, ToggleActions, ToggleEvents { }
