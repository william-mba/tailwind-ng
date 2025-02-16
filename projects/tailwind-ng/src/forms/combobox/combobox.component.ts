import { ChangeDetectionStrategy, Component, contentChild, input, OnInit, ViewEncapsulation } from '@angular/core';
import { classlist, Combobox, ComboboxBase, ComboboxItem, ComboboxMode, DropdownBase, InputTextBase, isArrowUp, isArrowUpOrDown, isEnterOrSpace, isEscape, TwIf } from '@tailwind-ng/core';

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
  <ng-container *twIf="opened()">
    <div class="relative"><ng-content /></div>
  </ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxBase, useExisting: ComboboxComponent }]
})
export class ComboboxComponent extends ComboboxBase implements Combobox, OnInit {
  private _selection = new WeakMap<ComboboxItem, ComboboxItem>();
  readonly dropdown = contentChild.required(DropdownBase);
  readonly input = contentChild.required(InputTextBase);
  readonly selectionMode = input<ComboboxMode>('single');

  override ngOnInit(): void {
    super.ngOnInit();
    this.input().changes.subscribe(() => {
      if (!this.opened()) {
        this.open();
      }
      if (this.input().isEmpty) {
        this.resetSelection();
      }
      this.resetActiveElementIfAny();
    });
  }

  override open(): void {
    super.open();
    this.input().focus();
    this.input().setVisualfocus();
    this.dropdown().open();
  }

  override close(): void {
    super.close();
    this.resetActiveElementIfAny();
    this.dropdown().close();
  }

  protected onBlur(): void {
    requestAnimationFrame(() => {
      if (!this.hasFocus) {
        this.close();
        this.input().removeVisualfocus();
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
    this.classList = classlist(this.class()).set("relative h-max");
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.stopPropagation();
    if (!isEscape(event.key) && !this.opened()) {
      this.open();
    } else if (isEscape(event.key)) {
      if (this.opened()) {
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
    } else if (isEnterOrSpace(event.key) && this.activeElement) {
      this.activeElement.click();
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true);
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }

  has(item: ComboboxItem): boolean {
    return this._selection.has(item);
  }

  select(item: ComboboxItem): void {
    if (this.selectionMode() === 'multiple') {
      if (this.has(item)) {
        this._selection.delete(item);
      } else {
        this._selection.set(item, item);
      }
    } else {
      if (!this.has(item)) {
        this.resetSelection();
        this._selection.set(item, item);
      }
      this.input().value = item.value();
      this.close();
    }
    this.input().focus();
    this.resetActiveElementIfAny();
  }

  reset(): void {
    this.resetSelection();
    this.input().clear();
  }

  private resetSelection() {
    this._selection = new WeakMap<ComboboxItem, ComboboxItem>();
  }
}
