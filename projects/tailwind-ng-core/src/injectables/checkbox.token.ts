import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const CHECKBOX_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Checkbox'>>>({}, 'CHECKBOX_CONFIG');

@Directive({})
export abstract class CheckboxBase extends BaseDirective implements ConfigOf<'Checkbox'> {
  @Input() config = inject(CHECKBOX_CONFIG);
}
