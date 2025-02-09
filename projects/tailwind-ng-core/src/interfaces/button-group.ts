import { ComponentConfig } from "../types/component-config.type";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Button Group component interface.
 */
export interface ButtonGroup extends BaseStates, BaseActions {
  config: Partial<ComponentConfig>;
}
