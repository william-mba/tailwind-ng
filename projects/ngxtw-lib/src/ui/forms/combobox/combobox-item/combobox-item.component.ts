import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item.interface';
import { ElementBaseDirective } from '../../../../core/directives/element-base.directive';
import { ComboboxComponent } from '../combobox.component';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    '(click)': 'combobox.select(this)',
    '[attr.aria-selected]': 'isSelected || null',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [{ name: 'value', required: true }, 'combobox'],
})
export class ComboboxItemComponent extends ElementBaseDirective implements ComboboxItem {
  value!: string;
  combobox = inject(ComboboxComponent, { skipSelf: true });
  private normalizedValue = computed(() => this.value.toLocaleLowerCase());
  private valueEqualsInputValue = () => this.normalizedValue() === this.combobox.control.value.toLocaleLowerCase();
  private valueIncludesInputValue = () => this.normalizedValue().includes(this.combobox.control.value.toLocaleLowerCase());

  get isSelected(): boolean {
    return this.combobox.has(this);
  }

  protected override onInit(): void {
    this.config.get('ComboboxItem').subscribe(config => {
      this.classList.setFrom(config);
    });

    // Select the item if it is the default value.
    if (this.valueEqualsInputValue()) this.combobox.select(this);

    // Select the item if the value changed matchs the item value.
    this.combobox.valueChanged.subscribe(value => {
      if (this.combobox.isMultiselect) {
        const some = value.split(this.combobox.valueSeparator).
          some(x => this.normalizedValue() === x.trim().toLocaleLowerCase());
        if (!this.isSelected && some) this.combobox.select(this);
      } else {
        if (!this.isSelected && this.valueEqualsInputValue()) this.combobox.select(this);
      }
    });

    // Select the item if the user presses Enter.
    this.combobox.keyPressed.subscribe(event => {
      if (event.key === 'Enter' && !this.isSelected) {
        if (this.combobox.isMultiselect) {
          const some = this.combobox.control.value.toLocaleLowerCase().split(this.combobox.valueSeparator).
            some(x => this.normalizedValue().includes(x.trim()));
          if (some) this.combobox.select(this);
        } else {
          if (this.valueIncludesInputValue()) {
            this.combobox.select(this);
          }
        }
      }
    });

    if (this.isSelected) this.scrollIntoView();

    this.combobox.opened.subscribe(() => {
      if (this.isSelected) this.scrollIntoView();
    });
  }

  scrollIntoView(): void {
    this.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
  }
}
