import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const INPUT_RADIO_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'InputRadio'>>>({}, 'INPUT_RADIO_CONFIG');

@Directive({})
export abstract class InputRadioBase extends BaseDirective<HTMLInputElement> implements ConfigOf<'InputRadio'> {
  @Input() config = inject(INPUT_RADIO_CONFIG);
}
