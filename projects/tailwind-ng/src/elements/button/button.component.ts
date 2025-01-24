import { afterNextRender, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonBase, ButtonVariant, ComboboxBase, DialogBase, DropdownBase, PopupDirective, SizeOption } from '@tailwind-ng/core';

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
  },
  providers: [{ provide: ButtonBase, useExisting: ButtonComponent }]
})
export class ButtonComponent extends ButtonBase {
  @Input() isFab = false;
  @Input() tabIndex = 0;
  @Input() size: SizeOption = 'md';
  @Input() variant: ButtonVariant = 'primary';
  @Input() popup?: PopupDirective;

  constructor() {
    super();
    afterNextRender({
      write: () => {
        if (this.popup) {
          this.nativeElement.ariaHasPopup =
            this.popup instanceof DropdownBase ? 'menu' :
              this.popup instanceof ComboboxBase ? 'listbox' :
                this.popup instanceof DialogBase ? 'dialog' : 'true';
        }
      }
    })
  }

  protected override onInit(): void {
    this.config$.subscribe((config) => {
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
      this.nativeElement.addEventListener('click', this.onClick.bind(this), true);
    }
    this.nativeElement.addEventListener('keydown', this.onKeyDown.bind(this), true);

    this.destroyRef.onDestroy(() => {
      if (this.popup) {
        this.nativeElement.removeEventListener('click', this.onClick.bind(this), true);
      }
      this.nativeElement.removeEventListener('keydown', this.onKeyDown.bind(this), true);
    });
  }

  protected onClick(event: MouseEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (this.popup) {
      this.popup.toggle();
    }
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
    if (this.popup && this.popup instanceof DropdownBase) {
      if (event.key === 'ArrowDown') {
        if (!this.popup.isOpened) {
          this.popup.open();
        }
        const id = setTimeout(() => {
          this.popup?.focus({ behavior: 'firstChild' });
          clearTimeout(id);
        }, 100);
      } else if (event.key === 'ArrowUp') {
        if (this.popup.isOpened) {
          this.popup.close();
        } else {
          this.popup.open();
          const id = setTimeout(() => {
            this.popup?.focus({ behavior: 'lastChild' });
            clearTimeout(id);
          }, 100);
        }
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
