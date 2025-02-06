import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Button, ButtonBase, ButtonVariant, ClassList, isArrowDown, isArrowDownOrRight, isArrowUp, isArrowUpOrLeft, isDropdown, isEnterOrSpace, isEscape, Popup, SizeOption } from '@tailwind-ng/core';

/**
 * @TailwindNG Button component
 */
@Component({
  selector: 'tw-button, [tw-button], [twButton]',
  exportAs: 'twButton',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classList.value()',
    '[attr.variant]': 'variant',
    '[tabindex]': 'isDisabled ? null : tabIndex',
    '[attr.aria-expanded]': 'popupExpanded || null',
    '[attr.aria-haspopup]': 'ariaHasPopup || null',
  },
  providers: [{ provide: ButtonBase, useExisting: ButtonComponent }]
})
export class ButtonComponent extends ButtonBase implements Button {
  @Input() isFab = false;
  @Input() tabIndex = 0;
  @Input() popup?: Popup;
  @Input() size: SizeOption = 'md';
  @Input() variant: ButtonVariant = 'primary';

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set({
        ...this.config[this.size],
        ...this.config[this.variant],
        ...this.isFab ? this.config.fab : {}
      });
    }
    if (this.popup) {
      this.popup.trigger = this;
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

  protected onPointerUp(event: Event): void {
    event.stopPropagation();
    if (this.popup) {
      if (isDropdown(this.popup)) {
        setTimeout(() => {
          if (this.popup?.isOpened) {
            this.popup?.focus({ behavior: 'firstChild' });
          }
        }, 50);
      }
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (!isEscape(event.key)) {
      event.stopPropagation();
    }
    if (isEnterOrSpace(event.key)) {
      this.nativeElement.click();
      if (isDropdown(this.popup) && this.popup.isOpened) {
        setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
        }, 50);
      }
    }
    if (this.popup && isDropdown(this.popup)) {
      if (isArrowDown(event.key)) {
        if (!this.popup.isOpened) {
          this.popup.open();
        }
        setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
        }, 50);
      }
      if (isArrowUp(event.key)) {
        if (this.popup.isOpened) {
          this.popup.close();
        } else {
          this.popup.open();
          setTimeout(() => {
            this.popup?.focus({ behavior: 'lastChild' });
          }, 50);
        }
      }
    }
    if (isArrowDownOrRight(event.key)) {
      if (!this.focus({ behavior: 'nextSibling' })) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.parentElement as HTMLElement });
      }
    }
    if (isArrowUpOrLeft(event.key)) {
      if (!this.focus({ behavior: 'previousSibling' })) {
        this.focus({ behavior: 'lastChild', target: this.nativeElement.parentElement as HTMLElement });
      }
    }
  }

  protected get popupExpanded(): boolean {
    return this.popup?.isOpened || false;
  }

  protected get ariaHasPopup(): string | boolean {
    if (!this.popup) return false;
    return this.popup.type === 'Dropdown' ? 'menu' :
      this.popup.type === 'Combobox' ? 'listbox' :
        this.popup.type === 'Dialog' ? 'dialog' : true;
  }
}
