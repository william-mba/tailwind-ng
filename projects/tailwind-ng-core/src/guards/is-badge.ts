import { BadgeBase } from "../injectables/badge.token";
import { Badge } from "../interfaces/badge";

/**
 * Checks if the component is a Badge.
 * If so, you can safely access the Badge members inside this block scope.
 */
export function isBadge(component: unknown): component is Badge {
  return component instanceof BadgeBase
}
