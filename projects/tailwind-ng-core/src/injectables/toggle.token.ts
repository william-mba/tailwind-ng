import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const TOGGLE_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Toggle'>>>({}, 'TOGGLE_CONFIG');

@Directive({})
export abstract class ToggleBase extends BaseDirective implements ConfigOf<'Toggle'> {
  @Input() config = inject(TOGGLE_CONFIG);
}
