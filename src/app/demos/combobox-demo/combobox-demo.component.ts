import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Combobox, IComboboxItem } from 'ngx-twcss';

@Component({
  selector: 'app-combobox-demo',
  templateUrl: './combobox-demo.component.html'
})
export class ComboboxDemoComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Input value:', this.inputValue);

  }
  items: Partial<IComboboxItem>[] = [
    { id: '1', value: 'Leslie Alexander' },
    { id: '2', value: 'Michael Foster' },
    { id: '3', value: 'Dries Vincent' },
    { id: '4', value: 'Lindsay Walton' },
    { id: '5', value: 'Courtney Henry' },
    { id: '6', value: 'Tom Cook' },
    { id: '7', value: 'Whitney Francis' },
    { id: '8', value: 'Leonard Krasner' },
    { id: '9', value: 'Floyd Miles' },
    { id: '10', value: 'Emily Selman' },
    { id: '11', value: 'Kristin Watson' },
    { id: '12', value: 'Emma Dorsey' }
  ];
  simple = `<tw-combobox #cb1 label="Assigned to" (onChange)="filter($event)" (onReset)="reset()" (onToggle)="toggle($event)" width="w-72">
  @for (item of items; track item.id) {
    <tw-combobox-item [id]="item.id" [value]="item.value" (onSelect)="cb1.select($event)" [selected]="cb1.checkSelection(item.value)" />
  }
</tw-combobox>`;
  withCheckOnLeft = `<tw-combobox #cb2 label="Assigned to" (onChange)="filter($event)" (onReset)="reset()" (onToggle)="toggle($event)" width="w-72">
  @for (item of items; track item.id) {
    <tw-combobox-item [value]="item.value" (onSelect)="cb2.select($event)" [selected]="cb2.checkSelection(item.value)" iconSlot="left" />
  }
</tw-combobox>`;

  private _items = this.items;
  protected inputValue: string = '';
  @ViewChild('combobox', { static: true }) combobox!: Combobox;

  select(item: IComboboxItem): void {
    this.combobox.select(item);
  }

  reset(): void {
    this.items = this._items;
  }

  toggle(opened: boolean): void {
    if (opened) {
      this.reset();
    }
  }

  filter(value: string): void {
    this.items = this._items.filter((item) => {
      return item.value?.includes(value) || item.value?.startsWith(value);
    });
    if (this.items.length === 0) {
      this.items = this._items;
    }
  }
}
