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

  simpleButtonGroups = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-md">Option</tw-button>
  <tw-button variant="secondary" className="rounded-r-md">Option</tw-button>
</tw-button-group>
<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-md">Option</tw-button>
  <tw-button variant="secondary" className="rounded-none">Option</tw-button>
  <tw-button variant="secondary" className="rounded-r-md">Option</tw-button>
</tw-button-group>
<!-- ... -->`;

  withTwoButtons = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-md">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-md">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
</tw-button-group>`;

  withDropdown = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-md">
    Save changes
  </tw-button>
  <tw-dropdown [open]="open()" (click)="toggle()">
    <tw-button variant="secondary" className="rounded-r-md">
      <!-- svg -->
    </tw-button>
    <tw-dropdown-item *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
      <tw-button variant="secondary" className="rounded- ring- shadow- justify-start">{{ item }}</tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-button-group>`;

  withStats = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-md">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
    </svg>
    Bookmark
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-md">12k</tw-button>
</tw-button-group>`;

  withChecboxAndSelect = `<tw-button-group>
  <tw-button tw-icon variant="text" className="border border-neutral-300 dark:border-neutral-600 rounded-l-md">
    <input type="checkbox" class="hover:cursor-pointer rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" className="*:size-auto p-0">
    <label for="currency" class="sr-only">Currency</label>
    <select id="currency" name="currency" class="rounded-r-md border border-neutral-200 dark:border-neutral-700 bg-inherit dark:bg-neutral-800 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-button-group>`;

  simpleRoundedButtonGroups = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-full">Option</tw-button>
  <tw-button variant="secondary" className="rounded-r-full">Option</tw-button>
</tw-button-group>
<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-full">Option</tw-button>
  <tw-button variant="secondary" className="rounded-none">Option</tw-button>
  <tw-button variant="secondary" className="rounded-r-full">Option</tw-button>
</tw-button-group>
<!-- ... -->`;

  roundedWithTwoButtons = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
</tw-button-group>`;

  roundedWithDropdown = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-full">Save changes</tw-button>
  <tw-dropdown [open]="open()" (click)="toggle()" className="rounded-3xl p-1.5">
    <tw-button variant="secondary" className="rounded-r-full">
      <!-- ... -->
    </tw-button>
    <tw-dropdown-item *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
      <tw-button variant="secondary" className="shadow- ring- justify-start rounded-full">{{ item }}</tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-button-group>`;

  roundedWithStats = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
    </svg>
    Bookmark
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-full"> 12k </tw-button>
</tw-button-group>`;

  roundedWithChecboxAndSelect = `<tw-button-group>
  <tw-button tw-icon variant="text" className="border border-neutral-300 dark:border-neutral-600 rounded-l-full">
    <input type="checkbox" class="hover:cursor-pointer rounded-full border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" className="*:size-auto p-0">
    <label for="currency" class="sr-only">Currency</label>
    <select id="currency" name="currency" class="rounded-r-full border border-neutral-200 dark:border-neutral-700 bg-inherit dark:bg-neutral-800 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-button-group>`;

}
