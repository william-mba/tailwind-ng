import { Component } from '@angular/core';
const bgColor = '#6366f1';
@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html'
})
export class LabComponent {
  private states: Map<number, boolean> = new Map()

  check(item: number): boolean {
    return this.states.get(item) || false;
  }

}
