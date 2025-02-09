import { ToggleBase } from "../injectables/toggle.token";
import { Toggle } from "../interfaces/toggle";

/**
 * Checks if the component is a Toggle.
 * If so, you can safely access the Toggle members inside this block scope.
 */
export function isToggle(component: unknown): component is Toggle {
  return component instanceof ToggleBase;
}
