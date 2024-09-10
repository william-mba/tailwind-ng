import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html'
})
export class DropdownDemoComponent {
  simple = `<div>
  <tw-button variant="secondary" (click)="demoDropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown #demoDropdown class="shadow-lg *:justify-start *:rounded-none *:shadow-none">
    @for (item of ['Account settings', 'Support', 'License', 'Sign out']; track $index) {
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">{{ item }}</tw-button>
    }
  </tw-dropdown>
</div>`;

  withDividers = `<div>
  <tw-button variant="secondary" (click)="demoDropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown #demoDropdown class="shadow-lg divide-y divide-black/5 dark:divide-white/5">
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Edit
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Duplicate
      </tw-button>
    </div>
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Archive
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Move
      </tw-button>
    </div>
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Share
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Add to favorites
      </tw-button>
    </div>
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Delete
      </tw-button>
    </div>
  </tw-dropdown>
</div>`;

  withIcons = `<div>
  <tw-button variant="secondary" (click)="demoDropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown #demoDropdown class="shadow-lg divide-y divide-black/5 dark:divide-white/5">
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="pencil-square"/>
        Edit
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="document-duplicate"/>
        Duplicate
      </tw-button>
    </div>
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="archive-box"/>
        Archive
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="arrow-right-circle"/>
        Move
      </tw-button>
    </div>
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="share"/>
        Share
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="star"/>
        Add to favorites
      </tw-button>
    </div>
    <div class="flex flex-col py-1 *:justify-start *:rounded-none *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="strash"/>
        Delete
      </tw-button>
    </div>
  </tw-dropdown>
</div>`;

  withMinimalMenuIcon = `<div>
  <tw-button [icon]="true" variant="text" (click)="demoDropdown.toggle()">
    <tw-icon source="googlefonts" name="more-ver" />
  </tw-button>
  <tw-dropdown #demoDropdown class="shadow-lg *:justify-start *:rounded-none *:shadow-none">
    @for (item of ['Account settings', 'Support', 'License', 'Sign out']; track $index) {
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">{{ item }}</tw-button>
    }
  </tw-dropdown>
</div>`;

  roundedSimple = `<div>
  <tw-button variant="secondary" class="rounded-3xl" (click)="demoDropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown #demoDropdown class="rounded-3xl shadow-lg *:justify-start *:shadow-none *:rounded-full p-2">
    @for (item of ['Account settings', 'Support', 'License', 'Sign out']; track $index) {
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">{{ item }}</tw-button>
    }
  </tw-dropdown>
</div>`;

  roundedWithDividers = `<div>
  <tw-button variant="secondary" class="rounded-3xl" (click)="demoDropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown #demoDropdown class="rounded-3xl shadow-lg divide-y divide-black/5 dark:divide-white/5 *:justify-start *:rounded-none *:shadow-none">
    <div class="flex flex-col p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Edit
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Duplicate
      </tw-button>
    </div>
    <div class="flex flex-col p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Archive
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Move
      </tw-button>
    </div>
    <div class="flex flex-col p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Share
      </tw-button>
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Add to favorites
      </tw-button>
    </div>
    <div class="flex flex-col p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        Delete
      </tw-button>
    </div>
  </tw-dropdown>
</div>`;

  roundedWithIcons = `<div>
  <tw-button variant="secondary" class="rounded-3xl" (click)="demoDropdown.toggle()">
    Options
    <tw-icon source="heroicons" name="chevron-down" />
  </tw-button>
  <tw-dropdown #demoDropdown class="rounded-3xl shadow-lg *:justify-start divide-y divide-black/5 dark:divide-white/5 *:rounded-none *:shadow-none">
    <div class="flex flex-col p-2 *:p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="pencil-square" />
        Edit
      </tw-button>
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="document-duplicate" />
        Duplicate
      </tw-button>
    </div>
    <div class="flex flex-col p-2 *:p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="archive-box" />
        Archive
      </tw-button>
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="arrow-right-circle" />
        Move
      </tw-button>
    </div>
    <div class="flex flex-col p-2 *:p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="share" />
        Share
      </tw-button>
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="star" />
        Add to favorites
      </tw-button>
    </div>
    <div class="flex flex-col p-2 *:p-2 py-1 *:justify-start *:rounded-full *:shadow-none">
      <tw-button variant="text"
        class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">
        <tw-icon source="heroicons" name="strash" />
        Delete
      </tw-button>
    </div>
  </tw-dropdown>
</div>`;

  roundedWithMinimalMenuIcon = `<div>
  <tw-button [icon]="true" variant="text" class="rounded-3xl" (click)="demoDropdown.toggle()">
    <tw-icon source="googlefonts" name="more-ver" />
  </tw-button>
  <tw-dropdown #demoDropdown class="rounded-3xl shadow-lg *:justify-start *:shadow-none *:rounded-full p-2">
    @for (item of ['Account settings', 'Support', 'License', 'Sign out']; track $index) {
      <tw-button variant="text" class="hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5">{{ item }}</tw-button>
    }
  </tw-dropdown>
</div>`;

}
