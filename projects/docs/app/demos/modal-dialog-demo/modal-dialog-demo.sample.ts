export const MODAL_DIALOG_DEMO_SAMPLE = {
  quick_start_guide: `// Import from ngxtw
import { ModalDialogModule } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    ModalDialogModule // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<div tw-dialog #modalDialog>
    <div tw-dialog-panel>
      <div tw-dialog-content>
        <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">Out of stock</tw-h4>
        <p class="text-sm text-slate-600 dark:text-slate-400 text-pretty">
          The item in your cart is no longer available.
        </p>
      </div>
    </div>
    <div tw-dialog-actions>
      <button tw-button (click)="modalDialog.close()">OK</button>
    </div>
  </div>
  <!-- Trigger button -->
  <button tw-button (click)="modalDialog.open()">Add to cart</button>\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<!-- See the border radius applied to the dialog's container and it button -->
<div tw-dialog class="rounded-3xl" #roundedNotificationDialog>
  <div tw-dialog-panel>
    ...
  </div>
  <div tw-dialog-actions>
    <button tw-button class="rounded-3xl" (click)="roundedNotificationDialog.close()">OK</button>
  </div>
</div>`,
  component_instance_customization: `// Import from ngxtw
import { ModalDialog } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#modalDialog'
  template: \`<div tw-dialog #modalDialog class="rounded-3xl">...\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('modalDialog') modalDialog!: ModalDialog;

  exampleMethod() {
    this.modalDialog.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideModalDialogConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideModalDialogConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { ModalDialogConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<ModalDialogConfig>('ModalDialog', {
      ... // Set your customization here
    });
  }

}`,
  simpleNotificationDialog: `<div tw-dialog #notificationDialog>
  <div tw-dialog-panel>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">Out of stock</tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400 text-pretty">
        The item in your cart is no longer available.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <button tw-button (click)="notificationDialog.close()" class="w-full sm:w-fit">OK</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="notificationDialog.open()">Button text</button>`,

  simpleDialogWithIcon: `<!-- With the click event used on the top level dialog's element,
the dialog will be closed when the user clicks anywhere on the screen. -->
<div tw-dialog #dialogWithIcon (click)="dialogWithIcon.close()">
  <div tw-dialog-panel>
    <div tw-dialog-icon class="text-red-600">
      <tw-icon key="exclamation-triangle" source="heroicons" />
    </div>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200"> Deactivate account </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <button tw-button tw-button class="bg-red-600 w-full sm:w-fit">Deactivate</button>
    <button tw-button variant="secondary" class="w-full sm:w-fit">Cancel</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="dialogWithIcon.toggle()">Open dialog</button>`,

  simpleDialogWithGrayFooter: `<!-- This dialog can only be closed when the cancel button is clicked. -->
<div tw-dialog #dialogWithGrayFooter>
  <div tw-dialog-panel>
    <div tw-dialog-icon class="text-red-600">
      <tw-icon key="exclamation-triangle" source="heroicons" />
    </div>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
  </div>
  <div tw-dialog-actions
    class="bg-neutral-100 dark:bg-neutral-900/20 border-t border-slate-200 dark:border-neutral-900">
    <button tw-button class="w-full sm:w-fit bg-red-600">Deactivate</button>
    <!-- Cancel button -->
    <button tw-button class="w-full sm:w-fit" (click)="dialogWithGrayFooter.close()" variant="secondary">Cancel</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="dialogWithGrayFooter.toggle()">Open dialog</button>`,

  centeredDialogWithSingleAction: `<!-- With the click event used on the top level dialog's element,
the dialog will be closed when the user clicks anywhere on the screen. -->
<div tw-dialog #dialogWithSingleAction (click)="dialogWithSingleAction.close()">
  <div tw-dialog-panel class="sm:grid">
    <div tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon key="check-circle" source="heroicons" />
    </div>
    <div tw-dialog-content class="sm:text-center">
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Payment successful
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <button tw-button class="w-full">Go back to dashboard</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="dialogWithSingleAction.toggle()">Open dialog</button>`,

  centeredDialogWithWideButton: `<!-- Users can close this dialog by clicking the deactivate button or the cancel button. -->
<div tw-dialog #dialogWithWideButton>
  <div tw-dialog-panel class="sm:grid">
    <div tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon key="check-circle" source="heroicons" />
    </div>
    <div tw-dialog-content class="sm:text-center">
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Payment successful
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi
        vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <!-- Actions that close the dialog -->
    <button tw-button (click)="dialogWithWideButton.close()" class="w-full">Deactivate</button>
    <button tw-button (click)="dialogWithWideButton.close()" variant="secondary" class="w-full">Cancel</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="dialogWithWideButton.toggle()">Open dialog</button>`,

  simpleDialogWithDismissButton: `<!-- The dialog will be closed when the dismiss or cancel button is clicked. -->
<div tw-dialog #dialogWithDismissButton>
  <div tw-dialog-panel>
    <div tw-dialog-icon class="text-red-600">
      <tw-icon key="exclamation-triangle" source="heroicons" />
    </div>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
    <!-- Dismiss button -->
    <button variant="text" size="lg" (click)="dialogWithDismissButton.close()" class="absolute top-3 right-3 hidden sm:flex">
      <tw-icon key="x-mark" source="heroicons" />
    </button>
  </div>
  <div tw-dialog-actions>
    <button tw-button class="w-full sm:w-fit bg-red-600">Deactivate</button>
    <button tw-button class="w-full sm:w-fit" variant="secondary" (click)="dialogWithDismissButton.close()">Cancel</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="dialogWithDismissButton.toggle()">Open dialog</button>`,

  dialogScrollable: ` <!-- This dialog can only be closed when the dismiss, cancel or install button is clicked. -->
<div tw-dialog #dialogWithScrollableContent>
  <div tw-dialog-panel>
    <div tw-dialog-content class="pb-0 h-96">
      <tw-h3 class="font-medium mt-0">
        Install Angular
      </tw-h3>
      <div class="overflow-scroll overscroll-contain p-0 pr-2 text-pretty text-slate-800 dark:text-slate-200">
        <tw-h4>Develop across all platforms</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <tw-h4>Speed &amp, Performance</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
        <tw-h4>Incredible tooling</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Build features quickly with simple, declarative templates. Extend the template language with your own
          components and use a wide array of existing components. Get immediate Angular-specific help and feedback
          with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than
          trying to make the code work.
        </p>
        <tw-h4>Loved by millions</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          From prototype through global deployment, Angular delivers the productivity and scalable infrastructure
          that supports Google's largest applications.
        </p>
        <tw-h4>What is Angular?</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Angular is a platform that makes it easy to build applications with the web. Angular combines declarative
          templates, dependency injection, end to end tooling, and integrated best practices to solve development
          challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
        </p>
        <tw-h4>Architecture overview</tw-h4>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is
          itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that
          you import into your apps.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          The basic building blocks of an Angular application are NgModules, which provide a compilation context for
          components. NgModules collect related code into functional sets, an Angular app is defined by a set of
          NgModules. An app always has at least a root module that enables bootstrapping, and typically has many
          more feature modules.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Components define views, which are sets of screen elements that Angular can choose among and modify
          according to your program logic and data. Every app has at least a root component.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Components use services, which provide specific functionality not directly related to views. Service
          providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Both components and services are simply classes, with decorators that mark their type and provide metadata
          that tells Angular how to use them.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          The metadata for a component class associates it with a template that defines a view. A template combines
          ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before
          rendering it for display.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          The metadata for a service class provides the information Angular needs to make it available to components
          through Dependency Injection (DI).
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          An app's components typically define many views, arranged hierarchically. Angular provides the Router
          service to help you define navigation paths among views. The router provides sophisticated in-browser navigational
          capabilities.
        </p>
      </div>
    </div>
    <!-- Dismiss button -->
    <button tw-button size="lg" variant="text" (click)="dialogWithScrollableContent.close()" class="hidden sm:flex absolute top-3 right-3">
      <tw-icon source="heroicons" key="x-mark" />
    </button>
  </div>
  <!-- Actions that close the dialog -->
  <div tw-dialog-actions>
    <button tw-button class="w-full sm:w-fit" (click)="dialogWithScrollableContent.close()">Install</button>
    <button tw-button class="w-full sm:w-fit" (click)="dialogWithScrollableContent.close()" variant="secondary">Cancel</button>
  </div>
</div>
<!-- Trigger button -->
<button tw-button variant="secondary" (click)="dialogWithScrollableContent.toggle()">Open dialog</button>`,

  roundedSimpleNotificationDialog: `<div tw-dialog #roundedNotificationDialog class="rounded-3xl">
  <div tw-dialog-panel>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">Out of stock</tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400 text-pretty">
        The item in your cart is no longer available.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <button tw-button (click)="roundedNotificationDialog.close()" class="w-full sm:w-fit rounded-3xl">OK</button>
  </div>
</div>`,

  roundedSimpleDialogWithIcon: `<div tw-dialog #roundedDialogWithIcon (click)="roundedDialogWithIcon.close()" class="rounded-3xl">
  <div tw-dialog-panel>
    <div tw-dialog-icon class="text-red-600">
      <tw-icon key="exclamation-triangle" source="heroicons" />
    </div>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200"> Deactivate account </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <button tw-button tw-button class="w-full sm:w-fit bg-red-600 rounded-full">Deactivate</button>
    <button tw-button variant="secondary" class="w-full sm:w-fit rounded-full">Cancel</button>
  </div>
</div>`,

  roundedSimpleDialogWithGrayFooter: `<div tw-dialog #roundedDialogWithGrayFooter class="rounded-3xl">
  <div tw-dialog-panel>
    <div tw-dialog-icon class="text-red-600">
      <tw-icon key="exclamation-triangle" source="heroicons" />
    </div>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
  </div>
  <div tw-dialog-actions
    class="bg-neutral-100 dark:bg-neutral-900/20 border-t border-slate-200 dark:border-neutral-900">
    <button tw-button class="w-full sm:w-fit bg-red-600 rounded-3xl">Deactivate</button>
    <button tw-button class="w-full sm:w-fit rounded-3xl" (click)="roundedDialogWithGrayFooter.close()" variant="secondary">Cancel</button>
  </div>
</div>`,

  roundedCenteredDialogWithSingleAction: `<div tw-dialog #roundedDialogWithSingleAction (click)="roundedDialogWithSingleAction.close()" class="rounded-3xl">
  <div tw-dialog-panel class="sm:grid">
    <div tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon key="check-circle" source="heroicons" />
    </div>
    <div tw-dialog-content class="sm:text-center">
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Payment successful
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div tw-dialog-actions>
    <button tw-button class="w-full rounded-full">Go back to dashboard</button>
  </div>
</div>`,

  roundedCenteredDialogWithWideButton: `<tw-dialog [opened]="open" (click)="close()" class="rounded-3xl">
  <tw-dialog-panel class="sm:-">
    <tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon source="heroicons" key="check-circle" />
    </tw-dialog-icon>
    <tw-dialog-content class="sm:-">
      <tw-h4 class="my-0"> Payment successful </tw-h4>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="rounded-full w-full">Deactivate</tw-button>
    <tw-button variant="secondary" class="rounded-full w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`,

  roundedSimpleDialogWithDismissButton: `<div tw-dialog #roundedDialogWithDismissButton class="rounded-3xl">
  <div tw-dialog-panel>
    <div tw-dialog-icon class="text-red-600">
      <tw-icon key="exclamation-triangle" source="heroicons" />
    </div>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
    <button variant="text" size="lg" (click)="roundedDialogWithDismissButton.close()"
      class="absolute top-3 right-3 hidden sm:flex">
      <tw-icon source="heroicons" key="x-mark" />
    </button>
  </div>
  <div tw-dialog-actions>
    <button tw-button class="bg-red-600 rounded-full w-full sm:w-fit">Deactivate</button>
    <button tw-button variant="secondary" class="rounded-full w-full sm:w-fit" (click)="roundedDialogWithDismissButton.close()">Cancel</button>
  </div>
</div>`,

  roundedDialogScrollable: `<div tw-dialog #roundedDialogWithScrollableContent class="rounded-3xl">
  <div tw-dialog-panel>
    <div tw-dialog-content class="pb-0 h-96">
      <tw-h3 class="font-medium mt-0">
        Install Angular
      </tw-h3>
      <div class="overflow-scroll overscroll-contain p-0 pr-2 text-pretty text-slate-800 dark:text-slate-200">
        <tw-h4>Develop across all platforms</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <tw-h4>Speed &amp, Performance</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building
          data models on RxJS, Immutable.js or another push-model.
        </p>
        <tw-h4>Incredible tooling</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Build features quickly with simple, declarative templates. Extend the template language with your own
          components and use a wide array of existing components. Get immediate Angular-specific help and feedback
          with
          nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than
          trying to make the code work.
        </p>
        <tw-h4>Loved by millions</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          From prototype through global deployment, Angular delivers the productivity and scalable infrastructure
          that
          supports Google's largest applications.
        </p>
        <tw-h4>What is Angular?</tw-h4>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Angular is a platform that makes it easy to build applications with the web. Angular combines declarative
          templates, dependency injection, end to end tooling, and integrated best practices to solve development
          challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
        </p>
        <tw-h4>Architecture overview</tw-h4>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is
          itself
          written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that
          you
          import into your apps.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          The basic building blocks of an Angular application are NgModules, which provide a compilation context for
          components. NgModules collect related code into functional sets, an Angular app is defined by a set of
          NgModules. An app always has at least a root module that enables bootstrapping, and typically has many
          more
          feature modules.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Components define views, which are sets of screen elements that Angular can choose among and modify
          according
          to your program logic and data. Every app has at least a root component.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Components use services, which provide specific functionality not directly related to views. Service
          providers
          can be injected into components as dependencies, making your code modular, reusable, and efficient.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          Both components and services are simply classes, with decorators that mark their type and provide metadata
          that
          tells Angular how to use them.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          The metadata for a component class associates it with a template that defines a view. A template combines
          ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before
          rendering
          it for display.
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          The metadata for a service class provides the information Angular needs to make it available to components
          through Dependency Injection (DI).
        </p>
        <p class="text-sm my-3 text-slate-700 dark:text-slate-300">
          An app's components typically define many views, arranged hierarchically. Angular provides the Router
          service
          to help you define navigation paths among views. The router provides sophisticated in-browser navigational
          capabilities.
        </p>
      </div>
    </div>
    <button tw-button size="lg" variant="text" (click)="roundedDialogWithScrollableContent.close()"
      class="hidden sm:flex absolute top-3 right-3">
      <tw-icon source="heroicons" key="x-mark" />
    </button>
  </div>
  <div tw-dialog-actions>
    <button tw-button class="w-full sm:w-fit rounded-full" (click)="roundedDialogWithScrollableContent.close()">Install</button>
    <button tw-button class="w-full sm:w-fit rounded-full" (click)="roundedDialogWithScrollableContent.close()" variant="secondary">Cancel</button>
  </div>
</div>`,
  bottomLeftDialog: `<div tw-dialog [backdrop]="['hidden']" [scrim]="['origin-bottom-left', 'bottom-0', 'left-0', 'w-fit', 'inset-']"
  #bottomLeftDialog>
  <div tw-dialog-panel>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Payment successful
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <button variant="text" size="lg" (click)="bottomLeftDialog.close()" class="absolute top-3 right-3">
      <tw-icon source="heroicons" key="x-mark" />
    </button>
  </div>
</div>`,
  bottomRightDialog: `<!-- See the usage of the dialog's (open) event here.  -->
<div tw-dialog [scrim]="['origin-bottom-right', 'bottom-0', 'right-0', 'w-fit', 'inset-']" [backdrop]="['hidden']"
  #bottomRightDialog (open)="bottomRightDialog.closeAfter(2000)">
  <div tw-dialog-panel>
    <div tw-dialog-content>
      <tw-h4 class="my-0 text-slate-800 dark:text-slate-200">
        Payment successful
      </tw-h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <button variant="text" size="lg" (click)="bottomRightDialog.close()" class="absolute top-3 right-3">
      <tw-icon source="heroicons" key="x-mark" />
    </button>
  </div>
</div>`,
}
