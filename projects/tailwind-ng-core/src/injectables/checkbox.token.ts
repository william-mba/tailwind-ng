import { Directive, inject } from "@angular/core";
import { BaseDirective } from "../directives/base.directive";
import { CheckboxConfig } from "../config";
import { InjectionTokenFactory } from "./injection-token.factory";
import { CheckboxIcon } from "../interfaces/checkbox-icon";
import { Checkbox } from "../interfaces/checkbox";

export const CHECKBOX_CONFIG = InjectionTokenFactory.create<Partial<CheckboxConfig>>({}, 'CHECKBOX_CONFIG');

export const CHECKBOX_ICON = InjectionTokenFactory
  .create<CheckboxIcon>({
    onIndeterminate: 'minus',
    onChecked: 'check',
    size: 'sm'
  }, 'CHECKBOX_ICON');


@Directive()
export abstract class CheckboxBase extends BaseDirective {
  protected config = inject(CHECKBOX_CONFIG);
}

/**
 * Checks if the component is a Checkbox.
 * If so, you can safely access the Checkbox members inside this block scope.
 */
export function isCheckbox(component: unknown): component is Checkbox {
  return component instanceof CheckboxBase
}
