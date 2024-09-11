import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group-demo',
  templateUrl: './button-group-demo.component.html',
})
export class ButtonGroupDemoComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }
  checkBoxId01 = crypto.randomUUID();
  checkBoxId02 = crypto.randomUUID();

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
  <tw-button variant="secondary" class="rounded-l-md">
    Save changes
  </tw-button>
  <div>
    <tw-button class="rounded-r-md h-full" variant="secondary" [icon]="true" (click)="myDemoDropdown.toggle()">
      <tw-icon source="heroicons" name="chevron-down" />
    </tw-button>
    <tw-dropdown #myDemoDropdown class="shadow-lg *:justify-start *:rounded-none *:shadow-none">
      @for (item of ['Save as draft', 'Save and publish', 'Save and close']; track $index) {
        <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">{{ item }}</tw-button>
      }
    </tw-dropdown>
  </div>
</tw-button-group>`;

  withStats = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-md">
    <tw-icon source="heroicons" name="bookmark" />
    Bookmark
  </tw-button>
  <tw-button variant="secondary" class="rounded-r-md">12k</tw-button>
</tw-button-group>`;

  withChecboxAndSelect = `<tw-button-group>
  <tw-button [icon]="true" variant="text" class="relative border border-neutral-300 dark:border-neutral-600 rounded-l-md p-2.5">
    <label for="checkbox" class="absolute inset-0 p-[18px]"></label>
    <input type="checkbox" id="checkbox" class="hover:cursor-pointer rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" class="*:size-auto p-0">
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
  <tw-button variant="secondary" class="rounded-l-full">
    <tw-icon source="heroicons" name="chevron-left" />
  </tw-button>
  <tw-button variant="secondary" class="rounded-r-full">
    <tw-icon source="heroicons" name="chevron-right" />
  </tw-button>
</tw-button-group>`;

  roundedWithDropdown = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-full">Save changes</tw-button>
  <div>
    <tw-button variant="secondary" class="rounded-r-full h-full pl-3" (click)="myDemoDropdown.toggle()">
      <tw-icon source="heroicons" name="chevron-down" />
    </tw-button>
    <tw-dropdown #myDemoDropdown class="rounded-3xl shadow-lg *:justify-start *:shadow-none *:rounded-full p-2">
      @for (item of ['Save as draft', 'Save and publish', 'Save and close']; track $index) {
        <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">{{ item }}</tw-button>
      }
    </tw-dropdown>
  </div>
</tw-button-group>`;

  roundedWithStats = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-full">
    <tw-icon source="heroicons" name="bookmark" />
    Bookmark
  </tw-button>
  <tw-button variant="secondary" class="rounded-r-full"> 12k </tw-button>
</tw-button-group>`;

  roundedWithChecboxAndSelect = `<tw-button-group>
  <tw-button [icon]="true" variant="text" class="relative border border-neutral-300 dark:border-neutral-600 rounded-l-3xl p-2.5">
    <label for="checkbox" class="absolute inset-0 p-[18px]"></label>
    <input type="checkbox" id="checkbox" class="hover:cursor-pointer rounded-full border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" class="*:size-auto p-0">
    <label for="currency" class="sr-only">Currency</label>
    <select id="currency" name="currency" class="rounded-r-3xl border border-neutral-200 dark:border-neutral-700 bg-inherit dark:bg-neutral-800 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-button-group>`;

}
