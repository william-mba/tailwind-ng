import { Component } from '@angular/core';
const bgColor = '#6366f1';
@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html'
})
export class LabComponent {
  states: Map<number, boolean> = new Map()

  toggle(item: number): void {
    this.states.set(item, !this.states.get(item));
    this.check(item);
  }

  logChanges(value: boolean): void {
    console.log('Checked: ', value);
  }

  check(item: number): boolean {
    return this.states.get(item) || false;
  }

  isCheck(value: boolean): boolean {
    return value
  }

}
