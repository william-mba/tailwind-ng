import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const INPUT_TEXT_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'InputText'>>>({}, 'INPUT_TEXT_CONFIG');

@Directive({})
export abstract class InputTextBase extends BaseDirective<HTMLInputElement> implements ConfigOf<'InputText'> {
  @Input() config = inject(INPUT_TEXT_CONFIG);
}
