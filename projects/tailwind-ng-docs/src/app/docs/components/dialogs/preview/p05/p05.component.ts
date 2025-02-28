import { Component, effect, inject, signal, viewChild } from '@angular/core';
import { DialogBase, ThemeService } from '@tailwind-ng/core';
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-p05',
  imports: [TwIcon, TwDialog, TwButton],
  template: `
  <button (click)="switchTheme()" tw-button variant="text" size="xs" class="fixed top-4 right-4 z-100 text-gray-700 dark:text-gray-300">
    @if (isDark()) {
     On dark <tw-icon name="moon" size="sm" />
    }
    @else {
     On light <tw-icon name="sun" size="sm" />
    }
  </button>
  <div tw-dialog #dialog [(isOpened)]="opened">
  <div tw-dialog-container>
    <div class="grid gap-3 text-gray-700 dark:text-gray-300 text-pretty text-center sm:text-start">
      <h1 class="font-bold text-2xl mb-3 text-gray-800 dark:text-gray-200">
        Install Angular
      </h1>
      <!-- Scrollable content -->
      <div class="grid gap-2 pr-2 overflow-y-auto overscroll-contain max-h-72">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200">
          Develop across all platforms
        </h2>
        <p>
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <h2 class="font-semibold mt-3 text-xl text-gray-800 dark:text-gray-200">
          Speed & Performance
        </h2>
        <p>
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
        <h2 class="font-semibold mt-3 text-xl text-gray-800 dark:text-gray-200">
          Incredible tooling
        </h2>
        <p>
          Build features quickly with simple, declarative templates. Extend the template language with your own
          components and use a wide array of existing components. Get immediate Angular-specific help and feedback
          with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather
          than trying to make the code work.
        </p>
        <h2 class="font-semibold mt-3 text-xl text-gray-800 dark:text-gray-200">
          Loved by millions
        </h2>
        <p>
          From prototype through global deployment, Angular delivers the productivity and scalable infrastructure
          that supports Google's largest applications.
        </p>
        <h2 class="font-semibold mt-3 text-xl text-gray-800 dark:text-gray-200">
          What is Angular?
        </h2>
        <p>
          Angular is a platform that makes it easy to build applications with the web. Angular combines declarative
          templates, dependency injection, end to end tooling, and integrated best practices to solve development
          challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
        </p>
        <h2 class="font-semibold mt-3 text-xl text-gray-800 dark:text-gray-200">
          Architecture overview
        </h2>
        <p>
          Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is
          itself written in TypeScript. It implements core and optional functionality as a set of TypeScript
          libraries that you import into your apps.
        </p>
        <p>
          The basic building blocks of an Angular application are NgModules, which provide a compilation context for
          components. NgModules collect related code into functional sets; an Angular app is defined by a set of
          NgModules. An app always has at least a root module that enables bootstrapping, and typically has many
          more feature modules.
        </p>
        <p>
          Components define views, which are sets of screen elements that Angular can choose among and modify
          according to your program logic and data. Every app has at least a root component.
        </p>
        <p>
          Components use services, which provide specific functionality not directly related to views. Service
          providers can be injected into components as dependencies, making your code modular, reusable, and
          efficient.
        </p>
        <p>
          Both components and services are simply classes, with decorators that mark their type and provide metadata
          that tells Angular how to use them.
        </p>
        <p>
          The metadata for a component class associates it with a template that defines a view. A template combines
          ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before
          rendering it for display.
        </p>
        <p>
          The metadata for a service class provides the information Angular needs to make it available to components
          through Dependency Injection (DI).
        </p>
        <p>
          An app's components typically define many views, arranged hierarchically. Angular provides the Router
          service to help you define navigation paths among views. The router provides sophisticated in-browser
          navigational capabilities.
        </p>
      </div>
    </div>
    <!-- Dialog actions -->
    <div class="flex flex-col gap-4 sm:flex-row-reverse">
      <button tw-button class="w-full sm:w-fit" (click)="dialog.close()">Install</button>
      <button tw-button variant="secondary" class="w-full sm:w-fit">Cancel</button>
    </div>
  </div>
  </div>`,
})
export class P05Component {
  dialog = viewChild.required(DialogBase);
  opened = signal(true);
  protected readonly theme = inject(ThemeService);
  isDark = signal(this.theme.isDark);
  switchTheme() {
    this.theme.toggle();
    this.isDark.set(this.theme.isDark);
  }


  constructor() {
    effect(() => {
      if (!this.opened()) {
        setTimeout(() => this.dialog().open(), 1000);
      }
    });
  }
}
