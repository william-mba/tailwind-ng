import { Directive, inject, Input } from "@angular/core";
import { BaseDirective } from "../directives/base.directive";
import { CHECKBOX_CONFIG } from "./checkbox-config.token";
import { ConfigOf } from "../config/config-of";

@Directive()
export abstract class CheckboxBase extends BaseDirective implements ConfigOf<'Checkbox'> {
  @Input() config = inject(CHECKBOX_CONFIG);
}
