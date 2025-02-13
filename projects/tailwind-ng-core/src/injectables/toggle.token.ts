import { Directive, inject, Input } from "@angular/core";
import { ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Toggle } from "../interfaces/toggle";

/**
 * Checks if the component is a Toggle.
 * If so, you can safely access the Toggle members inside this block scope.
 */
export function isToggle(component: unknown): component is Toggle {
  return component instanceof ToggleBase;
}

export const TOGGLE_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'Toggle'>>({}, 'TOGGLE_CONFIG');

@Directive({})
export abstract class ToggleBase extends BaseDirective {
  protected config = inject(TOGGLE_CONFIG);
}
