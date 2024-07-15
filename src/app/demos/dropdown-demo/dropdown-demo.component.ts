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
    'Save and close'
  ];

  states: Record<number, boolean> = {};

  open(key: number) {
    return this.states[key];
  }

  toggle(key: number) {
    this.states[key] = !this.states[key];
  }

  withText = `<tw-dropdown [open]="open()" (click)="toggle()">
  <tw-button>Save changes</tw-button>
  <tw-dropdown-item *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
    <tw-button variant="secondary" className="rounded-none shadow- ring- justify-start">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  withIcon = `<tw-dropdown [open]="open()" (click)="toggle()">
  <tw-button tw-icon size="lg" variant="secondary">
    <!-- icon -->
  </tw-button>
  <tw-dropdown-item *ngFor="let item of ['New project', 'New organisation', 'New team']">
    <tw-button variant="secondary" className="rounded-none shadow- ring- justify-start">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  withTextAndIcon = `<tw-button-group>
  <tw-button className="rounded-l-md">Save changes</tw-button>
  <tw-dropdown [open]="open()" (click)="toggle()">
    <tw-button tw-icon className="rounded-r-md">
      <!-- icon -->
    </tw-button>
    <tw-dropdown-item *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
      <tw-button variant="secondary" className="rounded-none shadow- ring- justify-start">{{ item }}</tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-button-group>`;

  roundedWithText = `<tw-dropdown [open]="open()" (click)="toggle()" className="rounded-3xl p-1.5">
  <tw-button className="rounded-full">Save changes</tw-button>
  <tw-dropdown-item *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
    <tw-button variant="secondary" className="border-none justify-start rounded-full">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  roundedWithIcon = `<tw-dropdown [open]="open(5)" (click)="toggle(5)" className="rounded-3xl p-1.5">
  <tw-button tw-icon variant="secondary" className="rounded-full">
    <!-- icon -->
  </tw-button>
  <tw-dropdown-item *ngFor="let item of ['New project', 'New organisation', 'New team']">
    <tw-button variant="secondary" className="shadow- ring- justify-start rounded-full">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  roundedWithTextAndIcon = `<tw-button-group>
  <tw-button className="rounded-l-full">Save changes</tw-button>
  <tw-dropdown [open]="open(6)" (click)="toggle(6)" className="rounded-3xl p-1.5">
    <tw-button tw-icon className="rounded-r-full">
      <!-- icon -->
    </tw-button>
    <tw-dropdown-item *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
      <tw-button variant="secondary" className="shadow- ring- justify-start rounded-full">{{ item }}</tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-button-group>`;

}
