import { ElementBaseActions, ElementBaseState } from "../../core/bases/element-base.interface";
import { SizeOption } from "../../core/types/size-options.type";
import { ButtonVariant } from "./button.config";

export interface ButtonState extends ElementBaseState<HTMLElement> {
  readonly isFab: boolean
  readonly size: SizeOption
  readonly variant: ButtonVariant
}

export interface ButtonActions extends ElementBaseActions {
  setSize(value: SizeOption): void
  setVariant(value: ButtonVariant): void
}

/**
 * @ngxtw Button component interface
 */
export interface Button extends ButtonState, ButtonActions { }
