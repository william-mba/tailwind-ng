import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, IconConfig } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Icon } from "../interfaces/icon";

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
  return component instanceof IconBase;
}

export const ICON_CONFIG = InjectionTokenFactory.create<Partial<IconConfig>>({}, 'ICON_CONFIG');

@Directive({})
export abstract class IconBase extends BaseDirective implements ConfigOf<'Icon'> {
  @Input() config = inject(ICON_CONFIG);
}
