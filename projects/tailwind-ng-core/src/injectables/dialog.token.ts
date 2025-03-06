import { Directive, forwardRef, inject, Input, OnInit } from "@angular/core";
import { DialogConfig } from "../config";
import { PopupDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Dialog } from "../interfaces/dialog";

export const DIALOG_CONFIG = InjectionTokenFactory.create<Partial<DialogConfig>>({}, 'DIALOG_CONFIG');

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DialogBase) }] })
export abstract class DialogBase extends PopupDirective<HTMLDialogElement> implements OnInit {
  protected config = inject(DIALOG_CONFIG);
  @Input() displayDelay?: number;
  @Input() autoClose = false;
  @Input() autoFocus = true;
  @Input() override restoreFocus = true;

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.autoClose) {
      this.restoreFocus = false;
    }
    this.opened.subscribe((isOpened) => {
      if (isOpened) {
        if (this.autoFocus) {
          this.focusPrimaryAction();
        }
        if (this.autoClose) {
          this.closeAfter(this.displayDelay);
        }
        if (!this.nativeElement.ariaLabel) {
          queueMicrotask(() => {
            this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
            if (!this.nativeElement.ariaLabel) {
              this.nativeElement.ariaLabel = this.nativeElement.querySelector('h2')?.textContent?.trim() || null;
            }
            if (!this.nativeElement.ariaLabel) {
              this.nativeElement.ariaLabel = this.nativeElement.querySelector('h3')?.textContent?.trim() || null;
            }
          });
        }
      }
    });
  }

  private primaryAction: HTMLElement | null = null;
  private primaryActionQueried = false;
  protected focusPrimaryAction() {
    if (this.primaryAction) {
      setTimeout(() => this.primaryAction?.focus(), 100);
    } else if (!this.primaryAction && !this.primaryActionQueried) {
      this.primaryActionQueried = true;
      setTimeout(() => {
        this.primaryAction = this.nativeElement.querySelector('button[variant=primary],tw-button[variant=primary]') as HTMLElement;
        this.primaryAction?.focus();
      }, 100);
    }
  }
}

/**
 * Checks if the component is a Dialog.
 * If so, you can safely access the Dialog members inside this block scope.
 */
export function isDialog(component: unknown): component is Dialog {
  return component instanceof DialogBase;
}
