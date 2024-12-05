import { InputSignal, ModelSignal } from "@angular/core";
import { BaseElement } from "../../../core/directives/element-base.interface";
import { ClassName } from "../../../core/types/class-name.type";
import { ClassList } from "../../../config/classlist";

/**
 * @ngxtw Toggle
 */
export interface Toggle extends BaseElement {
  /**
   * The state of the toggle.
   */
  readonly isChecked: ModelSignal<boolean>;
  /**
   * The initial class list of the slider.
   * - Passed before the component is initialized.
   */
  readonly slider: InputSignal<ClassName[]>;
  /**
   * The class list instance of the slider.
   */
  readonly sliderClassList: ClassList;
  /**
   * Toggles the state of the toggle.
   */
  toggle(): void;
}
