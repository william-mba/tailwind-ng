import { Observable } from "rxjs";
import { InputTextConfig } from "../config/interfaces";
import { BaseActions, BaseState } from "./base";

/**
 * @TailwindNG Input component interface.
 * @NOTE This directive can only be used on the follwing input types:
 * - text
 * - password
 * - email
 * - number
 * - tel
 * - url
 */
export interface InputText extends BaseState<HTMLInputElement>, BaseActions {
  config: Observable<InputTextConfig>;
}
