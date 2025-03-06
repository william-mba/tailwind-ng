import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseProps } from "./base";

/**
 * @TailwindNG Badge component interface.
 */
export interface Badge extends BaseProps, BaseActions {
  size: SizeOption;
}
