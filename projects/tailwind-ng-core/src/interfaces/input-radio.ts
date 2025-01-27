import { Observable } from "rxjs";
import { InputRadioConfig } from "../config/interfaces";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Input component interface. For radio input type only.
 */
export interface InputRadio extends BaseState<HTMLInputElement>, BaseActions {
  config: Observable<InputRadioConfig>;
}
