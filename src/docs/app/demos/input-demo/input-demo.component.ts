import { Component } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styles: ``
})
export class InputDemoComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }

  forbiddenNameValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log('control.value', control.value);
      const regex = new RegExp(name, 'i');
      const forbidden = regex.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  input_with_label_and_help_text: string = `<div>
  <label for="email" class="block text-sm mb-2 font-medium text-gray-900 dark:text-gray-100">
    Email
  </label>
  <!-- NGxTW Input -->
  <tw-input type="email" id="email" name="email" placeholder="you@example.com" />
  <div class="opacity-50 text-sm mt-2">We'll only use this for spam.</div>
</div>`;
  input_with_inline_leading_addon_and_trailing_dropdown: string = `<div>
  <label for="price" class="block text-sm font-medium text-gray-900 dark:text-gray-100">Price</label>
  <div class="relative mt-2">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
    <!-- NGxTW Input -->
    <tw-input id="price" name="price" class="pl-7 pr-16" />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency"
        class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>`;

  input_with_label: string = `<div>
  <label for="email" class="block text-sm mb-2 font-medium text-gray-900 dark:text-gray-100">
    Email
  </label>
  <!-- NGxTW Input -->
  <tw-input type="email" id="email" name="email" placeholder="you@example.com" />
</div>`;
  input_with_validation_error: string = `<div>
  <label for="email" class="block text-sm mb-2 font-medium text-gray-900 dark:text-gray-100">
    Email
  </label>
  <div class="relative">
    <!-- NGxTW Input -->
    <tw-input #email type="email" id="email" name="email" class="pr-10" placeholder="you@example.com" value="williammba" />
    <!-- Error Icon -->
    <tw-icon *ngIf="email.invalid" source="heroicons" name="exclamation-circle" class="absolute inset-y-0 my-auto right-3 text-red-600/80" />
  </div>
  <!-- Error Message -->
  <div *ngIf="email.invalid" class="text-sm mt-2 text-red-600/90 dark:text-red-500/90">Not a valid email address.</div>
</div>`;
  input_with_disable_state: string = `<div>
  <label for="email4" class="block text-sm mb-2 font-medium text-gray-900 dark:text-gray-100">
    Email
  </label>
  <!-- NGxTW Input -->
  <tw-input [disabled]="true" class="... disabled:cursor-not-allowed" type="email" id="email" name="email" placeholder="you@example.com" />
</div>`;
  input_without_label: string = `<tw-input type="email" name="email" class="w-64 sm:w-80" placeholder="you@example.com" />`;
  input_with_corner_hint: string = `<div>
  <div class="flex justify-between text-sm mb-2">
    <label for="email" class="font-medium text-gray-900 dark:text-gray-100">
      Email
    </label>
    <span class="opacity-70">Optional</span>
  </div>
  <!-- NGxTW Input -->
  <tw-input type="email" id="email" name="email" placeholder="you@example.com" class="w-64 sm:w-80" />
</div>`;
  input_with_leading_icon: string = `<div>
  <label for="email" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
    Email
  </label>
  <div class="relative mt-2">
    <tw-icon source="heroicons" name="envelope" class="absolute inset-y-0 my-auto left-3 text-gray-400 dark:text-gray-500" />
    <tw-input type="email" id="email" name="email" class="w-64 sm:w-80 pl-10" placeholder="you@example.com" />
  </div>
</div>`;
  input_with_trailing_icon: string = `<div>
  <label for="account-number" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
    Account number
  </label>
  <div class="relative mt-2">
    <tw-icon source="heroicons" name="question-mark-circle" class="absolute inset-y-0 my-auto right-3 text-gray-400 dark:text-gray-500" />
    <tw-input id="account-number" name="account-number" class="w-64 sm:w-80 pr-10" placeholder="000-00-0000" />
  </div>
</div>`;
  input_with_addon: string = `<div>
  <label for="company-website" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
    Company Website
  </label>
  <div class="mt-2 inline-flex divide-x divide-black/10 dark:divide-white/10 ring-1 ring-black/10 dark:ring-white/10 rounded-md">
    <!-- Add-on -->
    <span class="select-none py-1.5 px-3 text-neutral-500"> http:// </span>
    <div>
      <!-- NGxTW Input -->
      <tw-input type="url" id="company-website" name="company-website" class="w-48 sm:w-64 ring-0 rounded-l-none rounded-md" placeholder="www.example.com" />
    </div>
  </div>
</div>`;
  input_with_inline_addon: string = `<div>
  <label for="company-website" class="block text-sm font-medium text-gray-900 dark:text-gray-100">Company Website</label>
  <div class="relative mt-2">
    <!-- Add-on -->
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">http://</span>
    </div>
    <!-- NGxTW Input -->
    <tw-input type="url" id="company-website" name="company-website" class="w-64 sm:w-80 pl-14" placeholder="www.example.com" />
  </div>
</div>`;
  input_with_inline_leading_and_trailing_addons: string = `<div>
  <label for="price" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
    Price
  </label>
  <div class="relative mt-2">
    <!-- Leading add-on -->
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
    <!-- NGxTW Input -->
    <tw-input id="price" name="price" class="w-64 sm:w-80 pl-7 pr-12" placeholder="you@example.com" />
    <!-- Trailing add-on -->
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <span class="text-gray-500 sm:text-sm">CAD</span>
    </div>
  </div>
</div>`;
  input_with_inline_leading_dropdown: string = `<div>
  <label for="phone-number" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
    Phone Number
  </label>
  <div class="relative mt-2">
    <!-- Leading dropdown -->
    <div class="absolute inset-y-0 left-0 flex items-center">
      <label for="country-code" class="sr-only">Country code</label>
      <select id="country-code" name="country" class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option>US</option>
        <option>CA</option>
        <option>EU</option>
      </select>
    </div>
    <!-- NGxTW Input -->
    <tw-input type="tel" id="phone-number" name="phone-number" class="w-64 sm:w-80 pl-16" placeholder="+1 (514) 256-9580" />
  </div>
</div>`;
  input_with_leading_icon_and_trailing_button: string = `<div>
  <label for="candidate" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
    Search candidates
  </label>
  <div class="relative mt-2 inline-flex divide-x divide-black/10 dark:divide-white/10 ring-1 ring-black/10 dark:ring-white/10 rounded-md">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <tw-icon source="heroicons" name="users" class="text-gray-500 sm:text-sm" />
    </div>
    <tw-input id="candidate" name="candidate" class="w-48 sm:w-64 pl-10 ring-0 rounded-r-none rounded-md" placeholder="Jane Doe" />
    <tw-button variant="secondary" class="rounded-l-none rounded-md ring-0">
      <tw-icon source="heroicons" name="bars-arrow-up" />
      Sort
    </tw-button>
  </div>
</div>`;
  input_with_shared_borders: string = ``;
  input_with_inset_label: string = ``;
  input_with_inset_labels_and_shared_borders: string = ``;
  input_with_overlapping_label: string = ``;
  input_with_pill_shape: string = ``;
  input_with_gray_background_and_bottom_border: string = ``;
  input_with_keyboard_shortcut: string = ``;
}
