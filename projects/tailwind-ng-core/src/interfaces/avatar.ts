import { AvatarConfig } from "../config/interfaces/avatar-config.interface";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseStates, BaseActions {
  config: Partial<AvatarConfig>;
  size: SizeOption
}
