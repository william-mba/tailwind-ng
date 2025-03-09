import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { classlist } from "../utils";

export const INPUT_RADIO_CONFIG = InjectionTokenFactory.create<string>('', 'INPUT_RADIO_CONFIG');

@Directive()
export abstract class InputRadioBase extends BaseDirective<HTMLInputElement> {
  protected config = inject(INPUT_RADIO_CONFIG);

  protected override buildStyle(): void {
    this.nativeElement.classList.add(...classlist(this.class).set(inject(INPUT_RADIO_CONFIG)).value);
  }
}
