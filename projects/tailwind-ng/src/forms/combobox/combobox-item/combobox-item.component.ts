import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, output, ViewEncapsulation } from '@angular/core';
import { ComboboxComponent } from '../combobox.component';
import { classlist, ComboboxItem, ComboboxItemBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    role: 'option',
    '[class]': 'classList.value()',
    '[tabindex]': 'disabled ? null : -1',
    '[attr.aria-selected]': 'isSelected',
    '[attr.data-selected]': 'isSelected || null'
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxItemBase, useExisting: ComboboxItemComponent }]
})
export class ComboboxItemComponent extends ComboboxItemBase implements ComboboxItem, OnInit {
  value = input.required<string>();
  selected = output<ComboboxItem>();
  private readonly _combobox = inject(ComboboxComponent, { skipSelf: true, host: true });
  private readonly _value = computed(() => this.value().toLocaleLowerCase());

  get isSelected(): boolean {
    return this._combobox.has(this);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    // Select the item if it is the default value.
    if (this._value() === this._combobox.input().value.toLocaleLowerCase()) {
      this.select();
    }

    // Select the item if the value changed matchs the item value.
    this._combobox.input().changes.subscribe(value => {
      if (!this.isSelected && this._value() === value.toLocaleLowerCase()) {
        this.select();
      }
    });

    this._combobox.opened.subscribe((opened) => {
      if (opened && this.isSelected) this.scrollIntoView();
    });
  }

  select(): void {
    this._combobox.select(this);
    this.selected.emit(this);
  }

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set(this.config);
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('click', this.select.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('click', this.select.bind(this), false);
  }
}
