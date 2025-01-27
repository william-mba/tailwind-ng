import { Observable } from "rxjs";
import { ComponentConfig } from "../types/component-config.type";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Button Group component interface.
 */
export interface ButtonGroup extends BaseState, BaseActions {
  config: Observable<ComponentConfig>;
}
