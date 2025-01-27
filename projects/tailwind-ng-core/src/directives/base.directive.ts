import { DestroyRef, Directive, ElementRef, inject, Injector, Input, OnInit } from "@angular/core";
import { BaseState, BaseActions, FocusOptions } from "../interfaces/base";
import { DOCUMENT } from '@angular/common';
import { ClassList } from "../config";

/**
 * @TailwindNG Base component directive.
 */
@Directive({
  host: {
    '[attr.class]': 'classList',
    '[attr.inert]': 'isDisabled || null',
    '[attr.disabled]': 'isDisabled || null',
    '[attr.aria-disabled]': 'isDisabled || null',
  }
})
export abstract class BaseDirective<T extends HTMLElement = HTMLElement> implements BaseState<T>, BaseActions, OnInit {
  readonly nativeElement: T = inject(ElementRef<T>).nativeElement;
  protected readonly _document = inject(DOCUMENT);
  protected readonly _injector = inject(Injector);
  protected readonly _destroyRef = inject(DestroyRef);

  readonly classList = new ClassList();
  @Input() class?: string;

  private _isDisabled = false;

  @Input({ alias: 'disabled' })
  get isDisabled(): boolean {
    return this._isDisabled;
  };
  set isDisabled(value: boolean | '') {
    const newState = (value === '') || value;
    if (this._isDisabled !== newState) {
      this._isDisabled = newState;
      this.onInit();
    }
  }

  get isFocused(): boolean {
    return this.nativeElement === this._document.activeElement;
  }

  get hasFocus(): boolean {
    return this.nativeElement.contains(this._document.activeElement);
  }

  isHovered = false;

  ngOnInit(): void {
    this.classList.init(this.class);
    this.onInit();
  }

  /**
   * Init hook.
   */
  protected abstract onInit(): void;

  focus({ target = this.nativeElement, behavior = 'self' }: FocusOptions = {}): HTMLElement | undefined {
    if (this.isDisabled) return;
    if (!target) return;

    if (behavior === 'self') {
      target.focus();
      return target;
    }

    switch (behavior) {
      case 'nextSibling':
        target = target?.nextElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement;
        }
        break;
      case 'previousSibling':
        target = target?.previousElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement;
        }
        break;
      case 'firstChild':
        target = target?.firstElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement;
        }
        break;
      case 'lastChild':
        target = target?.lastElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement;
        }
        break;
    }
    target?.focus();
    return target;
  }

  private currentVisualFocusedElement?: HTMLElement;
  setVisualfocus({ target = this.nativeElement, behavior = 'self' }: FocusOptions = {}): HTMLElement | undefined {
    if (this.isDisabled) return;
    if (!target) return;

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
        target = target?.nextElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement;
        }
        break;
      case 'previousSibling':
        target = target?.previousElementSibling as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement;
        }
        break;
      case 'firstChild':
        target = target?.firstElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement;
        }
        break;
      case 'lastChild':
        target = target?.lastElementChild as HTMLElement;
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement;
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

  private isDisabledElement(element: HTMLElement): boolean {
    return element.hasAttribute('disabled') || element.ariaDisabled === 'true';
  }

  /**
   * Generates a basic random ID.
   */
  protected randomId(prefix = 'tw'): string {
    return `${prefix}-${Math.random().toString(4).substring(2, 10)}`;
  }
}
