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
    <ul class="*:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="pencil-square" />
        Edit
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="document-duplicate" />
        Duplicate
      </li>
    </ul>
    <ul class="*:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="archive-box" />
        Archive
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="arrow-right-circle" />
        Move
      </li>
    </ul>
    <ul class="*:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="share" />
        Share
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="star" />
        Add to favorites
      </li>
    </ul>
    <ul class="*:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="strash" />
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
    <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="pencil-square" />
        Edit
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="document-duplicate" />
        Duplicate
      </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="archive-box" />
        Archive
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="arrow-right-circle" />
        Move
      </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="share" />
        Share
      </li>
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="star" />
        Add to favorites
      </li>
    </ul>
    <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:cursor-pointer">
      <li class="hover:bg-black/5 dark:hover:bg-white/5 w-full inline-flex items-center gap-3">
        <tw-icon class="opacity-50" source="heroicons" name="strash" />
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

  html_template_customization = `<tw-dropdown class="rounded-3xl shadow-lg"> ... </tw-dropdown>`;
  component_instance_customization = `// 1. Import the Dropdown, DropdownComponent and DropdownConfig
import { Dropdown, DropdownComponent, DropdownConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  // 2. Add the DropdownComponent class to your component imports
  imports: [DropdownComponent],
  // 3. Add the dropdown component to the template with a template reference variable
  template: \`<tw-dropdown #dropdown> ... </tw-dropdown>\`
})
export class AppDemoComponent {
  // 4. Get the dropdown component reference
  @ViewChild('dropdown') dropdown!: Dropdown;

  ngAfterViewInit() {
    // 5. Define your custom configuration
    const CustomDropdownConfig: Partial<DropdownConfig> = {
      shadow: 'shadow-lg',
      theme: {
        dark: {
          bgColor: 'dark:bg-neutral-900',
          borderColor: 'dark:border-neutral-700'
        }
      }
    }
    // 6. Apply your custom configuration
    // Note: setTimeout is used to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.dropdown.setConfig(this.customDropdownConfig), 0)
  }

  // Note: You can also use the setConfig method inside your component methods to change the configuration dynamically
  someMethod() {
    this.dropdown.setConfig({ shadow: 'shadow-lg' });
  }
}`;
  dependency_injection_customization = `// 1. Import the DropdownComponent, DropdownConfig and provideDropdownConfig
import { DropdownComponent, DropdownConfig, provideDropdownConfig } from 'ngxtw';

// 2. Define your custom configuration
const CustomDropdownConfig: Partial<DropdownConfig> = {
  shadow: 'shadow-lg',
  theme: {
    dark: {
      bgColor: 'dark:bg-neutral-900',
      borderColor: 'dark:border-neutral-700'
    }
  }
}

@Component({
  standalone: true,
  selector: 'app-demo',
  // 3. Add the DropdownComponent class to your component imports
  imports: [DropdownComponent],
  providers: [
    // 4. Provide the custom configuration
    provideDropdownConfig(CustomDropdownConfig)
  ]
})
export class AppDemoComponent { ... }`;

  configure_provider = `...
  imports: [DropdownComponent], // Import the DropdownComponent
  providers: [
    provideDropdownConfig() // Provide the default configuration
  ]
})
...`;
}
