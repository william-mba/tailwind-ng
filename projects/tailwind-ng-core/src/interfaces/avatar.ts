import { ModelSignal } from "@angular/core";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseStates, BaseActions {
  size: ModelSignal<SizeOption>;
}
