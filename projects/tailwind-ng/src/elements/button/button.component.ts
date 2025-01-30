import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Button, ButtonBase, ButtonVariant, KBKey, PopupWidget, SizeOption } from '@tailwind-ng/core';

/**
 * @TailwindNG Button component
 */
@Component({
  selector: 'tw-button, button[tw-button], button[twButton]',
  exportAs: 'twButton',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
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
  @Input() popup?: PopupWidget;
  @Input() size: SizeOption = 'md';
  @Input() variant: ButtonVariant = 'primary';

  protected override onInit(): void {
    this.config.subscribe((config) => {
      this.classList.set({
        // The order of destructuring is important here.
        // Because we want next object properties value to
        // override the value of identical properties from objects destructured before.
        /* Example:

        Given the following size config
        xs: {
          gap: 'gap-2',
          paddingX: 'px-2',
          fontSize: 'text-xs',
        },

        And the following variant config
        primary: {
          bgColor: 'bg-blue-500',
          gap: 'gap-3'
        },

        Case 1: If we destructure the size config first then the variant config,
        { ...sizeConfig, ...variantConfig } will result in the following object
        {
          gap: 'gap-3',
          paddingX: 'px-2',
          fontSize: 'text-xs',
          bgColor: 'bg-blue-500'
        }

        Case 2: If we destructure the variant config first then the size config,
        { ...variantConfig, ...sizeConfig } will result in the following object
        {
          gap: 'gap-2',
          paddingX: 'px-2',
          fontSize: 'text-xs',
          bgColor: 'bg-blue-500'
        }
        Based on this behavior, we structure precedence as follow: size < variant < fab
        The < means override.
         */
        ...config[this.size],
        ...config[this.variant],
        ...this.isFab ? config.fab : {}
      });
    });

    if (this.popup) {
      this.nativeElement.addEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);

    this.destroyRef.onDestroy(() => {
      if (this.popup) {
        this.nativeElement.removeEventListener('pointerup', this.onPointerUp.bind(this), false);
      }
      this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
    });
  }

  protected onPointerUp(event: Event): void {
    if (this.isDisabled) {
      event.stopImmediatePropagation();
    } else if (this.popup && this.popup.action !== 'ignore') {
      event.stopPropagation();
      this.popup.ref[this.popup.action]();
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
        }
      }
      if (this.popup && this.popup.ref.type === 'Dropdown') {
        if (KBKey.isArrowDown(event.key)) {
          if (!this.popup.ref.isOpened) {
            this.popup.ref.open();
          }
          const id = setTimeout(() => {
            this.popup?.ref.focus({ behavior: 'firstChild' });
            clearTimeout(id);
          }, 50);
        }
        if (KBKey.isArrowUp(event.key)) {
          if (this.popup.ref.isOpened) {
            this.popup.ref.close();
          } else {
            this.popup.ref.open();
            const id = setTimeout(() => {
              this.popup?.ref.focus({ behavior: 'lastChild' });
              clearTimeout(id);
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
