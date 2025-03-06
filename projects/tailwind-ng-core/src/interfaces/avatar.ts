import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseProps } from "./base";

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseProps, BaseActions {
  size: SizeOption;
}
