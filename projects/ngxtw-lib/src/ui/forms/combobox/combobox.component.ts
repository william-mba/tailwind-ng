import { ChangeDetectionStrategy, Component, contentChild, inject, OutputEmitterRef, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item/combobox-item.interface';
import { Combobox } from './combobox.interface';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { PopoverBaseDirective } from '../../../core/directives/popover-base.directive';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  host: {
    role: 'combobox',
    '(click)': 'onClick($event)',
    '(keypress)': 'onKeyPress($event)',
    '(mouseenter)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave($event)',
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
  inputs: ['isMultiselect', 'valueSeparator', 'control'],
  outputs: ['valueChanged', 'valueSelected', 'keyPressed']
})
export class ComboboxComponent extends PopoverBaseDirective implements Combobox {
  private input = contentChild.required(InputComponent);
  private selectionMap = new Map<string, ComboboxItem>();

  control = inject(NonNullableFormBuilder).control('', Validators.minLength(3));
  isMultiselect = false;
  valueSeparator = ',';
  valueChanged = new OutputEmitterRef<string>();
  valueSelected = new OutputEmitterRef<string[]>();
  keyPressed = new OutputEmitterRef<KeyboardEvent>();

  get isValid() {
    const touchedOrDirty = this.control.touched || this.control.dirty;
    return this.control.valid && touchedOrDirty && this.control.value.trim().length >= 3;
  }

  protected override onInit(): void {
    this.classList.set(["relative", "h-max"]);

    this.control.valueChanges.subscribe(value => {
      if (!this.isOpened) this.open();
      this.valueChanged.emit(value);
    });

    this.valueSelected.subscribe(() => {
      if (this.selectionMap.size === 0) this.reset();
    });

    this.opened.subscribe(() => {
      this.input().nativeElement.focus();
    });

    if (this.isOpened) this.open();

    this.input().nativeElement.onblur = (event: FocusEvent) => {
      if (!this.isHovered && event.AT_TARGET) {
        this.close();
      }
    };
  }

  protected onKeyPress(event: KeyboardEvent): void {
    this.keyPressed.emit(event)
  }

  protected onClick(event: Event): void {
    this.isHovered = true;
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
      if (this.has(item)) {
        this.selectionMap.delete(item.value);
      } else {
        this.selectionMap.clear();
        this.selectionMap.set(item.value, item);
        this.close();
      }
    }
    this.updateControlValue();
    this.input().nativeElement.focus();
    this.control.markAsDirty();
    this.control.markAsTouched();
    this.emitSelection();
  }

  reset(): void {
    if (this.selectionMap.size >= 1) {
      this.selectionMap.clear();
      this.emitSelection();
      this.updateControlValue();
      if (!this.isOpened) this.open();
      this.input().nativeElement.focus();
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
  }

  private updateControlValue() {
    if (this.selectionMap.size === 0) {
      this.control.reset('', { emitEvent: false });
      return;
    };

    let values: string[] = [];
    this.selectionMap.forEach(item => values.push(item.value));

    if (this.isMultiselect) {
      this.control.setValue(values.join(', '), { emitEvent: false });
    } else {
      this.control.setValue(values[0], { emitEvent: false });
    }
  }
}
