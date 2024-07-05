import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group-demo',
  templateUrl: './button-group-demo.component.html',
})
export class ButtonGroupDemoComponent {
  items = [
    'Save as draft',
    'Save and publish',
    'Save and close'
  ];

  states: Record<number, boolean> = {
    1: false,
    2: false,
    3: false
  }

  open(key: number) {
    return this.states[key];
  }

  toggle(key: number) {
    this.states[key] = !this.states[key];
  }
}
