import { Directive, inject } from "@angular/core";
import { BackdropConfig } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const BACKDROP_CONFIG = InjectionTokenFactory.create<Partial<BackdropConfig>>({}, 'DIALOG_CONFIG');

@Directive()
export abstract class BackdropBase extends BaseDirective {
  protected config = inject(BACKDROP_CONFIG);
}

/**
 * Checks if the component is a Dialog.
 * If so, you can safely access the Dialog members inside this block scope.
 */
export function isBackdrop(component: unknown): component is BackdropBase {
  return component instanceof BackdropBase;
}
