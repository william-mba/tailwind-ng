import { Directive, inject, OnInit } from "@angular/core";
import { BaseDirective, DIALOG_CONFIG, DialogBase, isEscape } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    '[tabindex]': 'disabled ? null : -1',
    '[class]': 'classList.value()',
  }
})
export class DialogContainerDirective extends BaseDirective implements OnInit {
  private readonly _dialog = inject(DialogBase, { skipSelf: true, host: true });
  protected config = inject(DIALOG_CONFIG).container;

  protected override buildStyle(): void {
    this.classList.set(this.config);
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (isEscape(event.key)) {
      event.stopPropagation();
      this._dialog.close();
    }
  }

  protected onPointerEvent(event: UIEvent) {
    switch (event.type) {
      case 'pointerover':
        if (this.isHovered) return;
        this._dialog.isHovered = this.isHovered = true;
        break;
      case 'pointerleave':
        if (!this.isHovered) return;
        this._dialog.isHovered = this.isHovered = false;
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
