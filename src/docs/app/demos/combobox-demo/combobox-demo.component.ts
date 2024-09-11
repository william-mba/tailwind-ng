import { Component } from '@angular/core';
import { ComboboxItem } from 'ngxtw';

@Component({
  selector: 'app-combobox-demo',
  templateUrl: './combobox-demo.component.html'
})
export class ComboboxDemoComponent {
  items: Partial<ComboboxItem>[] = [
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
  simple = `<tw-combobox #combobox [value]="value" [opened]="true" (onChange)="filter($event)" (onReset)="reset()" (onToggle)="toggle($event)" label="Assigned to" width="w-72">
  @for (item of items; track item.id) {
    <tw-combobox-item [id]="item.id" [value]="item.value" [combobox]="combobox" />
  }
</tw-combobox>`;

  withCheckOnLeft = `<tw-combobox #combobox [value]="value" [opened]="true" (onChange)="filter($event)" (onReset)="reset()" (onToggle)="toggle($event)" label="Assigned to" width="w-72">
  @for (item of items; track item.id) {
    <tw-combobox-item [id]="item.id" [value]="item.value" [combobox]="combobox" iconSlot="left" />
  }
</tw-combobox>`;

  data: { [key: number]: { initial: Partial<ComboboxItem>[], current: Partial<ComboboxItem>[] } } = {
    1: { initial: this.items, current: this.items },
    2: { initial: this.items, current: this.items },
  };

  protected value1: string = this.data[1].initial[2].value!;
  protected value2: string = this.data[2].initial[2].value!;
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }
  reset(id: number): void {
    this.data[id].current = this.data[id].initial;
  }

  toggle(id: number, opened: boolean): void {
    if (!opened) {
      setTimeout(() => {
        this.reset(id);
      }, 100);
    }
  }

  filter(id: number, value: string): void {
    this.data[id].current = this.data[id].initial.filter((item) => {
      return item.value?.includes(value) || item.value?.startsWith(value);
    });
    if (this.data[id].current.length === 0) {
      this.reset(id);
    }
  }
}
