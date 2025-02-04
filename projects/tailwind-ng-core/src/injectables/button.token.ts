import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const BUTTON_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Button'>>>({}, 'BUTTON_CONFIG');

@Directive({})
export abstract class ButtonBase extends BaseDirective<HTMLButtonElement> implements ConfigOf<'Button'> {
  @Input() config = inject(BUTTON_CONFIG);
}
