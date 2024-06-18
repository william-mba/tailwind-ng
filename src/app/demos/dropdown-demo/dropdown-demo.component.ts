import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styles: ``
})
export class DropdownDemoComponent {
  items = [
    'Save as draft',
    'Save and publish',
    'Remove everything'
  ];
}
