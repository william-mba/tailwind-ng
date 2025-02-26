import { Directive, inject, Input, output } from "@angular/core";
import { InputTextConfig } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { InputText } from "../interfaces";

export const INPUT_TEXT_CONFIG = InjectionTokenFactory.create<Partial<InputTextConfig>>({}, 'INPUT_TEXT_CONFIG');

export function isInputText(component: unknown): component is InputText {
  return component instanceof InputTextBase;
}

@Directive({})
export abstract class InputTextBase extends BaseDirective<HTMLInputElement> implements InputText {
  protected config = inject(INPUT_TEXT_CONFIG);

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
