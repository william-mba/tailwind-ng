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

  simple_button_groups = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-md">Days</tw-button>
  <tw-button variant="secondary" class="rounded-none">Months</tw-button>
  <tw-button variant="secondary" class="rounded-r-md">Years</tw-button>
</tw-button-group>`;

  with_two_buttons = `<tw-button-group>
  <tw-button [icon]="true" variant="secondary" class="rounded-l-md">
    <tw-icon source="heroicons" name="chevron-left" />
  </tw-button>
  <tw-button [icon]="true" variant="secondary" class="rounded-r-md">
    <tw-icon source="heroicons" name="chevron-right" />
  </tw-button>
</tw-button-group>`;

  with_dropdown = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-md">
    Save changes
  </tw-button>
  <div>
    <tw-button class="rounded-r-md ring-0" variant="secondary" [icon]="true" (click)="dropdown.toggle()">
      <tw-icon source="heroicons" name="chevron-down" />
    </tw-button>
    <tw-dropdown #dropdown class="shadow-lg">
      <ul class="*:px-4 *:py-2 *:cursor-pointer *:font-semibold">
        <li class="hover:bg-black/5 dark:hover:bg-white/5"> Save as draft </li>
        <li class="hover:bg-black/5 dark:hover:bg-white/5"> Save and publish </li>
        <li class="hover:bg-black/5 dark:hover:bg-white/5"> Save and close </li>
      </ul>
    </tw-dropdown>
  </div>
</tw-button-group>`;

  with_stats = `<tw-button-group>
  <tw-button variant="secondary" class="rounded-l-md">
    <tw-icon source="heroicons" name="bookmark" />
    Bookmark
  </tw-button>
  <tw-button variant="secondary" class="rounded-r-md">12k</tw-button>
</tw-button-group>`;

  with_checbox_and_select = `<tw-button-group>
  <tw-button variant="text" class="relative rounded-l-md h-auto">
    <label for="checkbox" class="absolute inset-0 min-h-full min-w-full"></label>
    <input type="checkbox" id="checkbox" class="hover:cursor-pointer rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" class="*:size-auto p-0 rounded-l-none">
    <label for="message-status" class="sr-only">Message status</label>
    <select id="message-status" name="message-status" class="rounded-r-md bg-inherit border-0 dark:bg-neutral-800 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-button-group>`;

  simple_rounded_button_groups = `<tw-button-group class="rounded-full">
  <tw-button variant="secondary" class="rounded-l-full">Days</tw-button>
  <tw-button variant="secondary" class="rounded-none">Months</tw-button>
  <tw-button variant="secondary" class="rounded-r-full">Years</tw-button>
</tw-button-group>`;

  rounded_with_two_buttons = `<tw-button-group class="rounded-full">
  <tw-button [icon]="true" variant="secondary" class="rounded-l-full">
    <tw-icon source="heroicons" name="chevron-left" />
  </tw-button>
  <tw-button [icon]="true" variant="secondary" class="rounded-r-full">
    <tw-icon source="heroicons" name="chevron-right" />
  </tw-button>
</tw-button-group>`;

  rounded_with_dropdown = `<tw-button-group class="rounded-full">
  <tw-button variant="secondary" class="rounded-l-full">
    Save changes
  </tw-button>
  <div>
    <tw-button class="rounded-r-full ring-0" variant="secondary" [icon]="true" (click)="dropdown.toggle()">
      <tw-icon source="heroicons" name="chevron-down" />
    </tw-button>
    <tw-dropdown #dropdown class="py-2 shadow-lg rounded-3xl">
      <ul class="px-2 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:font-semibold">
        <li class="hover:bg-black/5 dark:hover:bg-white/5"> Save as draft </li>
        <li class="hover:bg-black/5 dark:hover:bg-white/5"> Save and publish </li>
        <li class="hover:bg-black/5 dark:hover:bg-white/5"> Save and close </li>
      </ul>
    </tw-dropdown>
  </div>
</tw-button-group>`;

  rounded_with_stats = `<tw-button-group class="rounded-full">
  <tw-button variant="secondary" class="rounded-l-full">
    <tw-icon source="heroicons" name="bookmark" />
    Bookmark
  </tw-button>
  <tw-button variant="secondary" class="rounded-r-full"> 12k </tw-button>
</tw-button-group>`;

  rounded_with_checbox_and_select = `<tw-button-group class="rounded-full">
  <tw-button variant="text" class="relative rounded-l-full h-auto">
    <label for="checkbox" class="absolute inset-0 min-h-full min-w-full"></label>
    <input type="checkbox" id="checkbox" class="hover:cursor-pointer rounded-sm border-neutral-300 dark:border-neutral-600 text-indigo-600 focus:ring-indigo-600 bg-transparent">
  </tw-button>
  <tw-button variant="text" class="*:size-auto p-0 rounded-l-none">
    <label for="messages" class="sr-only">Messages</label>
    <select id="messages" name="messages" class="rounded-r-full bg-inherit border-0 dark:bg-neutral-800 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </tw-button>
</tw-button-group>`;

}
