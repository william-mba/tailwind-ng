import { afterNextRender, Directive, inject } from "@angular/core";
import { BaseDirective, ClassList, isEscape } from '@tailwind-ng/core';
import { DialogComponent } from "./dialog.component";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    '[class]': 'classList.value()',
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

  protected override  async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set(this.dialog.config.container!);
    }
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

  protected onKeyup(event: KeyboardEvent): void {
    if (isEscape(event.key)) {
      event.stopPropagation();
      this.dialog.close();
    }
  }

  private focusPrimaryActionOrDefault() {
    setTimeout(() => {
      (this.nativeElement.querySelector('button[variant=primary],tw-button[variant=primary]') as HTMLElement)?.focus();
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
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }
}
