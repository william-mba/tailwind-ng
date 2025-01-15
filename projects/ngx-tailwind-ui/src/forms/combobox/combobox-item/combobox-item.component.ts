import { ChangeDetectionStrategy, Component, computed, inject, Input, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item.interface';
import { ComboboxComponent } from '../combobox.component';
import { ComboboxItemToken } from '@ngx-tailwind/core';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    role: 'option',
    '[tabindex]': 'isDisabled ? null : -1',
    '[attr.aria-selected]': 'isSelected || null'
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxItemToken, useExisting: ComboboxItemComponent }]
})
export class ComboboxItemComponent extends ComboboxItemToken implements ComboboxItem {
  @Input({ required: true }) value!: string;
  private combobox = inject(ComboboxComponent, { skipSelf: true });
  private computedValue = computed(() => this.value.toLocaleLowerCase());

  private get isValueEqualsInputValue() {
    return this.computedValue() === this.combobox.control.value.toLocaleLowerCase();
  }
  get isSelected(): boolean {
    return this.combobox.has(this);
  }

  protected override onInit(): void {
    this.config.get('ComboboxItem').subscribe(config => {
      this.classList.setFrom(config);
    });

    // Select the item if it is the default value.
    if (this.isValueEqualsInputValue) {
      this.combobox.select(this);
    }

    // Select the item if the value changed matchs the item value.
    this.combobox.valueChanged.subscribe(value => {
      if (this.combobox.isMultiselect) {
        const some = value.split(',').some(x => this.computedValue() === x.trim().toLocaleLowerCase());
        if (!this.isSelected && some) {
          this.combobox.select(this);
        } else if (this.isSelected && !some) {
          this.combobox.select(this);
        }
      } else {
        if (!this.isSelected && this.isValueEqualsInputValue) {
          this.combobox.select(this);
        }
      }
    });

    this.combobox.opened.subscribe(() => {
      if (this.isSelected) this.scrollIntoView();
    });

    this.nativeElement.addEventListener('click', () => {
      this.combobox.select(this);
    }, { passive: true, capture: true });
  }

  scrollIntoView(): void {
    this.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
  }
}