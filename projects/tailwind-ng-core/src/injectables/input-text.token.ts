import { Directive, inject, Input } from "@angular/core";
import { ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const INPUT_TEXT_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'InputText'>>({}, 'INPUT_TEXT_CONFIG');

@Directive({})
export abstract class InputTextBase extends BaseDirective<HTMLInputElement> {
  protected config = inject(INPUT_TEXT_CONFIG);
}
