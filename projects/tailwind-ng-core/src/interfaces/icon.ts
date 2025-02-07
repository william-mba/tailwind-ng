import { IconConfig, IconName } from "../config/interfaces";
import { IconBase } from "../injectables";
import { SizeOption } from "../types/size-options.type";

/**
 * @TailwindNG Icon component interface.
 */
export interface Icon {
  name: IconName;
  size: SizeOption;
  config: Partial<IconConfig>;
}

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
  return component instanceof IconBase;
}
