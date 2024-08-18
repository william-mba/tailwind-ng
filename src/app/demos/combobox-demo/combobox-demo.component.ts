import { Component } from '@angular/core';

@Component({
  selector: 'app-combobox-demo',
  templateUrl: './combobox-demo.component.html'
})
export class ComboboxDemoComponent {
  items = ['Leslie Alexander', 'Michael Foster', 'Dries Vincent', 'Lindsay Walton', 'Courtney Henry', 'Tom Cook', 'Whitney Francis', 'Leonard Krasner', 'Floyd Miles', 'Emily Selman', 'Kristin Watson', 'Emma Dorsey']
  simple = `<tw-combobox [items]="items" (itemSelected)="selectValue($event)" label="Assigned to" />`;
  withCheckOnLeft = `<tw-combobox ... iconPosition="left" />`;

  selectValue(value: string) {
    console.log('Selected item:', value);
  }
}
