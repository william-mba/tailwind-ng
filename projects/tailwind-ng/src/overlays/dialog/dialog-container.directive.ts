import { afterNextRender, Directive, inject } from "@angular/core";
import { BaseDirective } from '@tailwind-ng/core';
import { DialogComponent } from "./dialog.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { take, timer } from "rxjs";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    '[tabindex]': 'isDisabled ? null : -1',
  }
}) // eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogContainer extends BaseDirective {
  private readonly dialog = inject(DialogComponent, { skipSelf: true });

  constructor() {
    super();
    afterNextRender({
      read: () => {
        this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
      },
    })
  }

  protected override onInit() {
    this.dialog.config$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(config => {
      this.classList.set(config.container);
    });
    this.dialog.opened.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.initEventListeners();
      if (this.dialog.autoFocus) {
        this.focusPrimaryActionOrDefault();
      }
      if (this.dialog.autoClose) {
        this.dialog.closeAfter(this.dialog.displayDuration);
      }
    });
    this.dialog.closed.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.removeEventListeners();
    });

    if (this.dialog.autoClose && this.dialog.isOpened) {
      this.dialog.closeAfter(this.dialog.displayDuration);
    }
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.dialog.close();
    } else if (['Enter', ' '].includes(event.key)) {
      const icon = this.nativeElement.querySelector('tw-icon') as HTMLElement;
      if (icon && icon === this._document.activeElement) {
        event.preventDefault();
        icon.tabIndex = 0;
        icon.click();
      }
    }
  }

  protected focusPrimaryActionOrDefault() {
    timer(this.dialog.animationDuration).pipe(take(1)).subscribe(() => {
      const action = this.nativeElement.querySelector('button[variant=primary]') as HTMLElement;
      if (action) {
        action.focus();
      } else {
        this.focus();
      }
    });
  }

  protected onPointerEvent(event: UIEvent) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    switch (event.type) {
      case 'pointerover':
        if (this.isHovered) return;
        this.dialog.isHovered = this.isHovered = true;
        break;
      case 'pointerleave':
        if (!this.isHovered) return;
        this.dialog.isHovered = this.isHovered = false;
        break;
    }
  }

  protected initEventListeners(): void {
    this.nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), true);
  }

  protected removeEventListeners(): void {
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), true);
  }
}
