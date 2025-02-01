import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { Dropdown, DropdownBase, KBKey, OverlayPosition } from '@tailwind-ng/core';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DropdownBase, useExisting: forwardRef(() => DropdownComponent) }]
})
export class DropdownComponent extends DropdownBase implements Dropdown {
  @Input() position: OverlayPosition = { top: 'top-2', right: 'right-0' };

  protected override onInit(): void {
    this.classList.init(this.position);
    this.config.subscribe(config => this.classList.set(config));
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), false);
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
        this.isHovered = true;
        break;
      case 'pointerleave':
        if (!this.isHovered) return;
        this.isHovered = false;
        break;
    }
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    } else {
      if (KBKey.isEscape(event.key)) {
        event.stopImmediatePropagation();
        this.close();
      }
    }
  }
}
