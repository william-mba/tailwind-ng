import { ChangeDetectionStrategy, Component, contentChild, inject, OutputEmitterRef, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item/combobox-item.interface';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { PopupDirective } from '../../../core/directives/popup.directive';
import { BaseDirective } from '../../../core/directives/base.directive';
import { Combobox } from './combobox.interface';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  host: {
    role: 'combobox',
    '[attr.aria-controls]': 'popup().id',
    '[attr.aria-expanded]': 'popup().isOpened',
    '[attr.aria-activedescendant]': 'activeElement?.textContent.trim() || null',
  },
  template: `<ng-content select="label" />
  <div class="relative">
    <ng-content select="input[type=text], input[tw-input], input[twInput]" />
    <ng-content select="tw-icon, [tw-icon], [twIcon], tw-button, [tw-button], [twButton]" />
  </div>
  <div class="relative">
    <ng-content />
  </div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['isMultiselect', 'control'],
  outputs: ['valueChanged', 'valueSelected']
})
export class ComboboxComponent extends BaseDirective implements Combobox {
  private input = contentChild.required(InputComponent);
  private selectionMap = new Map<string, ComboboxItem>();
  readonly popup = contentChild.required<PopupDirective>(PopupDirective);
  control = inject(NonNullableFormBuilder).control('', Validators.minLength(3));
  activeElement?: HTMLElement;
  isMultiselect = false;
  valueChanged = new OutputEmitterRef<string>();
  valueSelected = new OutputEmitterRef<string[]>();

  get isValid() {
    const touchedOrDirty = this.control.touched || this.control.dirty;
    return this.control.valid && touchedOrDirty && this.control.value.trim().length >= 3;
  }

  protected override onInit(): void {
    this.classList.set("relative h-max");

    this.control.valueChanges.subscribe(value => {
      if (!this.popup().isOpened) {
        this.popup().open();
      }
      if (value.length === 0) {
        this.reset();
      }
      this.resetActiveElementIfAny();
      this.valueChanged.emit(value);

      requestAnimationFrame(() => {
        this.popup().updatePositionIfNeeded();
      });
    });

    this.valueSelected.subscribe(() => {
      if (this.selectionMap.size === 0) {
        this.reset();
      }
    });

    this.popup().opened.subscribe(() => {
      this.input().focus();
      this.input().setVisualfocus();
    });

    this.popup().closed.subscribe(() => {
      this.resetActiveElementIfAny();
    });

    this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), false);
  }

  protected onBlur(): void {
    requestAnimationFrame(() => {
      if (!this.hasFocus) {
        this.popup().close();
        this.resetActiveElementIfAny();
        this.input().removeVisualfocus();
      }
    });
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!this.popup().isOpened) {
      if (event.key !== 'Escape') {
        this.popup().open();
      } else if (event.key === 'Escape') {
        this.reset();
        if (this.popup().isOpened) {
          this.popup().close();
        }
      }
    } else {
      if (event.key === 'Escape') {
        this.popup().close();
      }
    }
    if (!this.activeElement) {
      switch (event.key) {
        case 'ArrowDown':
          this.activeElement = this.popup().setVisualfocus({ behavior: 'firstChild' });
          break;
        case 'ArrowUp':
          this.activeElement = this.popup().setVisualfocus({ behavior: 'lastChild' });
          break;
      }
    } else {
      switch (event.key) {
        case 'ArrowDown':
          this.activeElement = this.popup().setVisualfocus({ behavior: 'nextSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.popup().setVisualfocus({ behavior: 'firstChild' });
          }
          break;
        case 'ArrowUp':
          this.activeElement = this.popup().setVisualfocus({ behavior: 'previousSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.popup().setVisualfocus({ behavior: 'lastChild' });
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
      this.popup().close();
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
      if (!this.popup().isOpened) {
        this.popup().open();
      }
    }
  }

  private emitSelection() {
    if (this.selectionMap.size === 0) {
      this.valueSelected.emit([]);
    } else {
      let selection: string[] = [];
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

    let values: string[] = [];
    this.selectionMap.forEach(item => values.push(item.value));

    if (this.isMultiselect) {
      this.control.setValue(values.join(', ') + ', ', { emitEvent: false });
    } else {
      this.control.setValue(values[0], { emitEvent: false });
    }
  }
}
