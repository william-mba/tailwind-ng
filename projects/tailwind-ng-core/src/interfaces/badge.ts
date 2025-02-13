import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Badge component interface.
 */
export interface Badge extends BaseStates, BaseActions {
  size: SizeOption
}
