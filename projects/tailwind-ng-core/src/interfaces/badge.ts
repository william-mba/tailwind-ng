import { BadgeConfig } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Badge component interface.
 */
export interface Badge extends BaseState, BaseActions {
  config: Partial<BadgeConfig>;
  size: SizeOption
}
