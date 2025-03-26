/* eslint-disable @angular-eslint/component-selector */

import { IconDirective } from './../../elements/icon/icon.directive';
import { DropdownComponent } from './../../elements/dropdown/dropdown.component';
import { InputTextDirective } from '../input-text/input-text.directive';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ComboboxComponent } from './combobox.component';
import { Component, computed, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { ComboboxModule } from './combobox.module';
import { ButtonComponent } from '../../elements/button/button.component';
import { provideIcon } from '../../elements/icon/icon.directive.config';
import { ComboboxItemComponent } from './combobox-item/combobox-item.component';
import { isCombobox, Popup } from '@tailwind-ng/core';

interface User {
	image?: string;
	name: string;
	status?: 'active' | 'inactive';
}

export const USERS_STUB = (): User[] => {
	return [
		{
			name: 'Elizabeth Martinez',
			status: 'inactive',
		},
		{
			name: 'David Rodriguez',
			status: 'inactive',
		},
		{
			name: 'Susan Wilson',
			status: 'active',
		},
		{
			name: 'Courtney Henry',
			status: 'inactive',
		},
		{
			name: 'Tom Cook',
			status: 'active',
		},
		{
			name: 'Charles Thomas',
			status: 'active',
		},
		{
			name: 'Mary Taylor',
			status: 'inactive',
		},
		{
			name: 'Christopher Moore',
			status: 'active',
		},
		{
			name: 'Lindsay Walton',
			status: 'inactive',
		},
		{
			name: 'James Williams',
			status: 'active',
		},
		{
			name: 'Linda Jones',
			status: 'active',
		},
		{
			name: 'Barbara Garcia',
			status: 'inactive',
		},
		{
			name: 'Whitney Francis',
			status: 'active',
		},
		{
			name: 'Leonard Krasner',
			status: 'active',
		},
		{
			name: 'Floyd Miles',
			status: 'active',
		},
		{
			name: 'Emily Selman',
			status: 'inactive',
		},
		{
			name: 'Kristin Watson',
			status: 'active',
		},
		{
			name: 'Emma Dorsey',
			status: 'active',
		},
		{
			name: 'John Doe',
			status: 'active',
		},
		{
			name: 'Jane Smith',
			status: 'inactive',
		},
		{
			name: 'Patricia Brown',
			status: 'active',
		},
		{
			name: 'Ronald Rodriguez',
			status: 'inactive',
		},
		{
			name: 'Anthony Lewis',
			status: 'active',
		},
	];
};

describe('ComboboxComponent', () => {
	it('should have an input text', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('single');

				isSingleMode = computed(() => this.selectionMode() === 'single');

				protected toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			fixture.detectChanges();
			tick();
			expect(combobox.input()).toBeTruthy();
		},
		{ flush: true },
	));

	it('should have a dropdown', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('single');

				isSingleMode = computed(() => this.selectionMode() === 'single');

				protected toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			fixture.detectChanges();
			tick();
			expect(combobox.dropdown()).toBeTruthy();
		},
		{ flush: true },
	));

	it('should set selection mode', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('single');

				isSingleMode = computed(() => this.selectionMode() === 'single');

				protected toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			fixture.detectChanges();
			tick();
			expect(combobox.selectionMode).toBe('single');
			combobox.selectionMode = 'multi';
			expect(combobox.selectionMode).toBe('multi');
		},
		{ flush: true },
	));

	it('should set default selected values on multiselection mode', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('single');

				isSingleMode = computed(() => this.selectionMode() === 'single');

				protected toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			fixture.detectChanges();
			tick();
			expect(combobox.selectedValues()).toEqual(testComponent.selections);
		},
		{ flush: true },
	));

	it('should set a default input value on single selection mode', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('single');

				protected toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Elizabeth Martinez']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			combobox.open();
			fixture.detectChanges();

			const item = testComponent.comboboxItems()[0];
			expect(combobox.input().value).toBe(item.value());
			expect(combobox.selectedValues().has(item.value())).toBeTrue();
			expect(testComponent.selections.has(item.value())).toBeTrue();
		},
		{ flush: true },
	));

	it('should set active element', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('multi');

				toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			fixture.detectChanges();

			expect(combobox.activeElement).toBeFalsy();
			expect(combobox.isOpened()).toBeFalse();

			combobox.open();
			fixture.detectChanges();
			tick(500);
			const item = testComponent.comboboxItems()[0];
			item.select();
			fixture.detectChanges();
			tick(500);

			expect(combobox.isOpened()).toBeTrue();
			expect(combobox.activeElement).toEqual(item.nativeElement);
		},
		{ flush: true },
	));

	it('should reset', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('multi');

				toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			combobox.open();
			fixture.detectChanges();

			expect(combobox.selectedValues().size).toBe(6);
			expect(testComponent.selections.size).toBe(6);
			expect(combobox.selectedValues()).toEqual(testComponent.selections);

			combobox.reset();

			expect(combobox.selectedValues().size).toBe(0);
			expect(testComponent.selections.size).toBe(0);
			expect(combobox.selectedValues()).toEqual(testComponent.selections);
		},
		{ flush: true },
	));

	it('should select a item', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('multi');

				toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			combobox.open();
			combobox.reset();
			fixture.detectChanges();

			const item = testComponent.comboboxItems()[0];

			expect(item.selected()).toBeFalse();
			expect(combobox.selectedValues().has(item.value())).toBeFalse();
			expect(testComponent.selections.has(item.value())).toBeFalse();

			item.select();

			expect(item.selected()).toBeTrue();
			expect(combobox.selectedValues().has(item.value())).toBeTrue();
			expect(testComponent.selections.has(item.value())).toBeTrue();
		},
		{ flush: true },
	));

	it('should select multiple items', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('multi');

				toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			combobox.open();
			combobox.reset();
			fixture.detectChanges();

			const items = testComponent.comboboxItems().slice(0, 3);

			items.forEach((item) => {
				expect(item.selected()).toBeFalse();
				expect(combobox.selectedValues().has(item.value())).toBeFalse();
				expect(testComponent.selections.has(item.value())).toBeFalse();
			});

			items.forEach((item) => {
				item.select();
			});

			items.forEach((item) => {
				expect(item.selected()).toBeTrue();
				expect(combobox.selectedValues().has(item.value())).toBeTrue();
				expect(testComponent.selections.has(item.value())).toBeTrue();
			});
		},
		{ flush: true },
	));

	it('should deselect selected items on multiple selection mode', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('multi');

				toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			combobox.open();
			combobox.reset();
			fixture.detectChanges();

			const items = testComponent.comboboxItems().slice(0, 3);

			items.forEach((item) => {
				expect(item.selected()).toBeFalse();
				expect(combobox.selectedValues().has(item.value())).toBeFalse();
				expect(testComponent.selections.has(item.value())).toBeFalse();
			});

			// Select items
			items.forEach((item) => {
				item.select();
			});

			items.forEach((item) => {
				expect(item.selected()).toBeTrue();
				expect(combobox.selectedValues().has(item.value())).toBeTrue();
				expect(testComponent.selections.has(item.value())).toBeTrue();
			});

			// Deselect items
			items.forEach((item) => {
				item.select();
			});

			items.forEach((item) => {
				expect(item.selected()).toBeFalse();
				expect(combobox.selectedValues().has(item.value())).toBeFalse();
				expect(testComponent.selections.has(item.value())).toBeFalse();
			});
		},
		{ flush: true },
	));

	it('should not deselect a selected item on single selection mode', fakeAsync(
		() => {
			@Component({
				selector: 'app-test',
				providers: [
					{
						provide: ElementRef,
						useValue: { nativeElement: document.createElement('div') },
					},
					provideIcon({
						map: {
							check: 'fake svg',
							'chevron-up-down': 'fake svg',
							'x-mark': 'fake svg',
						},
					}),
				],
				imports: [ComboboxModule, InputTextDirective, ButtonComponent, IconDirective, DropdownComponent],
				template: `
					<div tw-combobox #cbb1 [selectionMode]="selectionMode()" class="sm:w-80" [(selectedValues)]="selections">
						<!-- Label -->
						<label for="search" class="block text-sm mb-2 font-medium">Quick search</label>
						<!-- Input -->
						<input tw-input (changes)="filter($event)" type="text" autocomplete="off" id="search" class="pr-14" />
						<!-- Button -->
						<button tw-button variant="text" size="sm" [popup]="cbb1" class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50">
							@if (cbb1.isOpened()) {
								<tw-icon (click)="reset(cbb1)" size="sm" name="x-mark" />
							}
							<tw-icon name="chevron-up-down" (click)="cbb1.toggle()" />
						</button>
						<!-- Dropdown -->
						<tw-dropdown (closed)="reset()" class="w-full max-h-56">
							@for (user of users; track user.name) {
								<div tw-combobox-item #item [value]="user.name">
									@if (item.selected()) {
										<tw-icon class="my-auto absolute right-3" name="check" />
									}
									<span>{{ user.name }}</span>
								</div>
							}
						</tw-dropdown>
					</div>
				`,
			})
			class TestComponent {
				combobox = viewChild.required(ComboboxComponent);
				comboboxItems = viewChildren(ComboboxItemComponent);
				users = USERS_STUB();
				selectionMode = signal('single');

				toggleMode(): void {
					this.selectionMode.update((mode) => (mode === 'single' ? 'multi' : 'single'));
				}

				private checkMatch = (x: string, y: string) => {
					x = x.toLocaleLowerCase();
					y = y.toLocaleLowerCase();
					return x.includes(y) || x.startsWith(y);
				};

				filter(value: string): void {
					this.users = USERS_STUB().filter((x) => this.checkMatch(x.name, value));
				}

				reset(popup?: Popup): void {
					setTimeout(() => {
						this.users = USERS_STUB();
					}, 100);

					if (isCombobox(popup)) {
						popup.reset();
					}
				}

				selections = new Set<string>([]);
			}

			const fixture = TestBed.createComponent(TestComponent);
			const testComponent = fixture.componentInstance;
			const combobox = testComponent.combobox();
			combobox.open();
			fixture.detectChanges();

			const item = testComponent.comboboxItems()[0];
			expect(item.selected()).toBeFalse();
			expect(combobox.selectedValues().has(item.value())).toBeFalse();
			expect(testComponent.selections.has(item.value())).toBeFalse();

			// First selection
			item.select();
			expect(item.selected()).toBeTrue();
			expect(combobox.selectedValues().has(item.value())).toBeTrue();
			expect(testComponent.selections.has(item.value())).toBeTrue();

			// Second selection
			item.select();
			expect(item.selected()).toBeTrue();
			expect(combobox.selectedValues().has(item.value())).toBeTrue();
			expect(testComponent.selections.has(item.value())).toBeTrue();
		},
		{ flush: true },
	));
});
