import { Directive, inject, Input, output, OutputEmitterRef } from "@angular/core";
import { classlist } from "../utils";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { BaseActions, BaseProps } from "../directives";

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

export const INPUT_TEXT_CONFIG = InjectionTokenFactory.create<string>('', 'INPUT_TEXT_CONFIG');

export function isInputText(component: unknown): component is InputText {
  return component instanceof InputTextBase;
}

@Directive()
export abstract class InputTextBase extends BaseDirective<HTMLInputElement> implements InputText {

  protected override buildStyle(): void {
    this.nativeElement.className = classlist(this.class).set(inject(INPUT_TEXT_CONFIG)).value;
  }

  @Input() set value(value: string) {
    this.nativeElement.value = value;
  }
  get value(): string {
    return this.nativeElement.value;
  }
  get isValid(): boolean {
    return this.nativeElement.validity.valid;
  }
  get isEmpty(): boolean {
    return this.value.trim().length === 0;
  }
  get normalizedValue(): string {
    return this.value.trim().toLocaleLowerCase();
  }

  valueChange = output<string>();

  changes = output<string>();

  clear(): void {
    this.value = '';
  }

  protected onChange(event: Event): void {
    event.stopPropagation();
    this.valueChange.emit(this.value);
  }

  protected onInput(event: Event): void {
    event.stopPropagation();
    this.changes.emit(this.value);
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('change', this.onChange.bind(this), false);
    this.nativeElement.addEventListener('input', this.onInput.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('change', this.onChange.bind(this), false);
    this.nativeElement.removeEventListener('input', this.onInput.bind(this), false);
  }

  // Override default keyboard event preventions.
  protected override onKeyboardEvent(event: Event): void {
    this.preventInteractionIfDisabled(event);
  }
}
