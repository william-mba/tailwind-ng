import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Button, ButtonBase, ButtonVariant, ClassList, isDropdown, KBKey, PopupControl, SizeOption } from '@tailwind-ng/core';

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
  @Input() popup?: PopupControl;
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
    if (this.isDisabled) {
      event.stopImmediatePropagation();
    } else if (this.popup && this.popup.action !== 'ignore') {
      event.stopPropagation();
      this.popup.ref[this.popup.action]();
      if (isDropdown(this.popup.ref) && this.popup.ref.isOpened) {
        setTimeout(() => {
          this.popup?.ref.focus({ behavior: 'firstChild' });
        }, 50);
      }
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    } else {
      if (KBKey.isNavigation(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (KBKey.isEnterOrSpace(event.key)) {
        if (this.popup && this.popup.action !== 'ignore') {
          this.popup.ref[this.popup.action]();
          if (isDropdown(this.popup.ref) && this.popup.ref.isOpened) {
            setTimeout(() => {
              this.popup?.ref.focus({ behavior: 'firstChild' });
            }, 50);
          }
        } else {
          this.nativeElement.click();
        }
      }
      if (this.popup && isDropdown(this.popup.ref)) {
        if (KBKey.isArrowDown(event.key)) {
          if (!this.popup.ref.isOpened) {
            this.popup.ref.open();
          }
          setTimeout(() => {
            this.popup?.ref.focus({ behavior: 'firstChild' });
          }, 50);
        }
        if (KBKey.isArrowUp(event.key)) {
          if (this.popup.ref.isOpened) {
            this.popup.ref.close();
          } else {
            this.popup.ref.open();
            setTimeout(() => {
              this.popup?.ref.focus({ behavior: 'lastChild' });
            }, 50);
          }
        }
      } else if (!this.popup || (this.popup && !this.popup.ref.isOpened)) {
        if (KBKey.isArrowDownOrRight(event.key)) {
          if (!this.focus({ behavior: 'nextSibling' })) {
            this.focus({ behavior: 'firstChild', target: this.nativeElement.parentElement as HTMLElement });
          }
        }
        if (KBKey.isArrowUpOrLeft(event.key)) {
          if (!this.focus({ behavior: 'previousSibling' })) {
            this.focus({ behavior: 'lastChild', target: this.nativeElement.parentElement as HTMLElement });
          }
        }
      }
    }
  }

  protected get popupExpanded(): boolean {
    return this.popup?.ref.isOpened || false;
  }

  protected get ariaHasPopup(): string | boolean {
    if (!this.popup) return false;
    return this.popup?.ref.type === 'Dropdown' ? 'menu' :
      this.popup?.ref.type === 'Combobox' ? 'listbox' :
        this.popup?.ref.type === 'Dialog' ? 'dialog' : true;
  }
}
