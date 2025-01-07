import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PopupDirective } from '../../../core/directives/popup.directive';
import { OverlayPosition } from '../../../core/types/layout/overlay-position.type';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-content />`,
  providers: [{ provide: PopupDirective, useExisting: DropdownComponent }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['position']
})
export class DropdownComponent extends PopupDirective {
  position: OverlayPosition = { top: 'top-2', right: 'right-0' };

  protected override onInit(): void {
    this.initEventListeners();
    this.classList.initFrom(this.position);
    this.config.get('Dropdown').subscribe(config => this.classList.setFrom(config));

    this.opened.subscribe(() => {
      this.updatePositionIfNeeded();
      window.addEventListener('scroll', this.onScroll.bind(this), false);
    });
    this.closed.subscribe(() => {
      window.removeEventListener('scroll', this.onScroll.bind(this), false);
    });
  }

  override enable() {
    super.enable();
    this.initEventListeners();
  }

  override disable() {
    super.disable();
    this.removeEventListeners();
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
