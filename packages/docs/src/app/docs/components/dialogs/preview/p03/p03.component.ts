import { Component, effect, inject, signal, viewChild } from '@angular/core'
import { DialogBase, ThemeService } from '@tailwind-ng/core'
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng'

@Component({
  selector: 'app-p03',
  imports: [TwIcon, TwDialog, TwButton],
  template: `
    <button
      (click)="switchTheme()"
      tw-button
      variant="text"
      size="xs"
      class="fixed top-4 right-4 z-100 text-gray-700 dark:text-gray-300"
    >
      @if (isDark()) {
        On dark
        <tw-icon name="moon" size="sm" />
      } @else {
        On light
        <tw-icon name="sun" size="sm" />
      }
    </button>
    <div tw-dialog #dialog [(isOpened)]="opened">
      <div tw-dialog-container (click)="dialog.close()">
        <!-- Dialog content -->
        <div class="grid gap-3 text-center sm:text-left sm:flex sm:flex-row sm:items-start">
          <tw-icon
            name="exclamation-triangle"
            class="text-red-600 bg-red-400/10 rounded-full p-3 mx-auto"
          />
          <div class="text-pretty text-sm text-gray-600 dark:text-gray-400">
            <h1 class="font-bold text-lg mb-3 text-gray-700 dark:text-gray-300">
              Deactivate account
            </h1>
            <p>
              Are you sure you want to deactivate your account? All of your data will be permanently
              removed. This action cannot be undone.
            </p>
          </div>
        </div>
        <!-- Dialog actions -->
        <div class="flex justify-items-end flex-col gap-4 sm:flex-row-reverse">
          <button
            tw-button
            class="w-full sm:w-fit bg-red-600 hover:bg-red-600/90 active:bg-red-700/90 focus:outline-red-600/90"
          >
            Deactivate
          </button>
          <button tw-button class="w-full sm:w-fit" variant="secondary">Cancel</button>
        </div>
      </div>
    </div>
  `,
})
export class P03Component {
  dialog = viewChild.required(DialogBase)
  opened = signal(true)
  protected readonly theme = inject(ThemeService)
  isDark = signal(this.theme.isDark)
  switchTheme() {
    requestAnimationFrame(() => {
      this.theme.toggle()
      this.isDark.set(this.theme.isDark)
    })
  }

  constructor() {
    effect(() => {
      if (!this.opened()) {
        setTimeout(() => this.dialog().open(), 1000)
      }
    })
  }
}
