import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { ComboboxItem, ComboboxItemState } from './combobox-item/combobox-item.interface';
import { Combobox } from './combobox.interface';
import { PopupBaseDirective } from '../../core/bases/popup-base.directive';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { DropdownActions } from '../../elements/dropdown/dropdown.interface';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { TwInput } from '../input/input.interface';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  standalone: true,
  host: {
    '(keypress)': 'onKeyPress($event)'
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent extends PopupBaseDirective implements Combobox, AfterContentInit {
  @ContentChild(DropdownComponent) private readonly dropdown!: DropdownActions;
  @ContentChild(InputComponent) private readonly input!: TwInput;
  @Output('valueChanges') onValueChanges: EventEmitter<string> = new EventEmitter();
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  @Input() control = this._formBuilder.control('', Validators.minLength(3));
  private selectedItem?: ComboboxItemState;

  ngAfterContentInit(): void {
    if (this.opened) {
      this.open();
    }
  }

  protected override buildStyle(): void {
    this.classList.merge(["relative", "h-max"]);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.control.valueChanges.subscribe(value => {
      this.handleChanges(value);
    });
  }


  protected handleChanges(value: string): void {
    // Handle the case where an item is selected by clicking on it.
    if (this.selectedItem && this.selectedItem.value === value) {
      this.control.reset(value, { emitEvent: false });
    } else {
      if (!this.opened) this.open();
      this.onValueChanges.emit(value);
    }
  }

  override toggle(): void {
    this.dropdown.toggle();
    super.toggle();
  }

  override open(): void {
    this.dropdown.open();
    super.open();
  }

  override close(): void {
    this.dropdown.close();
    super.close();
    // Handle the case where an item is selected by pressing Enter.
    if (this.selectedItem && this.control.valid) {
      this.control.setValue(this.selectedItem.value, { emitEvent: false });
    }
  }

  contains(value: string): boolean {
    return this.control.value === value;
  }

  has(item: ComboboxItem): boolean {
    // Select the item if it value includes the control's value and the combobox is valid.
    if (this.isValid && item.value.includes(this.control.value)) {
      this.selectedItem = item;
      return true;
    }
    return false;
  }

  get isValid() {
    const touchedOrDirty = this.control.touched || this.control.dirty;
    return this.control.valid && touchedOrDirty && this.control.value.trim().length >= 3;
  }

  protected onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.selectedItem) {
      this.close();
    }
  }

  select(item: ComboboxItem): void {
    this.selectedItem = item;
    this.control.setValue(item.value);
    this.input.nativeElement.focus();
    this.control.markAsDirty();
    this.control.markAsTouched();
    this.close();
  }

  reset(): void {
    this.control.reset();
    this.selectedItem = undefined;
    if (!this.opened) this.open();
    this.input.nativeElement.focus();
  }
}
