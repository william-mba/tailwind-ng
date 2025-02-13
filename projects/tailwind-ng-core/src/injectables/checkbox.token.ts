import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives/base.directive";
import { CHECKBOX_CONFIG } from "./checkbox-config.token";

@Directive()
export abstract class CheckboxBase extends BaseDirective {
  protected config = inject(CHECKBOX_CONFIG);
}
