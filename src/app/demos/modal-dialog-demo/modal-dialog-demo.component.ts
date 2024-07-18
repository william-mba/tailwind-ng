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

  simpleNotificationDialog = `<tw-modal-dialog [open]="open" (click)="close()">
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
</tw-modal-dialog>`;

  simpleDialogWithIcon = `<tw-modal-dialog [open]="open" (click)="close()">
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
  <tw-dialog-actions>
    <tw-button className="bg-red-600">Deactivate</tw-button>
    <tw-button variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  simpleDialogWithGrayFooter = `<tw-modal-dialog [open]="open" className="divide-y divide-gray-200 dark:divide-neutral-900">
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
</tw-modal-dialog>`;

  centeredDialogWithSingleAction = `<tw-modal-dialog [open]="open" (click)="close()">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd"
          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
          clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Payment successful
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions className="sm:-">
    <tw-button className="bg-indigo-700">Go back to dashboard</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  centeredDialogWithWideButton = `<tw-modal-dialog [open]="open" (click)="close()">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd"
          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
          clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title">
        Payment successful
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi
        vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="bg-indigo-700 w-full">Deactivate</tw-button>
    <tw-button variant="secondary" className="w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  simpleDialogWithDismissButton = `<tw-modal-dialog [open]="open">
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
    <tw-button tw-icon variant="text" size="lg" className="hidden sm:flex absolute top-3 right-3" (click)="...()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="bg-red-600" (click)="...()">Deactivate</tw-button>
    <tw-button variant="secondary" (click)="close()">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  dialogScrollable = `<tw-modal-dialog [open]="open">
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
          building
          data models on RxJS, Immutable.js or another push-model.
        </p>
        <h3 class="text-base font-bold leading-6 my-3">Incredible tooling</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Build features quickly with simple, declarative templates. Extend the template language with your own
          components and use a wide array of existing components. Get immediate Angular-specific help and feedback
          with
          nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than
          trying to make the code work.
        </p>
        <h3 class="text-base font-bold leading-6 my-3">Loved by millions</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          From prototype through global deployment, Angular delivers the productivity and scalable infrastructure
          that
          supports Google's largest applications.
        </p>
        <h3 class="text-base font-bold leading-6 my-3">What is Angular?</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Angular is a platform that makes it easy to build applications with the web. Angular combines declarative
          templates, dependency injection, end to end tooling, and integrated best practices to solve development
          challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
        </p>
        <h3 class="text-base font-bold leading-6 my-3">Architecture overview</h3>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is
          itself
          written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that
          you
          import into your apps.
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          The basic building blocks of an Angular application are NgModules, which provide a compilation context for
          components. NgModules collect related code into functional sets; an Angular app is defined by a set of
          NgModules. An app always has at least a root module that enables bootstrapping, and typically has many
          more
          feature modules.
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          Components define views, which are sets of screen elements that Angular can choose among and modify
          according
          to your program logic and data. Every app has at least a root component.
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          Components use services, which provide specific functionality not directly related to views. Service
          providers
          can be injected into components as dependencies, making your code modular, reusable, and efficient.
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          Both components and services are simply classes, with decorators that mark their type and provide metadata
          that
          tells Angular how to use them.
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          The metadata for a component class associates it with a template that defines a view. A template combines
          ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before
          rendering
          it for display.
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          The metadata for a service class provides the information Angular needs to make it available to components
          through Dependency Injection (DI).
        </p>
        <p class="text-sm my-3 text-gray-700 dark:text-gray-300">
          An app's components typically define many views, arranged hierarchically. Angular provides the Router
          service
          to help you define navigation paths among views. The router provides sophisticated in-browser navigational
          capabilities.
        </p>
      </div>
    </tw-dialog-content>
    <!-- Dismiss button -->
    <tw-button tw-icon size="lg" variant="text" className="hidden sm:flex absolute top-3 right-3" (click)="...">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="toggleDialog()">Install</tw-button>
    <tw-button (click)="close()" variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  roundedSimpleNotificationDialog = `<tw-modal-dialog [open]="open" (click)="close()" className="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-content>
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Out of stock </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 text-pretty"> The item in your cart is no longer available </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="rounded-3xl">OK</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  roundedSimpleDialogWithIcon = `<tw-modal-dialog [open]="open" (click)="close()" className="rounded-3xl">
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
</tw-modal-dialog>`;

  roundedSimpleDialogWithGrayFooter = `<tw-modal-dialog [open]="open" className="rounded-3xl divide-y divide-gray-200 dark:divide-neutral-900">
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
  <tw-dialog-actions className="bg-neutral-100 dark:bg-neutral-900/20">
    <tw-button className="rounded-full bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close()" variant="secondary" className="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  roundedCenteredDialogWithSingleAction = `<tw-modal-dialog [open]="open" (click)="close()" className="rounded-3xl">
  <tw-dialog-panel className="sm:-">
    <tw-dialog-icon className="text-green-600 bg-green-600/15">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
      </svg>
    </tw-dialog-icon>
    <tw-dialog-content className="sm:-">
      <h3 class="text-base font-semibold leading-6" id="modal-title"> Payment successful </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="rounded-full w-full bg-indigo-700">Go back to dashboard</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  roundedCenteredDialogWithWideButton = `<tw-modal-dialog [open]="open" (click)="close()" className="rounded-3xl">
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
        dolorem animi
        vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button className="rounded-full w-full bg-indigo-700">Deactivate</tw-button>
    <tw-button variant="secondary" className="rounded-full w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  roundedSimpleDialogWithDismissButton = `<tw-modal-dialog [open]="open" className="rounded-3xl">
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
    <tw-button tw-icon variant="text" size="lg" className="hidden sm:block absolute top-3 right-3" (click)="...">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="..." className="rounded-full bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close(12)" variant="secondary" className="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;

  roundedDialogScrollable = `<tw-modal-dialog [open]="open" className="rounded-3xl">
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
          building
          data models on RxJS, Immutable.js or another push-model.
        </p>
        <!-- ... -->
      </div>
    </tw-dialog-content>
    <tw-button tw-icon variant="text" size="lg" className="hidden sm:block absolute top-3 right-3" (click)="...">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="..." className="rounded-full">Install</tw-button>
    <tw-button (click)="close()" variant="secondary" className="rounded-full border-none">Cancel</tw-button>
  </tw-dialog-actions>
</tw-modal-dialog>`;
}
