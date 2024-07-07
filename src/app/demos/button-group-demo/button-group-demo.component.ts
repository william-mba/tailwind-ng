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

  withThreeButtons = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-md"> Years </tw-button>
  <tw-button variant="secondary" className="rounded-none"> Months </tw-button>
  <tw-button variant="secondary" className="rounded-r-md"> Days </tw-button>
</tw-group>`;

  withTwoButtons = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-md">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-md">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
</tw-group>`;

  withDropdown = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-md">
    Save changes
  </tw-button>
  <tw-dropdown [open]="open(4)" (click)="toggle(4)">
    <tw-button variant="secondary" className="rounded-r-md p-2 pr-3">
      <svg *ngIf="!open(4)" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
      <svg *ngIf="open(4)" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" class="size-6">
        <path d="m280-400 200-200 200 200H280Z" />
      </svg>
    </tw-button>
    <tw-dropdown-item *ngFor="let item of items">
      <tw-button variant="secondary" className="w-[11.5rem] rounded-none border-none justify-start"> {{ item }} </tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-group>`;

  withStats = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-md">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="#777" viewBox="0 -960 960 960">
      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
    </svg>
    Bookmark
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-md"> 12k </tw-button>
</tw-group>`;

  withChecboxAndSelect = `<tw-group className="items-stretch">
  <tw-button variant="text" className="border border-neutral-300 dark:border-neutral-600 rounded-l-md p-3">
    <input type="checkbox"
      class="hover:cursor-pointer size-4 rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" className="p-0 rounded-r-md h-full">
    <label for="currency" class="sr-only">Currency</label>
    <select id="currency" name="currency"
      class="h-full min-w-full rounded-r-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 py-1 pl-2 pr-7 dark:text-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-group>`;


  roundedWithThreeButtons = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-full"> Years </tw-button>
  <tw-button variant="secondary" className="rounded-none"> Months </tw-button>
  <tw-button variant="secondary" className="rounded-r-full"> Days </tw-button>
</tw-group>`;

  roundedWithTwoButtons = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
</tw-group>`;

  roundedWithDropdown = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-full">
    Save changes
  </tw-button>
  <tw-dropdown [open]="open(4)" (click)="toggle(4)">
    <tw-button variant="secondary" className="rounded-r-full p-2 pr-3">
      <svg *ngIf="!open(4)" class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
      <svg *ngIf="open(4)" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" class="size-6">
        <path d="m280-400 200-200 200 200H280Z" />
      </svg>
    </tw-button>
    <tw-dropdown-item *ngFor="let item of items">
      <tw-button variant="secondary" className="w-[11.5rem] rounded-none border-none justify-start"> {{ item }} </tw-button>
    </tw-dropdown-item>
  </tw-dropdown>
</tw-group>`;

  roundedWithStats = `<tw-group>
  <tw-button variant="secondary" className="rounded-l-full">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="#777" viewBox="0 -960 960 960">
      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
    </svg>
    Bookmark
  </tw-button>
  <tw-button variant="secondary" className="rounded-r-full"> 12k </tw-button>
</tw-group>`;

  roundedWithChecboxAndSelect = `<tw-group className="items-stretch">
  <tw-button variant="text" className="border border-neutral-300 dark:border-neutral-600 rounded-l-full p-3">
    <input type="checkbox"
      class="hover:cursor-pointer size-4 rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" className="p-0 rounded-r-md h-full">
    <label for="currency" class="sr-only">Currency</label>
    <select id="currency" name="currency"
      class="h-full min-w-full rounded-r-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 py-1 pl-2 pr-7 dark:text-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-group>`;

}
