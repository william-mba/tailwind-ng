import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { classlist } from "../utils";

export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create<string>('', 'BUTTON_GROUP_CONFIG');

@Directive()
export abstract class ButtonGroupBase extends BaseDirective {

  protected override buildStyle(): void {
    this.nativeElement.classList.add(...classlist(this.class).set(inject(BUTTON_GROUP_CONFIG)).value);
  }
}
