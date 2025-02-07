import { AvatarConfig } from "../config/interfaces";
import { AvatarBase } from "../injectables";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseState, BaseActions {
  config: Partial<AvatarConfig>;
  size: SizeOption
}

/**
 * Checks if the component is an Avatar.
 * If so, you can safely access the Avatar members inside this block scope.
 */
export function isAvatar(component: unknown): component is Avatar {
  return component instanceof AvatarBase
}
