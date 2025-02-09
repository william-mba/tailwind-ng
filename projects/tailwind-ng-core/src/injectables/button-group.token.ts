import { Directive, inject, Input } from "@angular/core";
import { ConfigTypeOf } from "../config/config-type-of";
import { ConfigOf } from "../config/config-of";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'ButtonGroup'>>>({}, 'BUTTON_GROUP_CONFIG');

@Directive({})
export abstract class ButtonGroupBase extends BaseDirective implements ConfigOf<'ButtonGroup'> {
  @Input() config = inject(BUTTON_GROUP_CONFIG);
}
