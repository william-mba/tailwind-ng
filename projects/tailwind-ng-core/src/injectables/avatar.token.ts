import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Avatar } from "../interfaces/avatar";
import { AvatarConfig } from "../config";

/**
 * Checks if the component is an Avatar.
 * If so, you can safely access the Avatar members inside this block scope.
 */
export function isAvatar(component: unknown): component is Avatar {
  return component instanceof AvatarBase
}

export const AVATAR_CONFIG = InjectionTokenFactory.create<Partial<AvatarConfig>>({}, 'AVATAR_CONFIG');

@Directive()
export abstract class AvatarBase extends BaseDirective {
  protected config = inject(AVATAR_CONFIG);
}
