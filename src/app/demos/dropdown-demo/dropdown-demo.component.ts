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
  simple = `<tw-dropdown [open]="open()" (click)="toggle()" className="min-w-52 shadow-lg">
  <tw-button variant="secondary">
    Options
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
    </svg>
  </tw-button>
  <tw-dropdown-content className="*:*:justify-start *:*:rounded-none *:*:shadow-none">
    <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5" *ngFor="let item of ['Account settings', 'Support', 'License', 'Sign out']">
      {{ item }}
    </tw-button>
  </tw-dropdown-content>
</tw-dropdown>`;

  withText = `<tw-dropdown [open]="open()" (click)="toggle()">
  <tw-button>Save changes</tw-button>
  <tw-dropdown-content *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
    <tw-button variant="secondary" className="rounded-none shadow- ring- justify-start">{{ item }}</tw-button>
  </tw-dropdown-content>
</tw-dropdown>`;

  withIcon = `<tw-dropdown [open]="open()" (click)="toggle()">
  <tw-button tw-icon size="lg" variant="secondary">
    <!-- icon -->
  </tw-button>
  <tw-dropdown-content *ngFor="let item of ['New project', 'New organisation', 'New team']">
    <tw-button variant="secondary" className="rounded-none shadow- ring- justify-start">{{ item }}</tw-button>
  </tw-dropdown-content>
</tw-dropdown>`;

  withTextAndIcon = `<tw-button-group>
  <tw-button className="rounded-l-md">Save changes</tw-button>
  <tw-dropdown [open]="open()" (click)="toggle()">
    <tw-button tw-icon className="rounded-r-md">
      <!-- icon -->
    </tw-button>
    <tw-dropdown-content *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
      <tw-button variant="secondary" className="rounded-none shadow- ring- justify-start">{{ item }}</tw-button>
    </tw-dropdown-content>
  </tw-dropdown>
</tw-button-group>`;

  roundedWithText = `<tw-dropdown [open]="open()" (click)="toggle()" className="rounded-3xl p-1.5">
  <tw-button className="rounded-full">Save changes</tw-button>
  <tw-dropdown-content *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
    <tw-button variant="secondary" className="border-none justify-start rounded-full">{{ item }}</tw-button>
  </tw-dropdown-content>
</tw-dropdown>`;

  roundedWithIcon = `<tw-dropdown [open]="open(5)" (click)="toggle(5)" className="rounded-3xl p-1.5">
  <tw-button tw-icon variant="secondary" className="rounded-full">
    <!-- icon -->
  </tw-button>
  <tw-dropdown-content *ngFor="let item of ['New project', 'New organisation', 'New team']">
    <tw-button variant="secondary" className="shadow- ring- justify-start rounded-full">{{ item }}</tw-button>
  </tw-dropdown-content>
</tw-dropdown>`;

  roundedWithTextAndIcon = `<tw-button-group>
  <tw-button className="rounded-l-full">Save changes</tw-button>
  <tw-dropdown [open]="open(6)" (click)="toggle(6)" className="rounded-3xl p-1.5">
    <tw-button tw-icon className="rounded-r-full">
      <!-- icon -->
    </tw-button>
    <tw-dropdown-content *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
      <tw-button variant="secondary" className="shadow- ring- justify-start rounded-full">{{ item }}</tw-button>
    </tw-dropdown-content>
  </tw-dropdown>
</tw-button-group>`;

}
