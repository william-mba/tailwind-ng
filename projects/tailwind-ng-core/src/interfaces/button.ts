import { ButtonConfig, ButtonVariant } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseState } from "./base";
import { PopupControl } from "./popup";

/**
 * @TailwindNG Button component interface.
 */
export interface Button extends BaseState, BaseActions {
  config: Partial<ButtonConfig>;
  size: SizeOption;
  tabIndex: number;
  isFab: boolean;
  variant: ButtonVariant;
  popup?: PopupControl;
}
