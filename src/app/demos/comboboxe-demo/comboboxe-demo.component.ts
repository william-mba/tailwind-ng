import { Component } from '@angular/core';

@Component({
  selector: 'demo-comboboxe-demo',
  templateUrl: './comboboxe-demo.component.html',
  styles: ``
})
export class ComboboxeDemoComponent {
  items = ['Leslie Alexander', 'Michael Foster', 'Dries Vincent', 'Lindsay Walton', 'Courtney Henry', 'Tom Cook', 'Whitney Francis', 'Leonard Krasner', 'Floyd Miles', 'Emily Selman', 'Kristin Watson', 'Emma Dorsey']
  simple = `<tw-comboboxe [items]="items" (onSelect)="selectValue($event)" label="Assigned to" />`;
  withCheckOnLeft = `<tw-comboboxe ... iconPosition="left" />`;

  selectValue(value: string) {
    console.log('Selected value:', value);
  }
}
