import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html'
})
export class DropdownDemoComponent {

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }

  simple = `<div>
  <tw-button variant="secondary" (click)="dropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="shadow-lg">
    <ul class="px-1 *:rounded-sm *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Account settings </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Support </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> License </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Sign out </li>
    </ul>
  </tw-dropdown>
</div>`;

  with_dividers = `<div>
  <tw-button variant="secondary" (click)="dropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="shadow-lg py-0 *:py-1 divide-y divide-black/5 dark:divide-white/5">
    <ul class="px-1 *:rounded-sm *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Edit </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Duplicate </li>
    </ul>
    <ul class="px-1 *:rounded-sm *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Archive </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Move </li>
    </ul>
    <ul class="px-1 *:rounded-sm *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Share </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Add to favorites </li>
    </ul>
    <ul class="px-1 *:rounded-sm *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Delete </li>
    </ul>
  </tw-dropdown>
</div>`;

  with_icons = `<div>
  <tw-button variant="secondary" (click)="dropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="shadow-lg py-0 *:py-1 divide-y divide-black/5 dark:divide-white/5">
    <ul class="px-1 *:rounded-sm *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="pencil-square" />
        Edit
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="document-duplicate" />
        Duplicate
      </li>
    </ul>
    <ul class="px-1 *:rounded-sm *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="archive-box" />
        Archive
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="arrow-right-circle" />
        Move
      </li>
    </ul>
    <ul class="px-1 *:rounded-sm *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="share" />
        Share
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="star" />
        Add to favorites
      </li>
    </ul>
    <ul class="px-1 *:rounded-sm *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="strash" />
        Delete
      </li>
    </ul>
  </tw-dropdown>
</div>`;

  with_minimal_menu_icon = `<div>
  <tw-button [icon]="true" variant="text" (click)="dropdown.toggle()">
    <tw-icon source="googlefonts" name="more-ver" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="shadow-lg">
    <ul class="px-1 *:rounded-sm *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Account settings </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Support </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> License </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Sign out </li>
    </ul>
  </tw-dropdown>
</div>`;

  rounded_simple = `<div>
  <tw-button variant="secondary" class="rounded-3xl" (click)="dropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="rounded-3xl shadow-lg">
    <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Account settings </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Support </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> License </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Sign out </li>
    </ul>
  </tw-dropdown>
</div>`;

  rounded_with_dividers = `<div>
  <tw-button variant="secondary" class="rounded-3xl" (click)="dropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="rounded-3xl shadow-lg py-0 *:py-1 divide-y divide-black/5 dark:divide-white/5">
    <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Edit </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Duplicate </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Archive </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Move </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Share </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Add to favorites </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Delete </li>
    </ul>
  </tw-dropdown>
</div>`;

  rounded_with_icons = `<div>
  <tw-button variant="secondary" class="rounded-3xl" (click)="dropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="rounded-3xl shadow-lg py-0 *:py-1 divide-y divide-black/5 dark:divide-white/5">
    <ul class="px-1 *:rounded-full *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="pencil-square" />
        Edit
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="document-duplicate" />
        Duplicate
      </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="archive-box" />
        Archive
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="arrow-right-circle" />
        Move
      </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="share" />
        Share
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="star" />
        Add to favorites
      </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-2 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-2">
        <tw-icon size="sm" source="heroicons" name="strash" />
        Delete
      </li>
    </ul>
  </tw-dropdown>
</div>`;

  rounded_with_minimal_menu_icon = `<div>
  <tw-button [icon]="true" variant="text" class="rounded-3xl" (click)="dropdown.toggle()">
    <tw-icon source="googlefonts" name="more-ver" />
  </tw-button>
  <tw-dropdown [opened]="true" #dropdown class="rounded-3xl shadow-lg">
    <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Account settings </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Support </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> License </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5"> Sign out </li>
    </ul>
  </tw-dropdown>
</div>`;
}
