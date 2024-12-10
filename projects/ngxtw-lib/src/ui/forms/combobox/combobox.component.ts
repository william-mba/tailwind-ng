import { ChangeDetectionStrategy, Component, contentChild, inject, input, output, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item/combobox-item.interface';
import { Combobox } from './combobox.interface';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { PopupBaseDirective } from '../../../core/directives/popup-base.directive';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  host: {
    '(keypress)': 'onKeyPress($event)',
  },
  template: `<ng-content select="label" />
  <div class="relative">
    <ng-content select="input[type=text], input[tw-input], input[twInput]" />
    <ng-content select="tw-icon, [tw-icon], [twIcon], tw-button, [tw-button], [twButton]" />
  </div>
  <div class="relative">
    <ng-content select="tw-dropdown, [tw-dropdown], [twDropdown]" />
  </div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComboboxComponent extends PopupBaseDirective implements Combobox {
  private dropdown = contentChild.required(DropdownComponent);
  private input = contentChild.required(InputComponent);
  private selectionMap = new Map<string, ComboboxItem>();
  control = input<FormControl<string>>(inject(NonNullableFormBuilder).control('', Validators.minLength(3)));
  valueChanged = output<string>();
  valueSelected = output<any>();
  keyPressed = output<KeyboardEvent>();
  isMultiselect = input<boolean>(false);
  valueSeparator = input<string>(',');

  protected override onInit(): void {
    this.classList.set(["relative", "h-max"]);

    if (this.isOpened()) this.open();

    this.control().valueChanges.subscribe(value => {
      if (!this.isOpened()) this.open();
      this.valueChanged.emit(value);
    });

    this.valueSelected.subscribe(() => {
      if (this.selectionMap.size === 0) this.reset();
    });
  }

  override toggle(): void {
    this.dropdown().toggle();
    super.toggle();
  }

  override open(): void {
    this.dropdown().open();
    super.open();
  }

  override close(): void {
    this.dropdown().close();
    super.close();
  }

  private updateControlValue() {
    if (this.selectionMap.size === 0) return;

    let values: string[] = [];
    this.selectionMap.forEach(item => values.push(item.value()));

    if (this.isMultiselect()) {
      this.control().setValue(values.join(', '), { emitEvent: false });
    } else {
      this.control().setValue(values[0], { emitEvent: false });
    }
  }

  protected onKeyPress(event: KeyboardEvent): void {
    this.keyPressed.emit(event)
  }

  has(item: ComboboxItem): boolean {
    return this.selectionMap.has(item.value());
  }

  get isValid() {
    const touchedOrDirty = this.control().touched || this.control().dirty;
    return this.control().valid && touchedOrDirty && this.control().value.trim().length >= 3;
  }

  select(item: ComboboxItem): void {
    if (this.isMultiselect()) {
      if (this.has(item)) {
        this.selectionMap.delete(item.value());
      } else {
        this.selectionMap.set(item.value(), item);
      }
    } else {
      this.selectionMap.clear();
      this.selectionMap.set(item.value(), item);
      this.close();
    }
    this.updateControlValue();
    this.input().nativeElement.focus();
    this.control().markAsDirty();
    this.control().markAsTouched();
    this.emitSelection();
  }

  private emitSelection() {
    if (this.isMultiselect()) {
      let values: string[] = [];
      this.selectionMap.forEach(item => values.push(item.value()));
      this.valueSelected.emit(values);
    } else {
      this.valueSelected.emit(this.control().value);
    }
  }


  reset(): void {
    this.control().reset();
    this.selectionMap.clear();
    if (!this.isOpened()) this.open();
    this.input().nativeElement.focus();
  }
}
