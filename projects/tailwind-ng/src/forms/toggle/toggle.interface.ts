import { OutputEmitterRef } from "@angular/core";
import { BaseState, BaseActions } from "@tailwind-ng/core";

/**
 * @TailwindNG Toggle's state
 */
export interface ToggleState extends BaseState {
  /**
   * Whether the toggle is checked. Default is `false`.
   */
  readonly isChecked: boolean;
}

/**
 * @TailwindNG Toggle's actions
 */
export interface ToggleActions extends BaseActions {
  toggle(): void;
}

/**
 * @TailwindNG Toggle's events
 */
export interface ToggleEvents {
  /**
   * Emits the toggle's state when it changes.
   */
  checked: OutputEmitterRef<boolean>;
}

export interface Toggle extends ToggleState, ToggleActions, ToggleEvents { }
