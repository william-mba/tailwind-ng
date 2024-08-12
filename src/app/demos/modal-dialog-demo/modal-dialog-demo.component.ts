import { Component } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'app-modal-dialog-demo',
  templateUrl: './modal-dialog-demo.component.html'
})
export class ModalDialogDemoComponent {

  open(key: number) {
    return this.dialogsStates[key];
  };

  dialogsStates: Record<number, boolean> = {};

  toggleDialog(key: number) {
    this.dialogsStates[key] = !this.dialogsStates[key];

    timer(1000).pipe(concatMap(() => {
      return scheduled([this.dialogsStates[key]], asyncScheduler)
    })).subscribe(() => this.dialogsStates[key] = true)
  }

  close(key: number) {
    this.dialogsStates[key] = false;
  }

  simpleNotificationDialog = `<tw-dialog [open]="open" (click)="close()">
  <tw-dialog-panel>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Out of stock
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 text-pretty">
        The item in your cart is no longer available
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button>OK</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  simpleDialogWithIcon = `<tw-dialog [open]="open" (click)="close()">
  <tw-dialog-panel>
    <tw-dialog-icon className="text-red-600">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Deactivate account
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed.
        This action cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="bg-red-600">Deactivate</tw-button>
    <tw-button variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  simpleDialogWithGrayFooter = `<tw-dialog [open]="open" className="divide-y divide-gray-200 dark:divide-neutral-900">
  <tw-dialog-panel>
    <tw-dialog-icon className="text-red-600">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Deactivate account
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions className="bg-neutral-100 dark:bg-neutral-900/20">
    <tw-button className="bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close()" variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  centeredDialogWithSingleAction = `<tw-dialog [open]="open" (click)="close()">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Payment successful
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="w-full">Go back to dashboard</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  centeredDialogWithWideButton = `<tw-dialog [open]="open" (click)="close()">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Payment successful
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="w-full">Deactivate</tw-button>
    <tw-button variant="secondary" className="w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  simpleDialogWithDismissButton = `<tw-dialog [open]="open">
  <tw-dialog-panel>
    <tw-dialog-icon className="text-red-600">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Deactivate account
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
      </p>
    </tw-dialog-content>
    <!-- Dismiss button -->
    <tw-button [icon]="true" variant="text" size="lg" className="hidden sm:flex absolute top-3 right-3" (click)="...()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="bg-red-600" (click)="...()">Deactivate</tw-button>
    <tw-button variant="secondary" (click)="close()">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  dialogScrollable = `<tw-dialog [open]="open">
  <tw-dialog-panel className="pb-0 sm:- gap-0">
    <tw-dialog-content className="pb-0 h-96">
      <h1 class="text-2xl border-none pb-3" id="modal-title">
        Install Angular
      </h1>
      <div class="overflow-scroll overscroll-contain p-0 pr-2 text-pretty text-gray-700 dark:text-gray-200">
        <h3 class="text-base font-bold leading-6 my-3 mt-0">Develop across all platforms</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <h3 class="text-base font-bold leading-6 my-3">Speed &amp; Performance</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
        <!-- ... -->
      </div>
    </tw-dialog-content>
    <!-- Dismiss button -->
    <tw-button [icon]="true" size="lg" variant="text" className="hidden sm:flex absolute top-3 right-3" (click)="close()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="...">Install</tw-button>
    <tw-button (click)="close()" variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleNotificationDialog = `<tw-dialog [open]="open" (click)="close()" className="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Out of stock </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 text-pretty"> The item in your cart is no longer available </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="rounded-3xl">OK</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleDialogWithIcon = `<tw-dialog [open]="open" (click)="close()" className="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-icon className="text-red-600">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Deactivate account </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="bg-red-600 rounded-full">Deactivate</tw-button>
    <tw-button variant="secondary" className="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleDialogWithGrayFooter = `<tw-dialog [open]="open" className="rounded-3xl divide-y divide-gray-200 dark:divide-neutral-900">
  <tw-dialog-panel>
    <tw-dialog-icon className="text-red-600">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Deactivate account </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed.
        This action cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions className="bg-neutral-100 dark:bg-neutral-900/20">
    <tw-button className="rounded-full bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close()" variant="secondary" className="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedCenteredDialogWithSingleAction = `<tw-dialog [open]="open" (click)="close()" className="rounded-3xl">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Payment successful </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="rounded-full w-full">Go back to dashboard</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedCenteredDialogWithWideButton = `<tw-dialog [open]="open" (click)="close()" className="rounded-3xl">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Payment successful </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="rounded-full w-full">Deactivate</tw-button>
    <tw-button variant="secondary" className="rounded-full w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleDialogWithDismissButton = `<tw-dialog [open]="open" className="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-icon className="text-red-600">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Deactivate account </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
      </p>
    </tw-dialog-content>
    <tw-button [icon]="true" variant="text" size="lg" className="hidden sm:block absolute top-3 right-3" (click)="...">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="..." className="rounded-full bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close(12)" variant="secondary" className="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedDialogScrollable = `<tw-dialog [open]="open" className="rounded-3xl">
  <tw-dialog-panel className="pb-0 sm:- gap-0">
    <tw-dialog-content className="pb-0 h-96">
      <h1 class="text-2xl border-none pb-3" id="modal-title"> Install Angular </h1>
      <div class="overflow-scroll overscroll-contain p-0 pr-2 text-pretty text-gray-700 dark:text-gray-200">
        <h3 class="text-base font-bold leading-6 my-3 mt-0">Develop across all platforms</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <h3 class="text-base font-bold leading-6 my-3">Speed &amp; Performance</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
        <!-- ... -->
      </div>
    </tw-dialog-content>
    <tw-button [icon]="true" variant="text" size="lg" className="hidden sm:block absolute top-3 right-3" (click)="...">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="..." className="rounded-full">Install</tw-button>
    <tw-button (click)="close()" variant="secondary" className="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;
}
