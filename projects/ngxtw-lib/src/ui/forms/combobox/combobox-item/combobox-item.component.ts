import { ChangeDetectionStrategy, Component, Input, input, output, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item.interface';
import { Combobox } from '../combobox.interface';
import { BaseDirective } from '../../../../core/directives/element-base.directive';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    '(click)': 'select()',
    '[attr.aria-selected]': 'isSelected || null',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxItemComponent extends BaseDirective implements ComboboxItem {
  get isSelected(): boolean {
    return this.combobox().has(this);
  }
  @Input({ required: true }) value!: string;
  combobox = input.required<Combobox>();
  selected = output<ComboboxItem>();

  protected override onInit(): void {
    this._config.get('ComboboxItem').subscribe(config => {
      this.classList.setFrom(config);
    });

    // Select the item if it is the default value.
    if (this.combobox().control().value === this.value) this.select();

    // Select the item if the value changed matchs the item value.
    this.combobox().valueChanged.subscribe(value => {
      const values = value.split(this.combobox().valueSeparator()).map((x) => x.trim());
      if (!this.isSelected && values.some(x => this.value === x)) this.select();
    });

    // Select the item if the user presses Enter.
    this.combobox().keyPressed.subscribe(event => {
      if (event.key === 'Enter' && this.value.includes(this.combobox().control().value)) {
        if (!this.isSelected) this.select();
      }
    });

    this.combobox().opened.subscribe(() => {
      if (this.isSelected) this.scrollIntoView();
    });
  }

  select(): void {
    this.combobox().select(this);
  }

  scrollIntoView(): void {
    this.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
  }
}
