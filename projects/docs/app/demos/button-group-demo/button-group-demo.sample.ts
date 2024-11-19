export const BUTTON_GROUP_DEMO_SAMPLE = {
  quick_start_guide: `// Import from ngxtw
import { ButtonGroupComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    ButtonGroupComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<span tw-button-group > ... </span>\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<span tw-button-group class="rounded-full"> ... </span>`,
  component_instance_customization: `// Import from ngxtw
import { ButtonGroup } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#buttonGroup'
  template: \`<span tw-button-group #buttonGroup ...\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('buttonGroup', { static: true }) buttonGroup!: ButtonGroup;

  exampleMethod() {
    this.buttonGroup.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideButtonGroupConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideButtonGroupConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { ButtonGroupConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<ButtonGroupConfig>('ButtonGroup', {
      ... // Set your customization here
    });
  }

}`,
  simple_button_groups: `<div tw-button-group class="*:text-sm">
  <button tw-button-group variant="secondary">Days</button>
  <button tw-button-group variant="secondary">Months</button>
  <button tw-button-group variant="secondary">Years</button>
</div>`,
  with_two_buttons: `<div tw-button-group>
  <button tw-button-group size="sm" variant="secondary">
    <tw-icon size="sm" key="chevron-left" source="heroicons" class="text-slate-500" />
  </button>
  <button tw-button-group size="sm" variant="secondary">
    <tw-icon size="sm" key="chevron-right" source="heroicons" class="text-slate-500" />
  </button>
</div>`,
  with_dropdown: `<div>
  <!-- Button Group -->
  <div tw-button-group class="*:text-sm">
    <button tw-button-group variant="secondary">
      Save changes
    </button>
    <button tw-button-group variant="secondary" (click)="dropdown.toggle()">
      <tw-icon key="chevron-down" source="heroicons" class="text-slate-500" />
    </button>
  </div>
  <!-- Dropdown -->
  <div class="relative">
    <div tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg">
      <ul class="*:px-4 *:py-2 *:cursor-pointer *:text-sm">
        <li class="hover:bg-gray-200/50 dark:hover:bg-gray-800/50">
          Save as draft
        </li>
        <li class="hover:bg-gray-200/50 dark:hover:bg-gray-800/50">
          Save and publish
        </li>
        <li class="hover:bg-gray-200/50 dark:hover:bg-gray-800/50">
          Save and close
        </li>
      </ul>
    </div>
  </div>
</div>`,
  with_stats: `<div tw-button-group class="*:text-sm">
  <button tw-button-group variant="secondary">
    <tw-icon source="heroicons" key="bookmark" class="text-slate-400 dark:text-slate-600" />
    Bookmark
  </button>
  <button tw-button-group variant="secondary">12k</button>
</div>`,
  with_checbox_and_select: `<div tw-button-group>
  <button tw-button-group variant="text">
    <label for="select-all" class="sr-only">Select all</label>
    <input id="select-all" type="checkbox" class="rounded border-slate-300 dark:border-slate-600 text-indigo-600 focus:ring-indigo-600 hover:cursor-pointer bg-transparent">
  </button>
  <button tw-button-group variant="text" class="p-0">
    <label for="message" class="sr-only">Messages</label>
    <select id="message" class="rounded-r-md bg-slate-50 dark:bg-slate-900 border-0 dark:text-inherit focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>
  </button>
</div>`,
  simple_rounded_button_groups: `<div tw-button-group class="*:text-sm rounded-full">
  <button tw-button-group variant="secondary">Days</button>
  <button tw-button-group variant="secondary">Months</button>
  <button tw-button-group variant="secondary">Years</button>
</div>`,
  rounded_with_two_buttons: `<tw-button-group class="rounded-full">
  <tw-button-group variant="secondary" class="rounded-l-full">
    <tw-icon source="heroicons" key="chevron-left" class="text-slate-500" />
  </tw-button-group>
  <tw-button-group variant="secondary" class="rounded-r-full">
    <tw-icon source="heroicons" key="chevron-right" class="text-slate-500" />
  </tw-button-group>
</tw-button-group>`,
  rounded_with_dropdown: `<div>
  <!-- Button Group -->
  <div tw-button-group class="rounded-3xl *:text-sm">
    <button tw-button-group variant="secondary">
      Save changes
    </button>
    <button tw-button-group variant="secondary" (click)="dropdown.toggle()">
      <tw-icon key="chevron-down" source="heroicons" class="text-slate-500" />
    </button>
  </div>
  <!-- Dropdown -->
  <div class="relative">
    <div tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg rounded-3xl p-1.5">
      <ul class="*:px-4 *:py-2 *:cursor-pointer *:rounded-3xl *:text-sm">
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">
          Save as draft
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">
          Save and publish
        </li>
        <li class="hover:bg-gray-200/70 dark:hover:bg-gray-800/70">
          Save and close
        </li>
      </ul>
    </div>
  </div>
</div>`,
  rounded_with_stats: `<div tw-button-group class="rounded-full *:text-sm">
  <button tw-button-group variant="secondary">
    <tw-icon source="heroicons" key="bookmark" class="text-slate-400 dark:text-slate-600" />
    Bookmark
  </button>
  <button tw-button-group variant="secondary"> 12k </button>
</div>`,
}
