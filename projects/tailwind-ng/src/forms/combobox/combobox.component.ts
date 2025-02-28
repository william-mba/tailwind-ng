import { ChangeDetectionStrategy, Component, contentChild, Input, model, OnInit, output, ViewEncapsulation } from '@angular/core';
import { Combobox, ComboboxBase, ComboboxItem, DropdownBase, InputTextBase, isEnter, isEscape, ComboboxSelectionMode, TwIf, isArrowUpOrDown, isArrowUp } from '@tailwind-ng/core';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  host: {
    '[class]': 'classList.value()',
    '[attr.aria-controls]': 'dropdown().id',
  },
  imports: [TwIf],
  template: `<ng-content select="label" />
  <div class="relative">
    <ng-content select="input[type=text], input[tw-input], input[twInput]" />
    <ng-content select="tw-icon, [tw-icon], [twIcon], tw-button, [tw-button], [twButton]" />
  </div>
  <ng-container *twIf="isOpened()">
    <div class="relative"><ng-content /></div>
  </ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxBase, useExisting: ComboboxComponent }]
})
export class ComboboxComponent extends ComboboxBase implements Combobox, OnInit {
  readonly dropdown = contentChild.required(DropdownBase);
  readonly input = contentChild.required(InputTextBase);
  readonly resetted = output<void>();
  @Input() selectionMode: ComboboxSelectionMode = 'single';
  readonly selectedValues = model(new Set<string>());

  override ngOnInit(): void {
    super.ngOnInit();
    this.input().changes.subscribe(() => {
      if (!this.isOpened()) {
        this.open();
      }
    });
  }

  override open(): void {
    super.open();
    this.dropdown().open();
    this.input().focus();
    this.input().setVisualfocus();

    requestAnimationFrame(() => {
      this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
    })
  }

  override close(): void {
    super.close();
    this.dropdown().close();
    this.resetActiveElementIfAny();
    // if the selection mode is single and there is only one selected value,
    // we set the input value to it
    if (this.selectionMode === 'single' && this.selectedValues().size > 0) {
      this.input().value = [...this.selectedValues().values()][0];
    }
    if (this.hasFocus) {
      this.input().focus();
    }
  }

  protected onBlur(): void {
    requestAnimationFrame(() => {
      if (!this.hasFocus) {
        this.input().removeVisualfocus();
        if (this.isOpened()) this.close();
      }
    });
  }

  private resetActiveElementIfAny() {
    if (this.activeElement) {
      this.removeVisualfocus(this.activeElement);
      this.activeElement = undefined;
    }
  }

  protected override buildStyle(): void {
    this.classList.set("relative h-max");
  }

  // we use keydown as it allows users to navigate up and down continuously
  protected override onKeydown(event: KeyboardEvent): void {
    super.onKeydown(event);
    if (!isEscape(event.key) && !this.isOpened()) {
      this.open();
    } else if (isEscape(event.key)) {
      if (this.isOpened()) {
        this.close();
      } else {
        this.reset();
      }
    } else if (isArrowUpOrDown(event.key)) {
      if (isArrowUp(event.key)) {
        if (!this.activeElement) {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'lastChild' });
        } else {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'previousSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.dropdown().setVisualfocus({ behavior: 'lastChild' });
          }
        }
      } else {
        if (!this.activeElement) {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
        } else {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'nextSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
          }
        }
      }
      const activeContent = this.activeElement?.textContent?.trim();
      if (activeContent && activeContent.length > 0) {
        this.input().value = activeContent;
      }
    } // we use enter and not space as space should move the cursor in the input field
    else if (isEnter(event.key) && this.activeElement) {
      this.activeElement.click();
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true);
  }

  setActiveItem(item: ComboboxItem): void {
    this.activeElement = item.nativeElement;
  }

  reset(): void {
    this.input().clear();
    this.input().focus();
    this.resetActiveElementIfAny();
    this.selectedValues().clear();
    this.resetted.emit();
  }
}
