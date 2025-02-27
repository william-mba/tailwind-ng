import { Directive, effect, inject } from "@angular/core";
import { InputRadioConfig } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const INPUT_RADIO_CONFIG = InjectionTokenFactory.create<Partial<InputRadioConfig>>({}, 'INPUT_RADIO_CONFIG');

@Directive({})
export abstract class InputRadioBase extends BaseDirective<HTMLInputElement> {
  protected config = inject(INPUT_RADIO_CONFIG);

  constructor() {
    super();
    effect(() => {
      this.nativeElement.classList.add(...this.classList.value());
    });
  }
}
