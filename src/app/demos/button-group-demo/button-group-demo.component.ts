import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group-demo',
  templateUrl: './button-group-demo.component.html',
})
export class ButtonGroupDemoComponent {
  dropdownItems = [
    'Save as draft',
    'Save and publish',
    'Remove everything'
  ];
}
