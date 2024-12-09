import { ModelSignal } from "@angular/core";
import { BaseElement } from "../../../core/directives/element-base.interface";

/**
 * @ngxtw Toggle
 */
export interface Toggle extends BaseElement {
  /**
   * The state of the toggle.
   */
  readonly isChecked: ModelSignal<boolean>;
  /**
   * Toggles the state of the toggle.
   */
  toggle(): void;
}
