import { Observable } from "rxjs";
import { ButtonConfig, ButtonVariant } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";
import { PopupDirective } from "../directives";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Button component interface.
 */
export interface Button extends BaseState, BaseActions {
  config: Observable<ButtonConfig>;
  size: SizeOption;
  tabIndex: number;
  isFab: boolean;
  variant: ButtonVariant;
  popup?: PopupDirective;
}
