import { Component, ViewChild } from '@angular/core';
import { Combobox, IComboboxItem } from 'ngx-twcss';

@Component({
  selector: 'app-combobox-demo',
  templateUrl: './combobox-demo.component.html'
})
export class ComboboxDemoComponent {
  items: Partial<IComboboxItem>[] = [
    { value: 'Leslie Alexander' },
    { value: 'Michael Foster' },
    { value: 'Dries Vincent' },
    { value: 'Lindsay Walton' },
    { value: 'Courtney Henry' },
    { value: 'Tom Cook' },
    { value: 'Whitney Francis' },
    { value: 'Leonard Krasner' },
    { value: 'Floyd Miles' },
    { value: 'Emily Selman' },
    { value: 'Kristin Watson' },
    { value: 'Emma Dorsey' }
  ];
  simple = `<tw-combobox #cb1 label="Assigned to" (onChange)="filter($event)" (onReset)="reset()">
  @for (item of items; track item.id) {
    <tw-combobox-item [value]="item.value!" (onSelect)="cb1.select($event)" [selected]="cb1.inputValue.trim() === item.value" />
  }
</tw-combobox>`;
  withCheckOnLeft = `<tw-combobox #cb2 label="Assigned to" (onChange)="filter($event)" (onReset)="reset()">
  @for (item of items; track item.id) {
    <tw-combobox-item [value]="item.value!" (onSelect)="cb2.select($event)" [selected]="cb2.inputValue.trim() === item.value" iconPosition="left" />
  }
</tw-combobox>`;

  private _items = this.items;

  @ViewChild('combobox', { static: true }) combobox!: Combobox;

  select(item: IComboboxItem): void {
    this.combobox.select(item);
  }

  reset(): void {
    this.items = this._items;
  }

  filter(value: string): void {
    this.items = this._items.filter((item) => {
      return item.value?.includes(value) || item.value?.startsWith(value);
    });
  }
}
