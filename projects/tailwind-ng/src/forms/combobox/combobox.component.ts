import { ChangeDetectionStrategy, Component, contentChild, inject, Input, output, ViewEncapsulation } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ClassList, Combobox, ComboboxBase, ComboboxItem, DropdownBase, InputTextBase, isArrowUp, isArrowUpOrDown, isEnterOrSpace, isEscape, TwIf } from '@tailwind-ng/core';

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
  <div class="relative" *twIf="isOpened()"><ng-content /></div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxBase, useExisting: ComboboxComponent }]
})
export class ComboboxComponent extends ComboboxBase implements Combobox {
  private selectionMap = new Map<string, ComboboxItem>();
  protected readonly dropdown = contentChild.required(DropdownBase);
  protected readonly input = contentChild.required(InputTextBase);
  @Input() override id = this.randomId('combobox');
  @Input() isMulti = false;
  @Input() control = inject(NonNullableFormBuilder).control('', Validators.minLength(3));
  valueChanged = output<string>();
  valueSelected = output<string[]>();

  get isValid() {
    const touchedOrDirty = this.control.touched || this.control.dirty;
    return this.control.valid && touchedOrDirty && this.control.value.trim().length >= 3;
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
    setTimeout(() => {
      if (!this.hasFocus) {
        this.close();
        this.input().removeVisualfocus();
      }
    }, 50);
  }

  private resetActiveElementIfAny() {
    if (this.activeElement) {
      this.removeVisualfocus(this.activeElement);
      this.activeElement = undefined;
    }
  }

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set("relative h-max");
    }
    this.control.valueChanges.subscribe(value => {
      if (!this.isOpened()) {
        this.open();
      }
      if (value.length === 0) {
        this.reset();
      }
      this.resetActiveElementIfAny();
      this.valueChanged.emit(value);
    });

    this.valueSelected.subscribe(() => {
      if (this.selectionMap.size === 0) {
        this.reset();
      }
    });
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.stopPropagation();
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
    return this.selectionMap.has(item.value);
  }

  async select(item: ComboboxItem): Promise<void> {
    if (this.isMulti) {
      if (this.has(item)) {
        this.selectionMap.delete(item.value);
      } else {
        this.selectionMap.set(item.value, item);
      }
    } else {
      if (!this.has(item)) {
        this.selectionMap.clear();
        this.selectionMap.set(item.value, item);
      }
      this.close();
    }
    this.updateControlValue();
    this.control.markAsDirty();
    this.control.markAsTouched();
    this.emitSelection();
  }

  reset(): void {
    if (this.selectionMap.size >= 1) {
      this.selectionMap.clear();
      this.updateControlValue();
      this.emitSelection();
      if (!this.isOpened()) {
        this.open();
      }
    }
  }

  private emitSelection() {
    if (this.selectionMap.size === 0) {
      this.valueSelected.emit([]);
    } else {
      const selection: string[] = [];
      this.selectionMap.forEach(item => selection.push(item.value));
      this.valueSelected.emit(selection);
    }
    if (!this.input().isFocused) {
      this.input().focus();
    }
  }

  private updateControlValue() {
    if (this.selectionMap.size === 0) {
      this.control.reset('', { emitEvent: false });
      return;
    };

    const values: string[] = [];
    this.selectionMap.forEach(item => values.push(item.value));

    if (this.isMulti) {
      this.control.setValue(values.join(', ') + ', ', { emitEvent: false });
    } else {
      this.control.setValue(values[0], { emitEvent: false });
    }
  }
}
