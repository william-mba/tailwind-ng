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
/**
 * Checks if the component is a Badge.
 * If so, you can safely access the Badge members inside this block scope.
 */
export function isBadge(component: unknown): component is Badge {
  return component != undefined && (component as Badge).size !== undefined &&
    (component as Badge).config.base?.display !== undefined &&
    (component as Badge).config.base?.gap !== undefined &&
    (component as Badge).config.xs?.padding !== undefined;
}
