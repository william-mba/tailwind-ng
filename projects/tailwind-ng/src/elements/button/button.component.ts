import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, model } from '@angular/core';
import { Button, ButtonBase, ButtonVariant, isArrowDown, isArrowDownOrRight, isArrowUp, isArrowUpOrDown, isArrowUpOrLeft, isDropdown, isEnterOrSpace, isEscape, isTab, SizeOption } from '@tailwind-ng/core';

/**
 * @TailwindNG Button component
 */
@Component({
  selector: 'tw-button, [tw-button], [twButton]',
  exportAs: 'twButton',
  host: {
    '[class]': 'classList.value',
    '[attr.variant]': 'variant()',
    '[tabindex]': 'disabled ? null : tabIndex',
    '[attr.aria-expanded]': 'isPopupExpanded || null',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonBase, useExisting: ButtonComponent }]
})
export class ButtonComponent extends ButtonBase implements Button {
  isFab = model(false);
  size = model<SizeOption>('md');
  variant = model<ButtonVariant>('primary');
  @Input() tabIndex = 0;

  protected get isPopupExpanded(): boolean {
    return this.popup?.isOpened() || false;
  }

  protected override buildStyle(): void {
    this.classList.set({
      ...this.config[this.size()],
      ...this.config[this.variant()],
      ...this.isFab() ? this.config.fab : {}
    });
  }

  protected onPointerUp(event: Event): void {
    event.stopPropagation();
    if (isDropdown(this.popup)) {
      setTimeout(() => {
        if (this.popup?.isOpened()) {
          this.popup?.focus({ behavior: 'firstChild' });
        }
      }, 100);
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (!isEscape(event.key)) {
      event.stopPropagation();
    }
    if (isTab(event.key)) {
      event.preventDefault();
    } else if (isEnterOrSpace(event.key)) {
      this.nativeElement.click();
      if (isDropdown(this.popup) && this.popup.isOpened()) {
        setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
        }, 50);
      }
    } else if (isArrowUpOrDown(event.key) && isDropdown(this.popup)) {
      if (isArrowDown(event.key)) {
        if (!this.popup.isOpened()) {
          this.popup.open();
        }
        setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
        }, 50);
      } else if (isArrowUp(event.key)) {
        if (this.popup.isOpened()) {
          this.popup.close();
        } else {
          this.popup.open();
          setTimeout(() => {
            this.popup?.focus({ behavior: 'lastChild' });
          }, 50);
        }
      }
    } else if (isArrowDownOrRight(event.key)) {
      if (!this.focus({ behavior: 'nextSibling' })) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.parentElement as HTMLElement });
      }
    } else if (isArrowUpOrLeft(event.key)) {
      if (!this.focus({ behavior: 'previousSibling' })) {
        this.focus({ behavior: 'lastChild', target: this.nativeElement.parentElement as HTMLElement });
      }
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    if (this.popup) {
      this.nativeElement.addEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    if (this.popup) {
      this.nativeElement.removeEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }
}
