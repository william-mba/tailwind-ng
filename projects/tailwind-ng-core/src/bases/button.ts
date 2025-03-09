import { Directive, inject, Input, OnInit } from "@angular/core";
import { BaseDirective } from "../directives";
import { Popup } from "../directives";
import { isDropdown } from "./dropdown";
import { isDialog } from "./dialog";
import { isCombobox } from "./combobox";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { classlist } from "../utils";
import { SizeOption } from "../types/size-options.type";
import { isArrowDown, isArrowDownOrRight, isArrowUp, isArrowUpOrDown, isArrowUpOrLeft, isEnterOrSpace, isEscape, isTab } from "../guards";

/**
 * @TailwindNG Button component interface.
 */
export interface Button {
  readonly popup?: Popup;
  readonly size: SizeOption;
  readonly isFab: boolean;
  readonly tabIndex: number;
  readonly variant: ButtonVariant;
}
/** Button variant */
export type ButtonVariant = 'primary' | 'secondary' | 'tonal' | 'text';

export interface ButtonConfig {
  primary: string,
  secondary: string,
  tonal: string,
  text: string,
  fab: string
}

export const BUTTON_SIZE = InjectionTokenFactory.create<Record<string, string>>(
  {
    xs: 'px-2 py-1.5 gap-1 text-xs rounded font-semibold',
    sm: 'px-3 py-2 gap-1.5 text-xs rounded-md font-semibold',
    md: 'px-4 py-2.5 gap-2 text-sm rounded-md font-semibold',
    lg: 'px-5 py-3 gap-2.5 text-sm rounded-md font-semibold',
    xl: 'px-6 py-3.5 gap-3 text-base rounded-md font-semibold'
  },
  'BUTTON_SIZE'
);
export const BUTTON_CONFIG = InjectionTokenFactory.create<Partial<ButtonConfig>>({}, 'BUTTON_CONFIG');

@Directive({
  host: {
    '[attr.variant]': 'variant',
    '[tabindex]': 'disabled ? null : tabIndex',
    '[attr.aria-expanded]': 'isPopupExpanded || null',
  },
})
export abstract class ButtonBase extends BaseDirective<HTMLButtonElement> implements Button, OnInit {
  @Input() tabIndex = 0;
  @Input() popup?: Popup;
  @Input() isFab = false;
  @Input() size: SizeOption = 'md';
  @Input() variant: ButtonVariant = 'primary';

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.popup) {
      if (isDropdown(this.popup)) {
        this.nativeElement.setAttribute('aria-haspopup', 'menu');
      } else if (isDialog(this.popup)) {
        this.nativeElement.setAttribute('aria-haspopup', 'dialog');
      } else if (isCombobox(this.popup)) {
        this.nativeElement.setAttribute('aria-haspopup', 'listbox');
      } else {
        this.nativeElement.setAttribute('aria-haspopup', 'true');
      }
    }
  }

  protected override buildStyle(): void {
    const config = inject(BUTTON_CONFIG);
    const className = `${inject(BUTTON_SIZE)[this.size]} ${config[this.variant]}`
    this.nativeElement.classList.add(...classlist(this.class).set(className).value);
    if (this.isFab) {
      this.nativeElement.classList.add(config.fab ?? '');
    }
  }

  protected get isPopupExpanded(): boolean {
    return this.popup?.isOpened() || false;
  }

  protected onPointerUp(event: Event): void {
    event.stopPropagation();
    if (isDropdown(this.popup)) {
      setTimeout(() => {
        if (this.popup?.isOpened()) {
          this.popup?.focus({ behavior: 'firstChild' });
        }
      }, 100);
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (!isEscape(event.key)) {
      event.stopPropagation();
    }
    if (isTab(event.key)) {
      event.preventDefault();
    } else if (isEnterOrSpace(event.key)) {
      this.nativeElement.click();
      if (isDropdown(this.popup) && this.popup.isOpened()) {
        setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
        }, 50);
      }
    } else if (isArrowUpOrDown(event.key) && isDropdown(this.popup)) {
      if (isArrowDown(event.key)) {
        if (!this.popup.isOpened()) {
          this.popup.open();
        }
        setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
        }, 50);
      } else if (isArrowUp(event.key)) {
        if (this.popup.isOpened()) {
          this.popup.close();
        } else {
          this.popup.open();
          setTimeout(() => {
            this.popup?.focus({ behavior: 'lastChild' });
          }, 50);
        }
      }
    } else if (isArrowDownOrRight(event.key)) {
      if (!this.focus({ behavior: 'nextSibling' })) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.parentElement as HTMLElement });
      }
    } else if (isArrowUpOrLeft(event.key)) {
      if (!this.focus({ behavior: 'previousSibling' })) {
        this.focus({ behavior: 'lastChild', target: this.nativeElement.parentElement as HTMLElement });
      }
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    if (this.popup) {
      this.nativeElement.addEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    if (this.popup) {
      this.nativeElement.removeEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
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
