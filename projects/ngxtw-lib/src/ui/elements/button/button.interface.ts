import { ElementBase } from "../../../core/directives/element-base.directive";
import { ButtonVariant } from "./button.config";
import { InputSignal, ModelSignal } from "@angular/core";

/**
 * @ngxtw Button component interface
 */
export interface Button extends ElementBase<HTMLElement> {
  /**Whether it is a floating action button or not. Default is `false`*/
  readonly isFab: InputSignal<boolean>
  /**
   * The button variant. Default is `primary`
   */
  readonly variant: ModelSignal<ButtonVariant>
}
