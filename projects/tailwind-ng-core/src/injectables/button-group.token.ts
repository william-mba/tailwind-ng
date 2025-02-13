import { Directive, inject } from "@angular/core";
import { ConfigTypeOf } from "../config/config-type-of";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'ButtonGroup'>>({}, 'BUTTON_GROUP_CONFIG');

@Directive({})
export abstract class ButtonGroupBase extends BaseDirective {
  protected config = inject(BUTTON_GROUP_CONFIG);
}
