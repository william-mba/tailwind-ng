import { ChangeDetectionStrategy, Component, forwardRef, inject, Input, ViewEncapsulation } from '@angular/core';
import { classlist, Dropdown, DROPDOWN_CONFIG, DropdownBase, isEscape, TwIf } from '@tailwind-ng/core';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-container *twIf="isOpened()"><ng-content /></ng-container>`,
  imports: [TwIf],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DropdownBase, useExisting: forwardRef(() => DropdownComponent) }]
})
export class DropdownComponent extends DropdownBase implements Dropdown {
  @Input() closeOnBlur?: boolean;

  protected override buildStyle(): void {
    this.nativeElement.className = classlist(this.class).set(inject(DROPDOWN_CONFIG)).value;
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
