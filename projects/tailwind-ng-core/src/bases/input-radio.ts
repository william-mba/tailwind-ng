import { Directive } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";

export const INPUT_RADIO_CONFIG = InjectionTokenFactory.create<string>('', 'INPUT_RADIO_CONFIG');

@Directive()
export abstract class InputRadioBase extends BaseDirective<HTMLInputElement> { }
