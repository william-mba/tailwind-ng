import { Directive, ElementRef, inject, input, Input, OnDestroy, OnInit } from "@angular/core";
import { BaseProps, BaseActions, FocusOptions } from "../interfaces/base";
import { DOCUMENT } from '@angular/common';
import { ClassList } from "../config/classlist";
import { isEnterOrSpace, isNavigation } from "../guards";
import { Config } from "../types/config.type";

/**
 * @TailwindNG Base component directive.
 */
@Directive({
  host: {
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled || null',
  }
})
export abstract class BaseDirective<T extends HTMLElement = HTMLElement> implements BaseProps<T>, BaseActions, OnInit, OnDestroy {
  readonly nativeElement: T = inject(ElementRef<T>).nativeElement;
  protected readonly _document = inject(DOCUMENT);
  protected isInitialized = false;

  classList!: ClassList;
  class = input<string | string[] | Config | undefined | null>(null);

  private _isDisabled = false;

  @Input()
  set disabled(value: boolean | '') {
    const newState = (value === '') || value;
    if (this._isDisabled !== newState) {
      this._isDisabled = newState;
      if (this.isInitialized) {
        this.buildStyle();
      }
    }
  }
  get disabled(): boolean {
    return this._isDisabled;
  };

  get isFocused(): boolean {
    return this.nativeElement === this._document.activeElement;
  }

  get hasFocus(): boolean {
    return this.nativeElement.contains(this._document.activeElement);
  }

  isHovered = false;

  ngOnInit(): void {
    this.buildStyle();
    this.addEventListeners();
    this.isInitialized = true;
  }

  ngOnDestroy(): void {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(this.removeEventListeners.bind(this));
    } else {
      queueMicrotask(this.removeEventListeners.bind(this));
    }
  }

  /**
   * Builds the component's style.
   */
  protected abstract buildStyle(): void;

  /**
   * Adds event listeners to the component.
   *
   * This method is called during the component's initialization.
   * Override this method to add additional event listeners.
   * Those listeners will be removed when the component is destroyed.
   */
  protected addEventListeners() {
    this.nativeElement.addEventListener('click', this.preventInteractionIfDisabled.bind(this), true);
    this.nativeElement.addEventListener('pointerdown', this.preventInteractionIfDisabled.bind(this), true);
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), false);
  }

  /**
   * Removes event listeners from the component.
   *
   * This method is called when the component is destroyed.
   * Override this method to remove additional event listeners.
   */
  protected removeEventListeners() {
    this.nativeElement.removeEventListener('click', this.preventInteractionIfDisabled.bind(this), true);
    this.nativeElement.removeEventListener('pointerdown', this.preventInteractionIfDisabled.bind(this), true);
    this.nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), false);
  }

  // A disabled element should not be interactive.
  protected preventInteractionIfDisabled(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    // Prevent scrolling when using arrow up and down keys.
    if (isEnterOrSpace(event.key) || isNavigation(event.key)) {
      event.preventDefault();
    }
  }

  focus(options: FocusOptions = {}): HTMLElement | undefined {
    if (this.disabled) return;
    const { behavior = 'self', preventScroll = true } = options;
    let { target = this.nativeElement } = options;

    if (!target) return;

    if (behavior === 'self') {
      target.focus({ preventScroll: preventScroll });
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
    target?.focus({ preventScroll: preventScroll });
    return target;
  }

  private currentVisualFocusedElement?: HTMLElement;
  setVisualfocus(options: FocusOptions = {}): HTMLElement | undefined {
    if (this.disabled) return;

    const { behavior = 'self' } = options;
    let { target = this.nativeElement } = options;

    if (!target) return;

    if (behavior === 'self') {
      if (this.currentVisualFocusedElement) {
        this.currentVisualFocusedElement.removeAttribute('data-visual-focused');
      }
      target.setAttribute('data-visual-focused', '');
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
      this.currentVisualFocusedElement.removeAttribute('data-visual-focused');
    }
    if (target) {
      target.setAttribute('data-visual-focused', '');
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
      });
    }
    this.currentVisualFocusedElement = target;
    return target;
  }

  removeVisualfocus(target: HTMLElement = this.nativeElement): void {
    if (target === this.currentVisualFocusedElement) {
      this.currentVisualFocusedElement = undefined;
    }
    target.removeAttribute('data-visual-focused');
  }

  scrollIntoView(options: ScrollIntoViewOptions = {}): void {
    requestAnimationFrame(() => {
      const { block = 'nearest', inline = 'nearest' } = options;
      this.nativeElement.scrollIntoView({ block: block, inline: inline });
    });
  }

  get hasVisualFocus(): boolean {
    return this.nativeElement.hasAttribute('data-visual-focused');
  }

  private isDisabledElement(element: HTMLElement): boolean {
    return element.hasAttribute('disabled') || element.ariaDisabled === 'true';
  }

  /**
   * Generates a basic random ID.
   */
  protected randomId(prefix = 'tw'): string {
    return `${prefix}-${(Math.random()).toString(16)}`;
  }
}
