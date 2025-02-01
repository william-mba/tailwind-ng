import { afterNextRender, Directive, inject } from "@angular/core";
import { BaseDirective, KBKey } from '@tailwind-ng/core';
import { DialogComponent } from "./dialog.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    '[tabindex]': 'isDisabled ? null : -1',
  }
})
export class DialogContainerDirective extends BaseDirective {
  private readonly dialog = inject(DialogComponent, { skipSelf: true });

  constructor() {
    super();
    afterNextRender({
      read: () => {
        this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
      }
    })
  }

  protected override onInit() {
    this.dialog.config.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(config => {
      this.classList.set(config.container);
    });
    this.dialog.opened.subscribe(() => {
      if (this.dialog.autoFocus) {
        this.focusPrimaryActionOrDefault();
      }
      if (this.dialog.autoClose) {
        this.dialog.closeAfter(this.dialog.displayDuration);
      }
    });

    if (this.dialog.autoClose && this.dialog.isOpened) {
      this.dialog.closeAfter(this.dialog.displayDuration);
    }
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    if (KBKey.isEscape(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      this.dialog.close();
    } else if (KBKey.isEnterOrSpace(event.key)) {
      const icon = this.nativeElement.querySelector('tw-icon') as HTMLElement;
      if (icon && icon === this._document.activeElement) {
        event.preventDefault();
        icon.tabIndex = 0;
        icon.click();
      }
    }
  }

  private focusPrimaryActionOrDefault() {
    const id = setTimeout(() => {
      const action = this.nativeElement.querySelector('button[variant=primary]') as HTMLElement;
      if (action) {
        action.focus();
      } else {
        this.focus();
      }
      clearTimeout(id);
    }, 50);
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

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.nativeElement.addEventListener('keyup', this.onKeyboardEvent.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('keyup', this.onKeyboardEvent.bind(this), false);
  }
}
