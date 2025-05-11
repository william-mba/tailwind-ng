import { Component, effect, inject, signal, viewChild } from '@angular/core'
import { DialogBase, ThemeService } from '@tailwind-ng/core'
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng'

@Component({
  selector: 'app-p07',
  imports: [TwIcon, TwDialog, TwButton],
  template: `
    <button
      (click)="switchTheme()"
      tw-button
      variant="text"
      size="xs"
      class="fixed top-4 right-4 z-100 text-gray-700 dark:text-gray-300"
    >
      @if (theme.isDark) {
        <tw-icon name="sun" size="sm" />
      } @else {
        <tw-icon name="moon" size="sm" />
      }
    </button>
    <div tw-dialog #dialog [(isOpened)]="opened">
      <div tw-dialog-container class="sm:max-w-sm">
        <!-- Dialog content -->
        <div class="grid gap-3 text-center">
          <tw-icon
            name="check"
            class="text-green-600 bg-green-600/10 rounded-full mx-auto p-3"
          />
          <div class="text-pretty text-sm text-gray-600 dark:text-gray-400">
            <h1 class="font-bold text-lg mb-3 text-gray-700 dark:text-gray-300">
              Payment successful
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur amet labore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <!-- Dialog actions -->
        <button tw-button class="w-full" (click)="dialog.close()">
          Go back to dashboard
        </button>
      </div>
    </div>

    <div
      class="overflow-x-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center justify-items-center items-end border border-gray-950/10 dark:border-white/10 dark:bg-gray-800/40 mb-10 mt-1 max-sm:px-2 p-6 py-10 mx-auto rounded-md"
    >
      <button
        tw-button
        variant="secondary"
        (click)="dialog02.toggle()"
        [popup]="dialog02"
      >
        View bottom-left notification dialog
      </button>
      <button
        tw-button
        variant="secondary"
        (click)="dialog03.toggle()"
        [popup]="dialog03"
      >
        View bottom-right notification dialog
      </button>
    </div>
    <!-- bottom Left Dialog -->
    <div tw-dialog #dialog02 [isModal]="false" class="inset- bottom-0 left-0">
      <!-- Dialog container -->
      <div tw-dialog-container class="sm:max-w-sm">
        <!-- Dialog content -->
        <div class="grid gap-3 text-center sm:text-left">
          <h1
            class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300"
          >
            Payment successful
          </h1>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <!-- Dialog actions -->
        <tw-icon
          (click)="dialog02.close()"
          source="heroicons"
          name="x-mark"
          class="absolute top-5 right-5 cursor-pointer"
        />
      </div>
    </div>

    <!-- bottom Right Dialog -->
    <div
      tw-dialog
      #dialog03
      [isModal]="false"
      [autoClose]="true"
      class="inset- bottom-0 right-0"
    >
      <!-- Dialog container -->
      <div
        tw-dialog-container
        class="sm:max-w-sm place-self-end opacity-100 not-in-open:translate-y-200 starting:translate-y-200 in-open:translate-y-0"
      >
        <!-- Dialog content -->
        <div class="grid gap-3 text-center sm:text-left">
          <h1
            class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300"
          >
            Payment successful
          </h1>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <!-- Dialog actions -->
        <tw-icon
          (click)="dialog03.close()"
          source="heroicons"
          name="x-mark"
          class="absolute top-5 right-5 cursor-pointer"
        />
      </div>
    </div>
    <!-- Nested dialogs -->
  `,
})
export class P07Component {
  dialog = viewChild.required(DialogBase)
  opened = signal(true)
  protected readonly theme = inject(ThemeService)
  switchTheme() {
    this.theme.toggle()
  }

  constructor() {
    effect(() => {
      if (!this.opened()) {
        setTimeout(() => this.dialog().open(), 1000)
      }
    })
  }
}
