import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group-demo',
  templateUrl: './button-group-demo.component.html',
})
export class ButtonGroupDemoComponent {

  checkBoxId01 = crypto.randomUUID();
  checkBoxId02 = crypto.randomUUID();

  states: Record<number, boolean> = {}

  open(key: number) {
    return this.states[key];
  }

  toggleDropdown(key: number) {
    this.states[key] = !this.states[key];
  }

  simpleButtonGroups = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-md">Days</tw-button>
  <tw-button variant="secondary" class="rounded-none">Months</tw-button>
  <tw-button variant="secondary" class="rounded-r-md">Years</tw-button>
</tw-button-group>`;

  withTwoButtons = `<tw-button-group class="border border-inherit p-1.5 rounded-xl">
  <tw-button [icon]="true" size="sm" variant="secondary" class="rounded-l-md">
    <tw-icon source="heroicons" name="chevron-left" />
  </tw-button>
  <tw-button [icon]="true" size="sm" variant="secondary" class="rounded-r-md">
    <tw-icon source="heroicons" name="chevron-right" />
  </tw-button>
</tw-button-group>`;

  withDropdown = `<tw-button-group>
  <tw-button variant="secondary" className="rounded-l-md">
    Save changes
  </tw-button>
  <div>
    <tw-button [icon]="true" variant="secondary" className="rounded-r-md h-full" (click)="toggleDropdown()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
    </tw-button>
    <tw-dropdown [open]="open" (click)="toggleDropdown()" className="shadow-lg *:justify-start *:rounded-none *:shadow-none">
      <ng-container *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
        <tw-button className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
          variant="text">
          {{ item }}
        </tw-button>
      </ng-container>
    </tw-dropdown>
  </div>
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
  <tw-button [icon]="true" variant="text" className="relative border border-neutral-300 dark:border-neutral-600 rounded-l-md p-2.5">
    <label for="checkbox" class="absolute inset-0 p-[18px]"></label>
    <input type="checkbox" id="checkbox" class="hover:cursor-pointer rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
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
  <tw-button variant="secondary" class="rounded-l-full">Days</tw-button>
  <tw-button variant="secondary" class="rounded-none">Months</tw-button>
  <tw-button variant="secondary" class="rounded-r-full">Years</tw-button>
</tw-button-group>`;

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
  <div>
    <tw-button variant="secondary" className="rounded-r-full h-full pl-3" (click)="toggleDropdown()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
    </tw-button>
    <tw-dropdown [open]="open" (click)="toggleDropdown()" className="rounded-3xl shadow-lg *:justify-start *:shadow-none *:rounded-full p-2">
      <ng-container *ngFor="let item of ['Save as draft', 'Save and publish', 'Save and close']">
        <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
          {{ item }}
        </tw-button>
      </ng-container>
    </tw-dropdown>
  </div>
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
  <tw-button [icon]="true" variant="text" className="relative border border-neutral-300 dark:border-neutral-600 rounded-l-3xl p-2.5">
    <label for="checkbox" class="absolute inset-0 p-[18px]"></label>
    <input type="checkbox" id="checkbox" class="hover:cursor-pointer rounded-full border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" className="*:size-auto p-0">
    <label for="currency" class="sr-only">Currency</label>
    <select id="currency" name="currency" class="rounded-r-3xl border border-neutral-200 dark:border-neutral-700 bg-inherit dark:bg-neutral-800 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-button-group>`;

}
