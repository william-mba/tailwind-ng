import { AvatarConfig } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseState, BaseActions {
  config: Partial<AvatarConfig>;
  size: SizeOption
}
