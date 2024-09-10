import { Component } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styles: ``
})
export class InputDemoComponent {
  inputWithLabelAndHelpText: string = `<div>
  <label for="email" class="block text-sm mb-2 font-medium leading-6 text-gray-900 dark:text-gray-100">
    Email
  </label>
  <!-- NGxTW Input -->
  <tw-input type="email" id="email" name="email" placeholder="you@example.com" />
  <div class="opacity-50 text-sm mt-2">We'll only use this for spam.</div>
</div>`;
  inputWithInlineLeadingAddonAndTrailingDropdown: string = `<div>
  <label for="price" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Price</label>
  <div class="relative mt-2 rounded-md shadow-sm">
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

  inputWithLabel: string = `<div>
  <label for="email" class="block text-sm mb-2 font-medium leading-6 text-gray-900 dark:text-gray-100">
    Email
  </label>
  <!-- NGxTW Input -->
  <tw-input type="email" id="email" name="email" placeholder="you@example.com" />
</div>`;
  inputWithValidationError: string = `<div>
  <label for="email" class="block text-sm mb-2 font-medium leading-6 text-gray-900 dark:text-gray-100">
    Email
  </label>
  <div class="relative">
    <!-- NGxTW Input -->
    <tw-input #email type="email" id="email" name="email" class="pr-10" placeholder="you@example.com" value="williammba" />
    <!-- Error Icon -->
    <tw-icon *ngIf="email.invalid" source="heroicons" name="exclamation-circle" class="absolute inset-y-0 my-auto right-3 text-red-600/80" />
  </div>
  <!-- Error Message -->
  <div *ngIf="email.invalid" class="text-sm mt-2 text-red-600/90">Not a valid email address.</div>
</div>`;
  forbiddenNameValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log('control.value', control.value);
      const regex = new RegExp(name, 'i');
      const forbidden = regex.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
