import { BaseActions, BaseStates } from "./base";

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
export interface InputText extends BaseStates<HTMLInputElement>, BaseActions { }
