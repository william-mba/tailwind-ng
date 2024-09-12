import { INPUT_CONFIG, InputConfig } from './input.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { InputProps, InputType } from './input.model';
import { afterNextRender, AfterRenderPhase, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({ template: '' })
export abstract class AbstractInput implements InputProps, OnInit {
  @Input() id!: string;
  @Input() name!: string;
  @Input() class!: string;
  @Input() form?: FormGroup;
  @Input() type!: InputType;
  @Input() placeholder?: string;
  @Input() validator?: ValidatorFn;
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() pattern?: string | RegExp;

  @ViewChild('inputRef', { static: true, read: ElementRef })
  inputRef!: ElementRef<HTMLInputElement>;

  public control!: FormControl<string>;
  public hostRef: HTMLElement = inject(ElementRef).nativeElement;
  private readonly config: InputConfig = inject(INPUT_CONFIG);

  constructor() {
    afterNextRender(() => {
      this.resetHostElementStyle();
      this.setInputNativeAttributes();
      this.removeHostElementExtraAttributes();
    }, { phase: AfterRenderPhase.Write });
  }

  ngOnInit(): void {
    this.initControl();
    this.class = mergeClassNames(toClassNames(this.config), this.class);
  }

  /**
   * Returns whether the input element is touched or dirty.
   */
  public get touchedOrDirty() {
    let isTouchedOrDirty: boolean = false;
    if (!this.form && this.control) {
      isTouchedOrDirty = this.control.touched || this.control.dirty;
    }
    else if (this.form && this.control) {
      isTouchedOrDirty = this.form.controls[this.name].touched || this.form.controls[this.name].dirty;
    }
    return isTouchedOrDirty;
  };

  /**
   * Returns whether the input element is valid.
   */
  public get valid(): boolean {
    let isValid: boolean = false;
    if (!this.form && this.control) {
      isValid = this.control.valid;
    }
    else if (this.form && this.control) {
      isValid = this.form.controls[this.name].valid;
    }
    return isValid && this.touchedOrDirty;
  }

  /**
   * Returns whether the input element is invalid.
   */
  public get invalid(): boolean {
    let isInvalid: boolean = false;
    if (!this.form) {
      isInvalid = this.control.invalid;
    }
    else if (this.form && this.control) {
      isInvalid = this.form.controls[this.name].invalid;
    }
    return isInvalid && this.touchedOrDirty;
  }

  /**
   * Returns the validations for the input element.
   */
  public get validators(): ValidatorFn[] {
    let rules: ValidatorFn[] = [];
    if (this.required) {
      rules.push(Validators.required);
    }
    if (this.pattern) {
      rules.push(Validators.pattern(this.pattern));
    }
    if (this.type === 'email') {
      rules.push(Validators.email);
    }
    if (this.validator) {
      rules.push(this.validator);
    }
    return rules;
  }

  /**
   * Initializes the control for the input element.
   */
  protected initControl() {
    this.control = new FormControl(
      { value: this.value, disabled: this.disabled },
      { nonNullable: true }
    );
    this.control.setValidators(this.validators);

    if (this.form) {
      this.form.addControl(this.name, this.control);
    }
  }

  /**
   * Resets the host styles to ensure that the class value is correctly applied to the input element.
   */
  private resetHostElementStyle() {
    this.hostRef.style.margin = '0';
    this.hostRef.style.border = '0';
    this.hostRef.style.padding = '0';
    this.hostRef.style.width = 'fit-content';
    this.hostRef.style.backgroundColor = 'transparent';
  }

  /**
   * Sets the native attributes of the child input element.
   */
  private setInputNativeAttributes() {
    if (this.id) {
      this.inputRef.nativeElement.id = this.id;
    }
    if (this.name) {
      this.inputRef.nativeElement.name = this.name;
    }
    if (this.placeholder) {
      this.inputRef.nativeElement.placeholder = this.placeholder;
    }
  }

  /**
   * Removes any extra attributes from the host element
   * to avoid any conflicts with the input element attributes.
   */
  private removeHostElementExtraAttributes() {
    Object.keys(this).forEach((key: string) => {
      this.hostRef.removeAttribute(key);
    });
  }
}
