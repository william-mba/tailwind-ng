import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Badge } from "../interfaces/badge";
import { BadgeConfig } from "../config";

/**
 * Checks if the component is a Badge.
 * If so, you can safely access the Badge members inside this block scope.
 */
export function isBadge(component: unknown): component is Badge {
  return component instanceof BadgeBase
}


export const BADGE_CONFIG = InjectionTokenFactory.create<Partial<BadgeConfig>>({}, 'BADGE_CONFIG');

@Directive({})
export abstract class BadgeBase extends BaseDirective {
  protected config = inject(BADGE_CONFIG);
}
