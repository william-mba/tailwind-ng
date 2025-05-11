import { Directive, forwardRef, Input, OnInit } from '@angular/core'
import { PopupDirective } from '../directives'
import { InjectionTokenFactory } from '../tokens/injection-token.factory'
import { PopupAdvancedActions, PopupBaseActions, PopupProps } from '../directives'

/**
 * @TailwindNG Dialog component interface.
 */
export interface Dialog extends PopupProps, PopupBaseActions, PopupAdvancedActions {
  /**
   * Whether the dialog should close automatically after the given `displayDuration`.
   * Default is `false`.
   */
  readonly autoClose: boolean
  /**
   * Whether to automatically focus the dialog's primary action when its open.
   * If no primary action button is found, the dialog's icon (if any), will be focused instead.
   * Default is `true`.
   */
  readonly autoFocus: boolean
  /**
   * The delay to display the dialog before it auto closes. Only applicable if `autoClose` is `true`.
   * - Range in milliseconds: `[min: 1000, max: 10000]`; Default is `2000`.
   * - If the given delay is outside this range, the default delay will be used.
   */
  readonly displayDelay?: number
  /**
   * Whether the dialog is modal. If `true`, the dialog will be modal and will prevent any interaction with the rest of the page.
   * Default is `true`.
   */
  readonly isModal: boolean
}

export interface DialogConfig {
  scrim: string
  container: string
  backdrop: string
}

export const DIALOG_CONFIG = InjectionTokenFactory.create<Partial<DialogConfig>>(
  {},
  'DIALOG_CONFIG'
)

@Directive({
  host: {
    role: 'dialog',
    '[attr.aria-modal]': 'isModal',
  },
  providers: [
    {
      provide: PopupDirective,
      useExisting: forwardRef(() => DialogBase),
    },
  ],
})
export abstract class DialogBase
  extends PopupDirective<HTMLDialogElement>
  implements Dialog, OnInit
{
  @Input() isModal = true
  @Input() displayDelay?: number
  @Input() autoClose = false
  @Input() autoFocus = true
  @Input() override restoreFocus = true

  override ngOnInit(): void {
    super.ngOnInit()
    if (this.autoClose) {
      this.restoreFocus = false
    }
    this.opened.subscribe(() => {
      if (this.autoFocus) {
        this.focusPrimaryAction()
      }
      if (this.autoClose) {
        this.closeAfter(this.displayDelay)
      }
      if (!this.nativeElement.ariaLabel) {
        queueMicrotask(() => {
          this.nativeElement.ariaLabel =
            this.nativeElement.querySelector('h1')?.textContent?.trim() || null
          if (!this.nativeElement.ariaLabel) {
            this.nativeElement.ariaLabel =
              this.nativeElement.querySelector('h2')?.textContent?.trim() || null
          }
          if (!this.nativeElement.ariaLabel) {
            this.nativeElement.ariaLabel =
              this.nativeElement.querySelector('h3')?.textContent?.trim() || null
          }
        })
      }
    })
  }

  private primaryAction: HTMLElement | null = null
  private primaryActionQueried = false
  protected focusPrimaryAction() {
    if (this.primaryAction) {
      setTimeout(() => this.primaryAction?.focus(), 100)
    } else if (!this.primaryAction && !this.primaryActionQueried) {
      this.primaryActionQueried = true
      setTimeout(() => {
        this.primaryAction = this.nativeElement.querySelector(
          'button[variant=primary],tw-button[variant=primary]'
        ) as HTMLElement
        this.primaryAction?.focus()
      }, 100)
    }
  }
}

/**
 * Checks if the component is a Dialog.
 * If so, you can safely access the Dialog members inside this block scope.
 */
export function isDialog(component: unknown): component is Dialog {
  return component instanceof DialogBase
}
