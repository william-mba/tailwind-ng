export const COMBOBOX_DEMO_SAMPLE = {
  quick_start_guide: `// Basic example on how to use the Combobox component.
// Import from ngxtw
import { ComboboxModule, ComboboxItemState } from 'ngxtw';

interface User extends Partial<ComboboxItemState> {
  image?: string;
  status?: 'active' | 'inactive';
}

@Component({
  standalone: true,
  imports: [
    ComboboxModule // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<!-- Combobox -->
  <div tw-combobox #combobox (valueChanges)="filter($event)" (open)="reset()" class="sm:w-80" >
    <!-- Label -->
    <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
    <!-- Input -->
    <input tw-input id="search" [formControl]="combobox.control" class="pr-10" />
    <!-- Button -->
    <button tw-button variant="text" size="sm" class="absolute inset-y-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
      <tw-icon *ngIf="combobox.opened && combobox.isValid" (click)="combobox.reset()" size="sm" key="x-mark" source="heroicons" />
      <tw-icon (click)="combobox.toggle()" size="sm" key="chevron-up-down" source="heroicons" />
    </button>
    <!-- Dropdown -->
    <tw-dropdown class="shadow-lg text-sm w-full max-h-56 overflow-y-auto dark:border-slate-700/60" >
      <div tw-combobox-item *ngFor="let user of users" [value]="user.value" [combobox]="combobox" class="aria-selected:text-white aria-selected:bg-blue-600 aria-selected:font-bold">
        <tw-icon *ngIf="combobox.contains(user.value!)" class="my-auto absolute right-3" key="check" source="heroicons" />
        <span>{{ user.value }}</span>
      </div>
    </tw-dropdown>
  </div>\`
})
export class ExampleComponent {
  get _users(): User[]{...};
  users: User[] = this._users;

  filter(value: string): void {
    this.users = this._users.filter((user) => {
      return user.value?.includes(value) || user.value?.startsWith(value);
    });
  }

  reset(): void {
    this.users = this._users;
  }

  // ... Additional logic
}`,
  html_template_customization: `<div tw-combobox ... class="sm:w-80" > ...</div>`,
  component_instance_customization: `// Import from ngxtw
import { ComboboxState } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#combobox'
  template: \`<tw-combobox #combobox ... >...</tw-combobox>\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('combobox', { static: true }) combobox!: ComboboxState;

  exampleMethod() {
    this.combobox.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// There is no configuration available for the Combobox component itself.
// However, you can customize the Combobox Item component
// and other components that are part of the Combobox component.

// Here is an example of how to customize the Combobox Item component.
import { provideComboboxItemConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideComboboxItemConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { ComboboxItemConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<ComboboxItemConfig>('ComboboxItemConfig', {
      ... // Set your customization here
    });
  }

}`,
  simple: `<!-- Combobox -->
<div tw-combobox #combobox (valueChanges)="filter($event)" (open)="reset()" class="sm:w-80" >
  <!-- Label -->
  <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
  <!-- Input -->
  <input tw-input id="search" [formControl]="combobox.control" class="pr-10" />
  <!-- Button -->
  <button tw-button variant="text" size="sm" class="absolute inset-y-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
    <tw-icon *ngIf="combobox.opened && combobox.isValid" (click)="combobox.reset()" size="sm" key="x-mark" source="heroicons" />
    <tw-icon (click)="combobox.toggle()" size="sm" key="chevron-up-down" source="heroicons" />
  </button>
  <!-- Dropdown -->
  <tw-dropdown class="shadow-lg text-sm w-full max-h-56 overflow-y-auto dark:border-slate-700/60" >
    <div tw-combobox-item *ngFor="let user of users" [value]="user.value" [combobox]="combobox" class="aria-selected:text-white aria-selected:bg-blue-600 aria-selected:font-bold">
      <tw-icon *ngIf="combobox.contains(user.value!)" class="my-auto absolute right-3" key="check" source="heroicons" />
      <span>{{ user.value }}</span>
    </div>
  </tw-dropdown>
</div>

-----------------------------------------------------------------

TypeScript file: Sample usage in the component file
get _users(): User[]{...};
users: User[] = this._users;

filter(value: string): void {
  this.users = this._users.filter((user) => {
    return user.value?.includes(value) || user.value?.startsWith(value);
  });
}

reset(): void {
  this.users = this._users;
}`,
  withCheckOnLeft: `<div tw-combobox #combobox (valueChanges)="filter($event)" (open)="reset()" class="sm:w-80">
  <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
  <input tw-input id="search" [formControl]="combobox.control" class="pr-10" />
  <button tw-button variant="text" size="sm" class="absolute inset-y-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
    <tw-icon *ngIf="combobox.opened && combobox.isValid" size="sm" (click)="combobox.reset()" key="x-mark" source="heroicons" />
    <tw-icon size="sm" (click)="combobox.toggle()" key="chevron-up-down" source="heroicons" />
  </button>
  <tw-dropdown class="shadow-lg text-sm w-full max-h-56 overflow-y-auto dark:border-slate-700/60">
    <div *ngFor="let user of users" tw-combobox-item [value]="user.value!" [combobox]="combobox" class="pl-10 aria-selected:text-white aria-selected:bg-blue-600 aria-selected:font-bold">
      <tw-icon *ngIf="combobox.contains(user.value!)" source="heroicons" key="check" class="my-auto absolute left-3" />
      <span>{{ user.value }}</span>
    </div>
  </tw-dropdown>
</div>`,
  withImage: `<div tw-combobox #combobox (valueChanges)="filter($event)" (open)="reset()" class="sm:w-80">
  <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
  <input tw-input id="search" [formControl]="combobox.control" class="pr-10" />
  <!-- Button Icon -->
  <button tw-button variant="text" size="sm" class="absolute inset-y-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
    <tw-icon *ngIf="combobox.opened && combobox.isValid" size="sm" (click)="combobox.reset()" key="x-mark" source="heroicons" />
    <tw-icon size="sm" (click)="combobox.toggle()" key="chevron-up-down" source="heroicons" />
  </button>
  <!-- Dropdown -->
  <div tw-dropdown class="shadow-lg text-sm w-full max-h-56 overflow-y-auto dark:border-slate-700/60">
    <ng-container *ngFor="let user of users">
      <div tw-combobox-item [value]="user.value!" [combobox]="combobox" class="pl-6 aria-selected:text-white aria-selected:bg-blue-700 aria-selected:font-bold">
        <img tw-avatar size="xs" alt="" class="my-auto absolute -left-3" [src]="user.image">
        <tw-icon *ngIf="combobox.contains(user.value!)" source="heroicons" key="check" class="my-auto absolute right-3" />
        <span>{{ user.value }}</span>
      </div>
    </ng-container>
  </div>
</div>`,
  withStatusIndicator: `<div tw-combobox #combobox (valueChanges)="filter($event)" (open)="reset()" class="sm:w-80">
  <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
  <input tw-input id="search" [formControl]="combobox.control" class="pr-10" />
  <!-- Button Icon -->
  <button tw-button variant="text" size="sm" class="absolute inset-y-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
    <tw-icon *ngIf="combobox.opened && combobox.isValid" size="sm" (click)="combobox.reset()" key="x-mark" source="heroicons" />
    <tw-icon size="sm" (click)="combobox.toggle()" key="chevron-up-down" source="heroicons" />
  </button>
  <!-- Dropdown -->
  <div tw-dropdown class="shadow-lg text-sm w-full max-h-56 overflow-y-auto dark:border-slate-700/60">
    <ng-container *ngFor="let user of users">
      <div tw-combobox-item [value]="user.value!" [combobox]="combobox" class="pl-8 aria-selected:text-white aria-selected:bg-blue-600 aria-selected:font-bold">
        <!-- Status Indicator -->
        <tw-icon key="dot" size="xs" class="my-auto absolute left-2" class="my-auto absolute left-2"
          [ngClass]="{'text-green-500': user.status === 'active', 'text-gray-300': user.status !== 'active', 'dark:text-gray-700': user.status !== 'active'}" />
        <!-- Check Icon -->
        <tw-icon *ngIf="combobox.contains(user.value!)" source="heroicons" key="check" class="my-auto absolute right-3" />
        <span>{{ user.value }}</span>
      </div>
    </ng-container>
  </div>
</div>`
};

