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
  <tw-dropdown-item *ngFor="let item of items">
    <tw-button variant="secondary" className="rounded-none border-none justify-start">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  withIcon = `<tw-dropdown [open]="open()" (click)="toggle()">
  <tw-button variant="secondary" className="p-2">
    <svg *ngIf="!open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
    <svg *ngIf="open()" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" class="size-6">
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  </tw-button>
  <tw-dropdown-item *ngFor="let item of ['New project', 'New organisation', 'New team']">
    <tw-button variant="secondary" className="rounded-none border-none justify-start">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  withTextAndIcon = `<tw-group>
  <tw-button className="rounded-l-md">
    Save changes
  </tw-button>
  <tw-dropdown [open]="open()" (click)="toggle()">
    <tw-button className="rounded-r-md p-2 pr-3">
      <svg *ngIf="!open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
      <svg *ngIf="open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="m280-400 200-200 200 200H280Z" />
      </svg>
    </tw-button>
    <tw-dropdown-item *ngFor="let item of items">
      <tw-button variant="secondary" className="rounded-none border-none justify-start">{{ item }}</tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-group>`;

  roundedWithText = `<tw-dropdown [open]="open()" (click)="toggle()" className="rounded-3xl p-1.5">
  <tw-button className="rounded-full">Save changes</tw-button>
  <tw-dropdown-item *ngFor="let item of items">
    <tw-button variant="secondary" className="border-none justify-start rounded-full">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  roundedWithIcon = `<tw-dropdown [open]="open()" (click)="toggle()" className="rounded-3xl p-1.5">
  <tw-button variant="secondary" className="p-2 rounded-full">
    <svg *ngIf="!open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
    <svg *ngIf="open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  </tw-button>
  <tw-dropdown-item *ngFor="let item of ['New project', 'New organisation', 'New team']">
    <tw-button variant="secondary" className="rounded-full border-none justify-start">{{ item }}</tw-button>
  </tw-dropdown-item>
</tw-dropdown>`;

  roundedWithTextAndIcon = `<tw-group>
  <tw-button className="rounded-l-full">
    Save changes
  </tw-button>
  <tw-dropdown [open]="open()" (click)="toggle()" className="rounded-3xl p-1.5">
    <tw-button className="rounded-r-full p-2 pr-3">
      <svg *ngIf="!open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
      <svg *ngIf="open()" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="m280-400 200-200 200 200H280Z" />
      </svg>
    </tw-button>
    <tw-dropdown-item *ngFor="let item of items">
      <tw-button variant="secondary" className="border-none justify-start rounded-full">{{ item }}</tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-group>`;

}
