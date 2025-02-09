import { ComboboxBase } from "../injectables/combobox.token";
import { Combobox } from "../interfaces/combobox";

/**
 * Checks if the component is a Combobox.
 * If so, you can safely access the Combobox members inside this block scope.
 */
export function isCombobox(component: unknown): component is Combobox {
  return component instanceof ComboboxBase;
}
