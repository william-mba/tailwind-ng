import { Directive, inject, Input } from "@angular/core";
import { ConfigTypeOf } from "../config/config-type-of";
import { ConfigOf } from "../config/config-of";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const BADGE_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Badge'>>>({}, 'BADGE_CONFIG');

@Directive({})
export abstract class BadgeBase extends BaseDirective implements ConfigOf<'Badge'> {
  @Input() config = inject(BADGE_CONFIG);
}
