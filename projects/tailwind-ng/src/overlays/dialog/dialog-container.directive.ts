import { Directive, inject, OnInit } from "@angular/core";
import { BaseDirective, classlist, DIALOG_CONFIG, isEscape } from '@tailwind-ng/core';
import { DialogComponent } from "./dialog.component";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    '[class]': 'classList.value()',
    '[tabindex]': 'disabled ? null : -1',
  }
})
export class DialogContainerDirective extends BaseDirective implements OnInit {
  private readonly dialog = inject(DialogComponent, { skipSelf: true });
  protected config = inject(DIALOG_CONFIG).container;

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set(this.config!);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.dialog.opened.subscribe(() => {
      if (this.dialog.autoFocus) {
        this.focusPrimaryAction();
      }
      if (this.dialog.autoClose) {
        this.dialog.closeAfter(this.dialog.displayDelay);
      }
    });
    if (this.dialog.autoClose && this.dialog.isOpened()) {
      this.dialog.closeAfter(this.dialog.displayDelay);
    }
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
      });
    } else {
      this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (isEscape(event.key)) {
      event.stopPropagation();
      this.dialog.close();
    }
  }

  private focusPrimaryAction() {
    setTimeout(() => {
      (this.nativeElement.querySelector('button[variant=primary],tw-button[variant=primary]') as HTMLElement)?.focus();
    }, 100);
  }

  protected onPointerEvent(event: UIEvent) {
    if (this.disabled) {
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
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }
}
