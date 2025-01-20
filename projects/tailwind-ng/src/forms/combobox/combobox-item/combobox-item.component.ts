import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, Input, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item.interface';
import { ComboboxComponent } from '../combobox.component';
import { ComboboxItemBase } from '@tailwind-ng/core';

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
  providers: [{ provide: ComboboxItemBase, useExisting: ComboboxItemComponent }]
})
export class ComboboxItemComponent extends ComboboxItemBase implements ComboboxItem {
  @Input({ required: true }) value!: string;
  private readonly combobox = inject(ComboboxComponent, { skipSelf: true });
  private readonly computedValue = computed(() => this.value.toLocaleLowerCase());
  private readonly destroyRef = inject(DestroyRef);

  private get isValueEqualsInputValue() {
    return this.computedValue() === this.combobox.control.value.toLocaleLowerCase();
  }
  get isSelected(): boolean {
    return this.combobox.has(this);
  }

  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.set(config);
    });

    // Select the item if it is the default value.
    if (this.isValueEqualsInputValue) {
      this.select();
    }

    // Select the item if the value changed matchs the item value.
    const valueChanged = this.combobox.valueChanged.subscribe(value => {
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

    this.nativeElement.addEventListener('click', this.select.bind(this), { passive: true, capture: true });

    this.destroyRef.onDestroy(() => {
      valueChanged.unsubscribe();
      this.nativeElement.removeEventListener('click', this.select.bind(this), true);
    });
  }

  private select(): void {
    this.combobox.select(this);
  }

  scrollIntoView(): void {
    this.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
  }
}
