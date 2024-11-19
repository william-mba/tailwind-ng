export const DROPDOWN_DEMO_SAMPLE = {
  quick_start_guide: `// Import from ngxtw
import { DropdownComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    DropdownComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<button tw-button click="dropdown.toggle()"> Click me! </button>
    <div class="relative">
      <tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg">
        <!-- Your content goes here -->
      </tw-dropdown>
    </div>
  </div>\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<tw-dropdown class="rounded-3xl shadow-lg">...</tw-dropdown>`,
  component_instance_customization: `// Import from ngxtw
import { Dropdown } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#dropdown'
  template: \`<tw-dropdown #dropdown (click)="dropdown.close()" >...</tw-dropdown>\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('dropdown', { static: true }) dropdown!: Dropdown;

  exampleMethod() {
    this.dropdown.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideDropdownConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideDropdownConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { DropdownConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<DropdownConfig>('Dropdown', {
      ... // Set your customization here
    });
  }

}`,
  simple: `<div>
  <button tw-button size="sm" variant="secondary" (click)="dropdown.toggle()">
    Options <tw-icon size="sm" key="chevron-down" source="heroicons" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg text-sm">
      <ul class="*:px-4 *:py-2 *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70"> Account settings </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70"> Support </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70"> License </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70"> Sign out </li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  with_dividers: `<div>
  <button tw-button size="sm" variant="secondary" (click)="dropdown.toggle()">
    Options <tw-icon size="sm" key="chevron-down" source="heroicons" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg py-0 *:py-1 *:text-sm divide-y divide-gray-200/70 dark:divide-gray-800/70">
      <ul class="*:px-4 *:py-2 *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Edit</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Duplicate</li>
      </ul>
      <ul class="*:px-4 *:py-2 *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Archive</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Move</li>
      </ul>
      <ul class="*:px-4 *:py-2 *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Share</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Add to favorites</li>
      </ul>
      <ul class="*:px-4 *:py-2 *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Delete</li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  with_icons: `<div>
  <button tw-button size="sm" variant="secondary" (click)="dropdown.toggle()">
    Options <tw-icon size="sm" key="chevron-down" source="heroicons" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg py-0 *:py-1 divide-y divide-gray-200/70 dark:divide-gray-800/70">
      <ul class="*:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="pencil-square" />
          Edit
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="document-duplicate" />
          Duplicate
        </li>
      </ul>
      <ul class="*:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="archive-box" />
          Archive
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="arrow-right-circle" />
          Move
        </li>
      </ul>
      <ul class="*:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="share" />
          Share
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="star" />
          Add to favorites
        </li>
      </ul>
      <ul class="*:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="strash" />
          Delete
        </li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  with_minimal_menu_icon: `<div>
  <button tw-button variant="text" class="p-0" (click)="dropdown.toggle()">
    <tw-icon size="sm" source="googlefonts" key="more-ver" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg" [position]="{ top: 'top-2', right: 'right-1' }">
      <ul class="*:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Account settings</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Support</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">License</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Sign out</li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  rounded_simple: `<div>
  <button tw-button size="sm" variant="secondary" class="rounded-3xl" (click)="dropdown.toggle()">
    Options <tw-icon size="sm" key="chevron-down" source="heroicons" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="rounded-3xl shadow-lg">
      <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Account settings</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Support</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">License</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Sign out</li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  rounded_with_dividers: `<div>
  <button tw-button size="sm" variant="secondary" class="rounded-3xl" (click)="dropdown.toggle()">
    Options <tw-icon size="sm" key="chevron-down" source="heroicons" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="rounded-3xl shadow-lg py-0 *:py-1 divide-y divide-gray-200/70 dark:divide-gray-800/70">
      <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Edit</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Duplicate</li>
      </ul>
      <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Archive</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Move</li>
      </ul>
      <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Share</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Add to favorites</li>
      </ul>
      <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Delete</li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  rounded_with_icons: `<div>
  <button tw-button size="sm" variant="secondary" class="rounded-3xl" (click)="dropdown.toggle()">
    Options <tw-icon size="sm" key="chevron-down" source="heroicons" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="rounded-3xl shadow-lg py-0 *:py-1 divide-y divide-gray-200/70 dark:divide-gray-800/70">
      <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="pencil-square" />
          Edit
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="document-duplicate" />
          Duplicate
        </li>
      </ul>
      <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="archive-box" />
          Archive
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="arrow-right-circle" />
          Move
        </li>
      </ul>
      <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="share" />
          Share
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="star" />
          Add to favorites
        </li>
      </ul>
      <ul class="px-1 *:rounded-full *:px-3 *:py-2 *:text-sm *:cursor-pointer">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70 w-full inline-flex items-center gap-3">
          <tw-icon size="sm" class="opacity-50" source="heroicons" key="strash" />
          Delete
        </li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
  rounded_with_minimal_menu_icon: `<div>
  <button tw-button variant="secondary" class="rounded-3xl p-1" (click)="dropdown.toggle()">
    <tw-icon size="sm" key="more-ver" source="googlefonts" class="text-slate-500" />
  </button>
  <div class="relative">
    <tw-dropdown #dropdown (click)="dropdown.close()" class="rounded-3xl shadow-lg">
      <ul class="px-1 *:rounded-full *:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Account settings</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Support</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">License</li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">Sign out</li>
      </ul>
    </tw-dropdown>
  </div>
</div>`,
}
