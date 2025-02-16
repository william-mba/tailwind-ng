import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { classlist, Dropdown, DropdownBase, isEscape, OverlayPosition, TwIf } from '@tailwind-ng/core';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-container *twIf="opened()"><ng-content /></ng-container>`,
  imports: [TwIf],
  host: {
    '[class]': 'classList.value()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DropdownBase, useExisting: forwardRef(() => DropdownComponent) }]
})
export class DropdownComponent extends DropdownBase implements Dropdown {
  @Input() position: OverlayPosition = { top: 'top-2', right: 'right-0' };
  @Input() closeOnBlur = false;

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set({ ...this.config, ...this.position });
  }
  protected override addEventListeners(): void {
    super.addEventListeners();
    if (this.closeOnBlur) {
      this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
    }
    this.nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    if (this.closeOnBlur) {
      this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true);
    }
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
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
        this.isHovered = true;
        break;
      case 'pointerleave':
        if (!this.isHovered) return;
        this.isHovered = false;
        break;
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (isEscape(event.key)) {
      this.close();
    }
  }

  protected onBlur(): void {
    setTimeout(() => {
      if (!this.hasFocus) {
        this.close();
      }
    }, 50);
  }
}
