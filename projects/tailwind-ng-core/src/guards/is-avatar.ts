import { AvatarBase } from "../injectables/avatar.token";
import { Avatar } from "../interfaces/avatar";

/**
 * Checks if the component is an Avatar.
 * If so, you can safely access the Avatar members inside this block scope.
 */
export function isAvatar(component: unknown): component is Avatar {
  return component instanceof AvatarBase
}
