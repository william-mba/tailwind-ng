export const INPUT_DEMO_SAMPLE = {
  quick_start_guide: `// Import from ngxtw
import { InputComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    InputComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<input tw-input type="email" placeholder="you@example.com" />\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<input tw-input type="email" class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" /> <!-- ... -->`,
  component_instance_customization: `// Import from ngxtw
import { TwInput } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#input'
  template: \`<input tw-input #input type="email" placeholder="you@example.com" />\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('input') input!: TwInput;

  exampleMethod() {
    this.input.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideInputConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideInputConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { InputConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<InputConfig>('Input', {
      ... // Set your customization here
    });
  }

}`,
  input_with_label_and_help_text: `<div>
  <label for="email" class="block text-sm mb-2 font-medium"> Email </label>
  <input tw-input type="email" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
  <p class="text-gray-400 dark:text-gray-600 text-sm mt-2">We'll only use this for spam.</p>
</div>`,
  input_with_inline_leading_addon_and_trailing_dropdown: `<div>
  <label for="price" class="block text-sm mb-2 font-medium">Price</label>
  <div class="relative">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-600 dark:text-gray-400 sm:text-sm">$</span>
    </div>
    <!-- Input -->
    <input tw-input id="price" class="sm:w-80 pl-7 pr-16 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 *:dark:text-slate-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>`,
  input_with_label: `<div>
  <label for="email" class="block text-sm mb-2 font-medium"> Email </label>
  <input tw-input type="email" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
</div>`,
  input_with_validation_error: `@Component({
  ...,
  template: \`<div>
    <label for="email" class="block text-sm mb-2 font-medium">Email</label>
    <div class="relative">
      <!-- Input -->
      <input tw-input type="email" id="email"
        [formControl]="email" [class.invalid]="isInvalid(email)"
        class="sm:w-80 pr-10 placeholder:text-gray-400 placeholder:dark:text-gray-600 invalid:ring-red-600/60 focus:invalid:ring-red-600/60" ... />
      <div class="absolute inset-y-0 right-3 flex items-center text-red-600/80">
        <tw-icon *ngIf="isInvalid(email)" source="heroicons" key="exclamation-circle" />
      </div>
    </div>

    <div *ngIf="isInvalid(email)" class="max-w-xl text-sm mt-2 text-red-600/90 dark:text-red-500/90">
      Not a valid email address.
    </div>
  </div>\`
})
export class DemoComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  email = this._formBuilder.control('', Validators.email);
  isInvalid = (control: AbstractControl): boolean => control.invalid && control.touched;

}`,
  input_with_disable_state: `<div>
  <label for="email" class="block text-sm mb-2 font-medium">Email</label>
  <input tw-input disabled="true" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" placeholder="you@example.com" />
</div>`,
  input_without_label: `<input tw-input type="email" class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" placeholder="you@example.com" /> <!-- ... -->`,
  input_with_corner_hint: `<div>
  <div class="flex justify-between text-sm mb-2">
    <label for="email" class="font-medium">Email</label>
    <span class="opacity-60">Optional</span>
  </div>
  <input tw-input type="email" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
</div>`,
  input_with_leading_icon: `<div>
  <label for="email" class="block text-sm font-medium">Email</label>
  <div class="relative mt-2">
    <div class="absolute inset-y-0 flex items-center left-2.5 text-slate-400 dark:text-slate-600">
      <tw-icon key="envelope" source="heroicons" />
    </div>
    <input tw-input type="email" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600 pl-10" />
  </div>
</div>`,
  input_with_trailing_icon: `<div>
  <label for="account-number" class="block text-sm font-medium"> Account number </label>
  <div class="relative mt-2">
    <input tw-input ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600 pr-10" />
    <div class="absolute inset-y-0 flex items-center right-3 text-slate-400 dark:text-slate-600">
      <tw-icon key="question-mark-circle" source="heroicons" />
    </div>
  </div>
</div>`,
  input_with_addon: `<div>
  <label for="company-website" class="block text-sm font-medium"> Company Website </label>
  <div tw-group class="mt-2 last:*:rounded-r-md">
    <span class="select-none py-2 px-3 text-sm text-gray-600 dark:text-gray-400"> http:// </span>
    <input tw-input type="url" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" placeholder="www.example.com" />
  </div>
</div>`,
  input_with_inline_addon: `<div>
  <label for="company-website" class="block text-sm font-medium">Company Website</label>
  <div class="relative mt-2">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-600 dark:text-gray-400 sm:text-sm">http://</span>
    </div>
    <input tw-input type="url" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600 pl-14" />
  </div>
</div>`,
  input_with_inline_leading_and_trailing_addons: `<div>
  <label for="price" class="block text-sm font-medium">Price</label>
  <div class="relative mt-2">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-600 dark:text-gray-400 sm:text-sm">$</span>
    </div>
    <!-- Input -->
    <input tw-input ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600 pl-7 pr-12" />
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <span class="text-gray-600 dark:text-gray-400 sm:text-sm">CAD</span>
    </div>
  </div>
</div>`,
  input_with_inline_leading_dropdown: `<div>
  <label for="phone-number" class="block text-sm font-medium">Phone Number</label>
  <div class="relative mt-2">
    <div class="absolute inset-y-0 left-0 flex items-center">
      <label for="country-code" class="sr-only">Country code</label>
      <select id="country-code" class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 *:dark:text-slate-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm">
        <option>US</option>
        <option>CA</option>
        <option>EU</option>
      </select>
    </div>
    <input tw-input type="tel" ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600 pl-16" />
  </div>
</div>`,
  input_with_leading_icon_and_trailing_button: `<div>
  <label for="candidate" class="block text-sm font-medium"> Search candidates </label>
  <div class="relative mt-2 inline-flex -space-x-px">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <tw-icon size="sm" key="users" source="heroicons" class="text-gray-400 dark:text-gray-600" />
    </div>
    <input tw-input ... class="sm:w-80 pl-10 rounded-r-none rounded-md z-10 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
    <tw-button size="sm" variant="secondary" class="rounded-l-none rounded-md text-gray-700 dark:text-gray-300">
      <tw-icon size="sm" key="bars-arrow-up" source="heroicons" class="text-gray-400 dark:text-gray-600" />
      Sort
    </tw-button>
  </div>
</div>`,
  input_with_shared_borders: `<div>
  <fieldset>
    <legend class="block text-sm font-medium">Card details</legend>
    <div class="mt-2 -space-y-px rounded-md shadow-sm">
      <input tw-input placeholder="Card number" ... class="rounded-none rounded-t-md placeholder:text-gray-400 focus:z-10">
      <div class="flex -space-x-px">
        <input tw-input placeholder="MM / YY" ... class="rounded-none rounded-bl-md placeholder:text-gray-400 focus:z-10">
        <input tw-input placeholder="CVC" ... class="rounded-none rounded-br-md placeholder:text-gray-400 focus:z-10">
      </div>
    </div>
  </fieldset>
  <fieldset class="mt-6">
    <legend class="block text-sm font-medium">Billing address</legend>
    <div class="mt-2 -space-y-px rounded-md shadow-sm">
      <div>
        <label for="country" class="absolute size-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">Country</label>
        <select ... class="rounded-none rounded-t-md border-0 bg-inherit *:dark:text-slate-800 py-1.5 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
          <option>Canada</option>
          <option>United States</option>
          <option>Mexico</option>
        </select>
      </div>
      <input tw-input placeholder="ZIP / Postal code" ... class="rounded-none rounded-b-md placeholder:text-gray-400 focus:z-10">
    </div>
  </fieldset>
</div>`,
  input_with_inset_label: `<div class="relative">
  <label for="name" class="absolute inset-y-0 left-3 top-2 text-xs font-medium"> Name </label>
  <input tw-input id="name" ... class="pt-6 sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
</div>`,
  input_with_inset_labels_and_shared_borders: `<div class="-space-y-px">
  <div class="relative">
    <label for="email7" class="absolute inset-y-0 left-3 top-2 text-xs font-medium"> Email </label>
    <input tw-input type="email" ... class="rounded-b-none pt-6 sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
  </div>
  <div class="relative">
    <label for="password" class="absolute inset-y-0 left-3 top-2 text-xs font-medium"> Password </label>
    <input tw-input type="password" ... class="rounded-t-none pt-6 sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
  </div>
</div>`,
  input_with_overlapping_label: `<div class="relative">
  <label for="name" class="absolute left-1.5 -top-2 px-1.5 bg-slate-50 dark:bg-slate-900 text-xs font-medium"> Name </label>
  <input tw-input ... class="sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
</div>`,
  input_with_pill_shape: `<div>
  <label for="email" class="pl-2.5 block text-sm mb-2 font-medium"> Email </label>
  <input tw-input type="email" ... class="rounded-full sm:w-80 placeholder:text-gray-400 placeholder:dark:text-gray-600" />
</div>`,
  input_with_gray_background_and_bottom_border: `<div>
  <label for="email" class="block text-sm mb-2 font-medium"> Email </label>
  <input tw-input ... class="bg-black/5 dark:bg-white/5 border-0 border-b-2 border-slate-300 dark:border-slate-700 rounded-none ring-0 focus:ring-0 sm:w-80" />
</div>`,
  input_with_keyboard_shortcut: `<div>
  <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
  <div class="relative">
    <input tw-input name="search" id="search"
      class="sm:w-80 pr-10 placeholder:text-gray-400 placeholder:dark:text-gray-600 invalid:ring-red-600/60 focus:invalid:ring-red-600/60" />
    <div class="absolute inset-y-0 right-1.5 flex items-center">
      <tw-icon key="cmd-k" />
    </div>
  </div>
</div>

TypeScript file: // May be your component's or module's file
...
  providers: [
    ...
    provideIconConfig({
      default: {
          'cmd-k': \`<kbd class="ring-1 ring-inset p-1 pb-1 shadow-sm rounded text-sm text-slate-500 ring-slate-200 dark:ring-slate-700"> ⌘K </kbd>\`
        }
      }
    }),
  ],
...`,
}
