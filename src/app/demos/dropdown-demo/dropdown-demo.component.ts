import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styles: ``
})
export class DropdownDemoComponent {
  states: Record<number, boolean> = {};

  open(key: number) {
    return this.states[key];
  }

  toggle(key: number) {
    this.states[key] = !this.states[key];
  }
  simple = `<tw-dropdown [open]="open" (click)="toggle()" className="min-w-52 shadow-lg">
  <tw-button variant="secondary">
    Options
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
    </svg>
  </tw-button>
  <tw-dropdown-content className="*:justify-start *:rounded-none *:shadow-none">
    <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
      Account settings
    </tw-button>
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;

  withDividers = `<tw-dropdown [open]="open" (click)="toggle()" className="...">
  <tw-button variant="secondary">
    <!-- ... -->
  </tw-button>
  <tw-dropdown-content className="... divide-y divide-black/5 dark:divide-white/5">
    <tw-button variant="text" className="...">
      Edit
    </tw-button>
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;

  withIcons = `<tw-dropdown [open]="open" (click)="toggle()" className="...">
  <tw-button variant="secondary">
    <!-- ... -->
  </tw-button>
  <tw-dropdown-content className="... *:justify-start">
    <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>
      Edit
    </tw-button>
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;

  withMinimalMenuIcon = `<tw-dropdown [open]="open" (click)="toggle()" className="...">
  <tw-button tw-icon variant="text">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd"  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
  <tw-dropdown-content className="...">
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;


  roundedSimple = `<tw-dropdown [open]="open" (click)="toggle()" className="rounded-3xl ...">
  <tw-button variant="secondary" className="rounded-3xl">
    Options
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
    </svg>
  </tw-button>
  <tw-dropdown-content className="*:justify-start *:rounded-none *:shadow-none">
    <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
      Account settings
    </tw-button>
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;

  roundedWithDividers = `<tw-dropdown [open]="open" (click)="toggle()" className="rounded-3xl ...">
  <tw-button variant="secondary" className="rounded-3xl">
    <!-- ... -->
  </tw-button>
  <tw-dropdown-content className="... divide-y divide-black/5 dark:divide-white/5">
    <tw-button variant="text" className="...">
      Edit
    </tw-button>
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;

  roundedWithIcons = `<tw-dropdown [open]="open" (click)="toggle()" className="rounded-3xl ...">
  <tw-button variant="secondary" className="rounded-3xl">
    <!-- ... -->
  </tw-button>
  <tw-dropdown-content className="... *:justify-start">
    <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>
      Edit
    </tw-button>
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;

  roundedWithMinimalMenuIcon = `<tw-dropdown [open]="open" (click)="toggle()" className="rounded-3xl ...">
  <tw-button tw-icon variant="text" className="rounded-3xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd"  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
    </svg>
  </tw-button>
  <tw-dropdown-content className="...">
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;
}
