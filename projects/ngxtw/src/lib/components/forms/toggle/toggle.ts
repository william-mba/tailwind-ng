import { EventEmitter } from "@angular/core";

/**
 * ngxtw Toggle
 */
export interface Toggle {
  /**
   * The state of the toggle.
   */
  checked: boolean;
  /**
   * The class name to be applied to the toggle container.
   */
  class: string;
  /**
   * The class name to be applied to the toggle slider.
   */
  slider: string;
  /**
   * The matching strategy to be use to resolve the class name.
   */
  match: 'first' | 'last' | 'exact';
  /**
   * An observable that emit the toggle state.
   */
  onToggle: EventEmitter<boolean>;
  toggle(): void;
}
