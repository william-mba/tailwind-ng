import { IconBase } from "../injectables/icon.token";
import { Icon } from "../interfaces/icon";

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
  return component instanceof IconBase;
}
