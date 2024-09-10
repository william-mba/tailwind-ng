import { ElementRef } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'radio' | 'checkbox';

/**
 * Input component properties
 */
export interface InputProps {
  name: string;
  class: string;
  placeholder?: string;
  /**
   * Custom validation function
   */
  validator?: ValidatorFn;
  validators: ValidatorFn[];
  inputRef: ElementRef<HTMLInputElement>;
  hostRef: HTMLElement;
  form?: FormGroup;
  value: string;
  valid: boolean;
  invalid: boolean;
  touchedOrDirty: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  pattern?: string | RegExp;
  type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'radio' | 'checkbox'
}

/**
 * Input component events
 */
export interface InputEvents { }

/**
 * Input component actions
 */
export interface InputActions { }

/**
 * Input component object model
 */
export interface InputModel extends InputProps, InputEvents, InputActions { }
