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

  toggleDropdown(key: number) {
    this.states[key] = !this.states[key];
  }
  simple = `<tw-dropdown [open]="open" (click)="toggle()" className="shadow-lg">
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

  withDividers = `<tw-dropdown [open]="open" (click)="toggle()" className="shadow-lg">
  <tw-button variant="secondary">
    <!-- ... -->
  </tw-button>
  <tw-dropdown-content className="divide-y divide-black/5 dark:divide-white/5">
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" className="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Edit
      </tw-button>
      <tw-button variant="text" className="...">
        Duplicate
      </tw-button>
    </div>
    <!-- ... -->
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" className="...">
        Delete
      </tw-button>
    </div>
  </tw-dropdown-content>
</tw-dropdown>`;

  withIcons = `<tw-dropdown [open]="open" (click)="toggle()" className="shadow-lg">
  <tw-button variant="secondary">
    <!-- ... -->
  </tw-button>
  <tw-dropdown-content className="divide-y divide-black/5 dark:divide-white/5">
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" ...>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
        </svg>
        Edit
      </tw-button>
      <tw-button variant="text" ...>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
          <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
        </svg>
        Duplicate
      </tw-button>
    </div>
    <!-- ... -->
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" ...">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
        </svg>
        Delete
      </tw-button>
    </div>
  </tw-dropdown-content>
</tw-dropdown>`;

  withMinimalMenuIcon = `<tw-dropdown [open]="open" (click)="toggle()" className="shadow-lg">
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
  <tw-dropdown-content className="*:justify-start *:shadow-none *:rounded-full p-2 py-1">
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
  <tw-dropdown-content className="divide-y divide-black/5 dark:divide-white/5 *:justify-start *:rounded-none *:shadow-none">
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
  <tw-dropdown-content className="*:justify-start *:shadow-none *:rounded-full p-2 py-1">
    <!-- ... -->
  </tw-dropdown-content>
</tw-dropdown>`;
}
