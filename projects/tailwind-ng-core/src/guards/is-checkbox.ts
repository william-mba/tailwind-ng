import { CheckboxBase } from "../injectables/checkbox.token";
import { Checkbox } from "../interfaces/checkbox";

/**
 * Checks if the component is a Checkbox.
 * If so, you can safely access the Checkbox members inside this block scope.
 */
export function isCheckbox(component: unknown): component is Checkbox {
  return component instanceof CheckboxBase
}
