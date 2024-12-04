import { ElementRef, EventEmitter } from "@angular/core";
import { ElementBaseActions, ElementBaseState } from "../../core/bases/element-base.interface";
import { ClassName } from "../../../../ngxtw-lib/src/lib/core/types/class-name.type";
import { ClassList } from "../../core/configs/classlist";

export interface ToggleState extends ElementBaseState<HTMLElement> {
  /**
   * The state of the toggle.
   */
  readonly checked: boolean;
  /**
   * The initial class list of the slider.
   * - Passed before the component is initialized.
   */
  readonly slider: ClassName[];
  /**
   * The class list instance of the slider.
   */
  readonly sliderClassList: ClassList;
  /**
   * The checkbox element wrapped by the toggle.
   */
  readonly checkbox: ElementRef<HTMLInputElement>;
}

export interface ToggleActions extends ElementBaseActions {
  /**
   * Toggles the state of the toggle.
   */
  toggle(): void;
}

export interface ToggleEvents {
  /**
   * Event emited when the toggle state changes.
   */
  onToggle: EventEmitter<boolean>;
}


/**
 * @ngxtw Toggle
 */
export interface Toggle extends ToggleState, ToggleActions, ToggleEvents { }
