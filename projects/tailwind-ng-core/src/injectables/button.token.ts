import { Directive, inject, Input, OnInit } from "@angular/core";
import { BaseDirective } from "../directives";
import { Popup } from "../interfaces/popup";
import { Button, ButtonImmutableStates } from "../interfaces";
import { ConfigOf } from "../config/config-of";
import { isDropdown } from "./dropdown.token";
import { isDialog } from "./dialog.token";
import { isCombobox } from "./combobox.token";
import { InjectionTokenFactory } from "./injection-token.factory";
import { ButtonConfig } from "../config/interfaces";

export const BUTTON_CONFIG = InjectionTokenFactory.create<Partial<ButtonConfig>>({}, 'BUTTON_CONFIG');

@Directive()
export abstract class ButtonBase extends BaseDirective<HTMLButtonElement> implements ConfigOf<'Button'>, ButtonImmutableStates, OnInit {
  @Input() config = inject(BUTTON_CONFIG);
  @Input() popup?: Popup;

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.popup) {
      queueMicrotask(() => {
        if (isDropdown(this.popup)) {
          this.nativeElement.setAttribute('aria-haspopup', 'menu');
        } else if (isDialog(this.popup)) {
          this.nativeElement.setAttribute('aria-haspopup', 'dialog');
        } else if (isCombobox(this.popup)) {
          this.nativeElement.setAttribute('aria-haspopup', 'listbox');
        } else {
          this.nativeElement.setAttribute('aria-haspopup', 'true');
        }
      });
      const { options } = this.popup;
      if (options) {
        options.trigger = this;
        options.afterClosing.focusTrigger = true;
      }
    }
  }
}


/**
 * Checks if the component is a Button.
 * If so, you can have access to the Button members inside this block scope.
 */
export function isButton(component: unknown): component is Button {
  return component instanceof ButtonBase;
}

/**
 * Checks if the component is a Primary Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isPrimaryButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'primary';
}

/**
 * Checks if the component is a Secondary Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isSecondaryButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'secondary';
}

/**
 * Checks if the component is a Tonal Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isTonalButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'tonal';
}

/**
 * Checks if the component is a Text Button.
 * If so, you can safely access the Button members inside this block scope.
 */
export function isTextButton(component: unknown): component is Button {
  return isButton(component) && component.variant === 'text';
}
