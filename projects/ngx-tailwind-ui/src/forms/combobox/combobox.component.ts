import { ChangeDetectionStrategy, Component, contentChild, DestroyRef, inject, Input, Output, OutputEmitterRef, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item/combobox-item.interface';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ComboboxToken, DropdownToken, InputToken } from '@ngx-tailwind/core';
import { Combobox } from './combobox.interface';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  host: {
    role: 'combobox',
    '[attr.aria-expanded]': 'isOpened',
    '[attr.aria-controls]': 'dropdown().id',
    '[attr.aria-activedescendant]': 'activeElement?.textContent.trim() || null',
  },
  template: `<ng-content select="label" />
  <div class="relative">
    <ng-content select="input[type=text], input[tw-input], input[twInput]" />
    <ng-content select="tw-icon, [tw-icon], [twIcon], tw-button, [tw-button], [twButton]" />
  </div>
  <div class="relative"><ng-content /></div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxToken, useExisting: ComboboxComponent }]
})
export class ComboboxComponent extends ComboboxToken implements Combobox {
  private readonly destroyRef = inject(DestroyRef);
  private input = contentChild.required(InputToken);
  private selectionMap = new Map<string, ComboboxItem>();
  protected activeElement?: HTMLElement;
  protected dropdown = contentChild.required<DropdownToken>(DropdownToken);
  @Input() isMultiselect = false;
  @Input() control = inject(NonNullableFormBuilder).control('', Validators.minLength(3));
  @Output() valueChanged = new OutputEmitterRef<string>();
  @Output() valueSelected = new OutputEmitterRef<string[]>();

  get isValid() {
    const touchedOrDirty = this.control.touched || this.control.dirty;
    return this.control.valid && touchedOrDirty && this.control.value.trim().length >= 3;
  }

  protected override onInit(): void {
    this.classList.set("relative h-max");

    const valueChanges = this.control.valueChanges.subscribe(value => {
      if (!this.isOpened) {
        this.open();
      }
      if (value.length === 0) {
        this.reset();
      }
      this.resetActiveElementIfAny();
      this.valueChanged.emit(value);

      setTimeout(() => {
        this.dropdown().updatePositionIfNeeded();
      }, 100);
    });

    const valueSelected = this.valueSelected.subscribe(() => {
      if (this.selectionMap.size === 0) {
        this.reset();
      }
    });

    this.opened.subscribe(() => {
      this.input().focus();
      this.input().setVisualfocus();
      this.dropdown().open();
    });

    this.closed.subscribe(() => {
      this.resetActiveElementIfAny();
      this.dropdown().close();
    });

    this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), false);

    this.destroyRef.onDestroy(() => {
      valueChanges.unsubscribe();
      valueSelected.unsubscribe();
      this.opened.unsubscribe();
      this.closed.unsubscribe();
      this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true);
      this.nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), false);
    });
  }

  protected onBlur(): void {
    setTimeout(() => {
      if (!this.hasFocus) {
        this.close();
        this.resetActiveElementIfAny();
        this.input().removeVisualfocus();
      }
    }, 0);
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!this.isOpened) {
      if (event.key !== 'Escape') {
        this.open();
      } else if (event.key === 'Escape') {
        this.reset();
        if (this.isOpened) {
          this.close();
        }
      }
    } else {
      if (event.key === 'Escape') {
        this.close();
      }
    }
    if (!this.activeElement) {
      switch (event.key) {
        case 'ArrowDown':
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
          break;
        case 'ArrowUp':
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'lastChild' });
          break;
      }
    } else {
      switch (event.key) {
        case 'ArrowDown':
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'nextSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
          }
          break;
        case 'ArrowUp':
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'previousSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.dropdown().setVisualfocus({ behavior: 'lastChild' });
          }
          break;
        case 'Enter':
          this.activeElement?.click();
          break;
      }
    }
  }

  has(item: ComboboxItem): boolean {
    return this.selectionMap.has(item.value);
  }

  select(item: ComboboxItem): void {
    if (this.isMultiselect) {
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

  private resetActiveElementIfAny() {
    if (this.activeElement) {
      this.removeVisualfocus(this.activeElement);
      this.activeElement = undefined;
    }
  }

  reset(): void {
    if (this.selectionMap.size >= 1) {
      this.selectionMap.clear();
      this.updateControlValue();
      this.emitSelection();
      if (!this.isOpened) {
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

    if (this.isMultiselect) {
      this.control.setValue(values.join(', ') + ', ', { emitEvent: false });
    } else {
      this.control.setValue(values[0], { emitEvent: false });
    }
  }
}
