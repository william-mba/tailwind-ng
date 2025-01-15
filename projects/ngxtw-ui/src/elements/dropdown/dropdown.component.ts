import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DropdownToken, OverlayPosition } from '@ngxtw/core';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DropdownToken, useExisting: DropdownComponent }]
})
export class DropdownComponent extends DropdownToken {
  @Input() position: OverlayPosition = { top: 'top-2', right: 'right-0' };

  protected override onInit(): void {
    this.classList.initFrom(this.position);
    this.config.get('Dropdown').subscribe(config => this.classList.setFrom(config));

    this.opened.subscribe(() => {
      this.updatePositionIfNeeded();
      window.addEventListener('scroll', this.onScroll.bind(this), false);
    });
    this.closed.subscribe(() => {
      window.removeEventListener('scroll', this.onScroll.bind(this), false);
    });
    if (!this.isDisabled) {
      this.initEventListeners();
    } else {
      this.removeEventListeners();
    }
  }

  protected initEventListeners(): void {
    this.nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), false);
  }

  protected removeEventListeners(): void {
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), false);
  }

  protected onScroll(): void {
    if (!this.isOpened) return;
    if (!this.scrolling) {
      const id = setTimeout(() => {
        requestAnimationFrame(() => {
          this.updatePositionIfNeeded();
        });
        clearTimeout(id);
      }, 300);
    }
    this.scrolling = true;
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
    if (!this.isOpened) return;
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.stopImmediatePropagation();
      this.close();
    }
  }
}
