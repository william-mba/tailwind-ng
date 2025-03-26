import { Component, effect, inject, signal, viewChild } from '@angular/core';
import { DialogBase, ThemeService } from '@tailwind-ng/core';
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-p02',
	imports: [TwIcon, TwDialog, TwButton],
	template: `
		<button (click)="switchTheme()" tw-button variant="text" size="xs" class="fixed top-4 right-4 z-100 text-gray-700 dark:text-gray-300">
			@if (isDark()) {
				On dark
				<tw-icon name="moon" size="sm" />
			} @else {
				On light
				<tw-icon name="sun" size="sm" />
			}
		</button>
		<div tw-dialog #dialog [(isOpened)]="opened">
			<div tw-dialog-container class="sm:max-w-sm">
				<!-- Dialog content -->
				<div class="grid gap-3 text-center">
					<tw-icon name="check" class="text-green-600 bg-green-600/10 rounded-full p-3 mx-auto" />
					<div class="text-pretty text-sm text-gray-600 dark:text-gray-400">
						<h1 class="font-bold text-lg mb-3 text-gray-700 dark:text-gray-300">Payment successful</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</div>
				<!-- Dialog actions -->
				<div class="flex flex-col gap-4 sm:flex-row-reverse">
					<button tw-button class="w-full" (click)="dialog.close()">Deactivate</button>
					<button tw-button variant="secondary" class="w-full">Cancel</button>
				</div>
			</div>
		</div>
	`,
})
export class P02Component {
	dialog = viewChild.required(DialogBase);
	opened = signal(true);
	protected readonly theme = inject(ThemeService);
	isDark = signal(this.theme.isDark);
	switchTheme() {
		requestAnimationFrame(() => {
			this.theme.toggle();
			this.isDark.set(this.theme.isDark);
		});
	}

	constructor() {
		effect(() => {
			if (!this.opened()) {
				setTimeout(() => this.dialog().open(), 1000);
			}
		});
	}
}
