import { Directive, ElementRef, inject, OnInit, OutputEmitterRef } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../config/reactive-config";
import { BaseState, BaseActions, BaseEvents, FocusOptions } from "./base.interface";

/**
 * @ngxtw Base component directive.
 */
@Directive({
  host: {
    '[attr.class]': 'classList',
    '[attr.inert]': 'isDisabled ? true : null',
    '[attr.disabled]': 'isDisabled ? true : null',
    '[attr.aria-disabled]': 'isDisabled ? "true" : null',
  },
  inputs: [{ name: 'className', alias: 'class' }, 'isDisabled'],
  outputs: ['disabled', 'enabled'],
})
export abstract class BaseDirective<T extends HTMLElement = HTMLElement> implements BaseState<T>, BaseActions, BaseEvents, OnInit {
  readonly config = inject(ReactiveConfig)
  readonly nativeElement: T = inject(ElementRef<T>).nativeElement;
  readonly classList = new ClassList();
  className?: string;
  disabled = new OutputEmitterRef<void>();
  enabled = new OutputEmitterRef<void>();

  get isFocused(): boolean {
    return this.nativeElement === document.activeElement;
  }

  get hasFocus(): boolean {
    return this.nativeElement.contains(document.activeElement);
  }

  isHovered = false;
  isDisabled = false;

  ngOnInit(): void {
    if (!this.isDisabled) {
      this.isDisabled = this.nativeElement.getAttribute('disabled') === '' ? true : this.nativeElement.ariaDisabled === 'true';
    }
    this.classList.init(this.className);
    this.onInit();
  }

  /**
   * Init hook.
   */
  protected abstract onInit(): void;

  enable(): void {
    if (!this.isDisabled) return;
    this.isDisabled = false;
    this.onInit();
    this.enabled.emit();
  }

  disable(): void {
    if (this.isDisabled) return;
    this.isDisabled = true;
    this.onInit();
    this.disabled.emit();
  }

  focus(options: FocusOptions = {}): HTMLElement | undefined {
    if (this.isDisabled) return;

    let { target, behavior } = options;

    if (!target) {
      target = this.nativeElement;
    }
    if (!behavior) {
      behavior = 'self';
    }
    if (behavior === 'self') {
      target.focus();
      return target;
    }

    switch (behavior) {
      case 'nextSibling':
        target = target.nextElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.nextElementSibling as HTMLElement;
        }
        break;
      case 'previousSibling':
        target = target.previousElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.previousElementSibling as HTMLElement;
        }
        break;
      case 'firstChild':
        target = target.firstElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.nextElementSibling as HTMLElement;
        }
        break;
      case 'lastChild':
        target = target.lastElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.previousElementSibling as HTMLElement;
        }
        break;
    }
    target?.focus();
    return target;
  }

  private currentVisualFocusedElement?: HTMLElement;
  setVisualfocus(options: FocusOptions = {}): HTMLElement | undefined {
    if (this.isDisabled) return;

    let { target, behavior } = options;

    if (!target) {
      target = this.nativeElement;
    }
    if (!behavior) {
      behavior = 'self';
    }
    if (behavior === 'self') {
      if (this.currentVisualFocusedElement) {
        this.currentVisualFocusedElement.removeAttribute('data-active');
      }
      target.setAttribute('data-active', '');
      this.currentVisualFocusedElement = target;
      return target;
    }

    switch (behavior) {
      case 'nextSibling':
        target = target.nextElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.nextElementSibling as HTMLElement;
        }
        break;
      case 'previousSibling':
        target = target.previousElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.previousElementSibling as HTMLElement;
        }
        break;
      case 'firstChild':
        target = target.firstElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.nextElementSibling as HTMLElement;
        }
        break;
      case 'lastChild':
        target = target.lastElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target.previousElementSibling as HTMLElement;
        }
        break;
    }
    if (this.currentVisualFocusedElement) {
      this.currentVisualFocusedElement.removeAttribute('data-active');
    }
    if (target) {
      target.setAttribute('data-active', '');
      target.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
    }
    this.currentVisualFocusedElement = target;
    return target;
  }

  removeVisualfocus(target: HTMLElement = this.nativeElement): void {
    if (target === this.currentVisualFocusedElement) {
      this.currentVisualFocusedElement = undefined;
    }
    target.removeAttribute('data-active');
  }

  get hasVisualFocus(): boolean {
    return this.nativeElement.hasAttribute('data-active');
  }

  private isDisabledElement(element: HTMLElement) {
    return element.hasAttribute('disabled') || element.ariaDisabled === 'true';
  }

  /**
   * Generates a basic random ID.
   */
  protected randomId(prefix: string = 'tw'): string {
    return `${prefix}-${Math.random().toString(4).substring(2, 10)}`;
  }
}
