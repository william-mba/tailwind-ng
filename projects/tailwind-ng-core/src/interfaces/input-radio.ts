import { InputRadioConfig } from "../config/interfaces/input-radio-config.interface";
import { BaseActions, BaseStates } from "./base";

/**
 * @TailwindNG Input component interface. For radio input type only.
 */
export interface InputRadio extends BaseStates<HTMLInputElement>, BaseActions {
  config: Partial<InputRadioConfig>;
}
