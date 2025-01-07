import { afterNextRender, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonConfig, ButtonVariant } from './button.config';
import { BaseDirective } from '../../../core/directives/base.directive';
import { SizeOption } from '../../../core/types/size-options.type';
import { PopupDirective } from '../../../core/directives/popup.directive';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ComboboxComponent } from '../../forms/combobox/combobox.component';
import { DialogComponent } from '../../overlays/dialog/dialog.component';

/**
 * @ngxtw Button component
 */
@Component({
  selector: 'tw-button, [tw-button], [twButton]',
  exportAs: 'twButton',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.variant]': 'variant',
    '[tabindex]': 'isDisabled ? null : tabIndex',
  },
  inputs: ['tabIndex', 'size', 'variant', 'popup', 'isFab'],
})
export class ButtonComponent extends BaseDirective<HTMLButtonElement> {
  isFab = false;
  tabIndex = 0;
  size: SizeOption = 'md';
  variant: ButtonVariant = 'primary';
  popup?: PopupDirective;

  constructor() {
    super();
    afterNextRender({
      write: () => {
        if (this.popup) {
          this.nativeElement.ariaHasPopup =
            this.popup instanceof DropdownComponent ? 'menu' :
              this.popup instanceof ComboboxComponent ? 'listbox' :
                this.popup instanceof DialogComponent ? 'dialog' : 'true';
        }
      }
    })
  }

  protected override onInit(): void {
    this.config.get<ButtonConfig>('Button').subscribe((config) => {
      this.classList.setFrom({
        ...config.size[this.size],
        ...config.theme[this.variant],
        ...this.isFab ? config.theme.fab : {}
      });
    });

    if (this.popup) {
      this.nativeElement.addEventListener('click', () => this.popup?.toggle(), true);
    }
    this.nativeElement.addEventListener('keydown', this.onKeyDown.bind(this), true);
  }

  protected onKeyDown(event: KeyboardEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
    }
    if (this.popup && this.popup instanceof DropdownComponent) {
      switch (event.key) {
        case 'ArrowDown':
          if (!this.popup.isOpened) {
            this.popup.open();
          }
          const id = setTimeout(() => {
            this.popup?.focus({ behavior: 'firstChild' });
            clearTimeout(id);
          }, 100);
          break;
        case 'ArrowUp':
          if (this.popup.isOpened) {
            this.popup.close();
          } else {
            this.popup.open();
            const id = setTimeout(() => {
              this.popup?.focus({ behavior: 'lastChild' });
              clearTimeout(id);
            }, 100);
          }
          break;
      }
    } else if (!this.popup || (this.popup && !this.popup.isOpened)) {
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          if (!this.focus({ behavior: 'nextSibling' }) && this.nativeElement.parentElement) {
            this.focus({ behavior: 'firstChild', target: this.nativeElement.parentElement });
          }
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          if (!this.focus({ behavior: 'previousSibling' }) && this.nativeElement.parentElement) {
            this.focus({ behavior: 'lastChild', target: this.nativeElement.parentElement });
          }
          break;
      }
    }
  }
}
