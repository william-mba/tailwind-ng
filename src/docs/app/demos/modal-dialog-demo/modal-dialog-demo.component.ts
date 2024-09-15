import { Component } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'app-modal-dialog-demo',
  templateUrl: './modal-dialog-demo.component.html'
})
export class ModalDialogDemoComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }
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

  simpleNotificationDialog = `<tw-dialog [opened]="open" (click)="close()">
  <tw-dialog-panel>
    <tw-dialog-content>
      <tw-h4 class="my-0">Out of stock</tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400 text-pretty">
        The item in your cart is no longer available
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button>OK</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  simpleDialogWithIcon = `<tw-dialog [opened]="open" (click)="close()">
  <tw-dialog-panel>
    <tw-dialog-icon class="text-red-600">
      <tw-icon source="heroicons" name="exclamation-triangle" />
    </tw-dialog-icon>
    <tw-dialog-content>
      <tw-h4 class="my-0">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed.
        This action cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="bg-red-600">Deactivate</tw-button>
    <tw-button variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  simpleDialogWithGrayFooter = `<tw-dialog [opened]="open">
  <tw-dialog-panel>
    <tw-dialog-icon class="text-red-600">
      <tw-icon source="heroicons" name="exclamation-triangle" />
    </tw-dialog-icon>
    <tw-dialog-content>
      <tw-h4 class="my-0">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions class="bg-neutral-100 dark:bg-neutral-900/20 border-t border-gray-200 dark:border-neutral-900">
    <tw-button class="bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close()" variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  centeredDialogWithSingleAction = `<tw-dialog [opened]="open" (click)="close()">
  <tw-dialog-panel class="sm:-">
    <tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon source="heroicons" name="check-circle" />
    </tw-dialog-icon>
    <tw-dialog-content class="sm:-">
      <tw-h4 class="my-0">
        Payment successful
      </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="w-full">Go back to dashboard</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  centeredDialogWithWideButton = `<tw-dialog [opened]="open" (click)="close()">
  <tw-dialog-panel class="sm:-">
    <tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon source="heroicons" name="check-circle" />
    </tw-dialog-icon>
    <tw-dialog-content class="sm:-">
      <tw-h4 class="my-0">
        Payment successful
      </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="w-full">Deactivate</tw-button>
    <tw-button variant="secondary" class="w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  simpleDialogWithDismissButton = `<tw-dialog [opened]="open">
  <tw-dialog-panel>
    <tw-dialog-icon class="text-red-600">
      <tw-icon source="heroicons" name="exclamation-triangle" />
    </tw-dialog-icon>
    <tw-dialog-content>
      <tw-h4 class="my-0">
        Deactivate account
      </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
      </p>
    </tw-dialog-content>
    <!-- Dismiss button -->
    <tw-button [icon]="true" variant="text" size="lg" class="hidden sm:flex absolute top-3 right-3" (click)="...()">
      <tw-icon source="heroicons" name="x-mark" />
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="bg-red-600" (click)="...()">Deactivate</tw-button>
    <tw-button variant="secondary" (click)="close()">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  dialogScrollable = `<tw-dialog [opened]="open">
  <tw-dialog-panel class="pb-0 sm:- gap-0">
    <tw-dialog-content class="pb-0 h-96">
      <tw-h3 class="mt-0 font-medium"> Install Angular </tw-h3>
      <div class="overflow-scroll overscroll-contain p-0 pr-2 text-pretty text-gray-800 dark:text-gray-200">
        <tw-h4>Develop across all platforms</tw-h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <tw-h4>Speed &amp; Performance</tw-h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
        <!-- ... -->
      </div>
    </tw-dialog-content>
    <!-- Dismiss button -->
    <tw-button [icon]="true" size="lg" variant="text" class="hidden sm:flex absolute top-3 right-3" (click)="close()">
      <tw-icon source="heroicons" name="x-mark" />
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="...">Install</tw-button>
    <tw-button (click)="close()" variant="secondary">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleNotificationDialog = `<tw-dialog [opened]="open" (click)="close()" class="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-content>
      <tw-h4 class="my-0"> Out of stock </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400 text-pretty"> The item in your cart is no longer available </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="rounded-3xl">OK</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleDialogWithIcon = `<tw-dialog [opened]="open" (click)="close()" class="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-icon class="text-red-600">
      <tw-icon source="heroicons" name="exclamation-triangle" />
    </tw-dialog-icon>
    <tw-dialog-content>
      <tw-h4 class="my-0"> Deactivate account </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
        cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="bg-red-600 rounded-full">Deactivate</tw-button>
    <tw-button variant="secondary" class="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleDialogWithGrayFooter = `<tw-dialog [opened]="open" class="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-icon class="text-red-600">
      <tw-icon source="heroicons" name="exclamation-triangle" />
    </tw-dialog-icon>
    <tw-dialog-content>
      <tw-h4 class="my-0"> Deactivate account </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed.
        This action cannot be undone.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions class="bg-neutral-100 dark:bg-neutral-900/20 border-t border-gray-200 dark:border-neutral-900">
    <tw-button class="rounded-full bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close()" variant="secondary" class="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedCenteredDialogWithSingleAction = `<tw-dialog [opened]="open" (click)="close()" class="rounded-3xl">
  <tw-dialog-panel class="sm:-">
    <tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon source="heroicons" name="check-circle" />
    </tw-dialog-icon>
    <tw-dialog-content class="sm:-">
      <tw-h4 class="my-0"> Payment successful </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="rounded-full w-full">Go back to dashboard</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedCenteredDialogWithWideButton = `<tw-dialog [opened]="open" (click)="close()" class="rounded-3xl">
  <tw-dialog-panel class="sm:-">
    <tw-dialog-icon class="text-green-600 bg-green-600/15">
      <tw-icon source="heroicons" name="check-circle" />
    </tw-dialog-icon>
    <tw-dialog-content class="sm:-">
      <tw-h4 class="my-0"> Payment successful </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste
        dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
      </p>
    </tw-dialog-content>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button class="rounded-full w-full">Deactivate</tw-button>
    <tw-button variant="secondary" class="rounded-full w-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedSimpleDialogWithDismissButton = `<tw-dialog [opened]="open" class="rounded-3xl">
  <tw-dialog-panel>
    <tw-dialog-icon class="text-red-600">
      <tw-icon source="heroicons" name="exclamation-triangle" />
    </tw-dialog-icon>
    <tw-dialog-content>
      <tw-h4 class="my-0"> Deactivate account </tw-h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
      </p>
    </tw-dialog-content>
    <tw-button [icon]="true" variant="text" size="lg" class="hidden sm:block absolute top-3 right-3" (click)="...">
      <tw-icon source="heroicons" name="x-mark" />
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="..." class="rounded-full bg-red-600">Deactivate</tw-button>
    <tw-button (click)="close(12)" variant="secondary" class="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;

  roundedDialogScrollable = `<tw-dialog [opened]="open" class="rounded-3xl">
  <tw-dialog-panel class="pb-0 sm:- gap-0">
    <tw-dialog-content class="pb-0 h-96">
      <tw-h4 class="mt-0 font-medium"> Install Angular </tw-h4>
      <div class="overflow-scroll overscroll-contain p-0 pr-2 text-pretty text-gray-800 dark:text-gray-200">
        <tw-h4>Develop across all platforms</tw-h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Learn one way to build applications with Angular and reuse your code and abilities to build apps for any
          deployment target. For web, mobile web, native mobile and native desktop.
        </p>
        <tw-h4>Speed &amp; Performance</tw-h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and
          server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
        <!-- ... -->
      </div>
    </tw-dialog-content>
    <tw-button [icon]="true" variant="text" size="lg" class="hidden sm:block absolute top-3 right-3" (click)="...">
      <tw-icon source="heroicons" name="x-mark" />
    </tw-button>
  </tw-dialog-panel>
  <tw-dialog-actions>
    <tw-button (click)="..." class="rounded-full">Install</tw-button>
    <tw-button (click)="close()" variant="secondary" class="rounded-full">Cancel</tw-button>
  </tw-dialog-actions>
</tw-dialog>`;
}
