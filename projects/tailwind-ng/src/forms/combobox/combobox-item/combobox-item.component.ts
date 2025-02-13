import { ChangeDetectionStrategy, Component, computed, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComboboxComponent } from '../combobox.component';
import { classlist, ComboboxItem, ComboboxItemBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    role: 'option',
    '[class]': 'classList.value()',
    '[tabindex]': 'isDisabled ? null : -1',
    '[attr.aria-selected]': 'isSelected',
    '[attr.data-selected]': 'isSelected || null'
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxItemBase, useExisting: ComboboxItemComponent }]
})
export class ComboboxItemComponent extends ComboboxItemBase implements ComboboxItem, OnInit {
  @Input({ required: true }) value!: string;
  private readonly combobox = inject(ComboboxComponent, { skipSelf: true });
  private readonly computedValue = computed(() => this.value.toLocaleLowerCase());

  private get isValueEqualsInputValue() {
    return this.computedValue() === this.combobox.control.value.toLocaleLowerCase();
  }

  get isSelected(): boolean {
    return this.combobox.has(this);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    // Select the item if it is the default value.
    if (this.isValueEqualsInputValue) {
      this.select();
    }

    // Select the item if the value changed matchs the item value.
    this.combobox.valueChanged.subscribe(value => {
      if (this.combobox.isMulti) {
        const some = value.split(',').some(x => this.computedValue() === x.trim().toLocaleLowerCase());
        if (!this.isSelected && some) {
          this.select();
        } else if (this.isSelected && !some) {
          this.select();
        }
      } else {
        if (!this.isSelected && this.isValueEqualsInputValue) {
          this.select();
        }
      }
    });

    this.combobox.opened.subscribe(() => {
      if (this.isSelected) this.scrollIntoView();
    });
  }

  select(): void {
    this.combobox.select(this);
  }

  protected override buildStyle(): void {
    this.classList = classlist(this.class).set(this.config);
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
