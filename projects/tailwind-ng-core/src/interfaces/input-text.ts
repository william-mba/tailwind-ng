import { OutputEmitterRef } from "@angular/core";
import { BaseActions, BaseProps } from "./base";

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
export interface InputText extends BaseProps<HTMLInputElement>, BaseActions {
  /**
   * The input's value.
   */
  readonly value: string;
  /**
   * The input's normalized value.
   */
  readonly normalizedValue: string;
  /**
   * Whether the input is valid.
   */
  readonly isValid: boolean;
  /**
   * Whether the input is empty.
   */
  readonly isEmpty: boolean;
  /**
   * Emits the input's value when it changes.
   */
  readonly valueChange: OutputEmitterRef<string>;
  /**
   * Emits the input's value when it changes.
   */
  readonly changes: OutputEmitterRef<string>;
  clear(): void;
}
