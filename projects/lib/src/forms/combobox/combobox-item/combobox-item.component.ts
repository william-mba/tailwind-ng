import { AfterContentInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item.interface';
import { ElementBaseDirective } from '../../../core/bases/element-base.directive';
import { Combobox } from '../combobox.interface';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  standalone: true,
  host: {
    '(click)': 'select()',
    '[attr.aria-selected]': 'selected || null',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxItemComponent extends ElementBaseDirective<HTMLElement> implements ComboboxItem, AfterContentInit {
  get selected(): boolean {
    return this.combobox.has(this);
  }
  @Input({ required: true }) value!: string;
  @Input({ required: true }) combobox!: Combobox;
  @Output('select') onSelect: EventEmitter<ComboboxItem> = new EventEmitter();

  protected override buildStyle(): void {
    this._configManager.get('ComboboxItem')
      .subscribe(config => {
        this.classList.setFrom(config);
      });
  }

  select(): void {
    this.combobox.select(this);
    this.onSelect.emit(this);
  }

  ngAfterContentInit(): void {
    if (this.selected) {
      this.scrollIntoView();
    }
  }

  scrollIntoView(): void {
    // Run after the next tick to ensure the item is rendered in the DOM.
    setTimeout(() => {
      this.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
    });
  }
}
