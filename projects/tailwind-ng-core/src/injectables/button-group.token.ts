import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { ComponentConfig } from "../types";

export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create<Partial<ComponentConfig>>({}, 'BUTTON_GROUP_CONFIG');

@Directive()
export abstract class ButtonGroupBase extends BaseDirective {
  protected config = inject(BUTTON_GROUP_CONFIG);
}
