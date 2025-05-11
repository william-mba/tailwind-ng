/* eslint-disable @angular-eslint/component-selector */

import { IconDirective } from './../../elements/icon/icon.directive'
import { DropdownComponent } from './../../elements/dropdown/dropdown.component'
import { InputTextDirective } from '../input-text/input-text.directive'
import { fakeAsync, TestBed, tick } from '@angular/core/testing'
import { ComboboxComponent } from './combobox.component'
import { Component, ElementRef, NO_ERRORS_SCHEMA, signal } from '@angular/core'
import { ComboboxModule } from './combobox.module'
import { ButtonComponent } from '../../elements/button/button.component'
import { provideIcon } from '../../elements/icon/icon.directive.config'
import { ComboboxItemComponent } from './combobox-item/combobox-item.component'
import { By } from '@angular/platform-browser'

interface User {
  image?: string
  name: string
  status?: 'active' | 'inactive'
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
  ]
}

describe('ComboboxComponent', () => {
  const SELECTION_LENGTH = 5

  it('should set selection mode', fakeAsync(
    () => {
      @Component({
        selector: 'app-test',
        providers: [
          {
            provide: ElementRef,
            useValue: {
              nativeElement: document.createElement('div'),
            },
          },
          provideIcon({
            map: {
              check: 'fake svg',
              'chevron-up-down': 'fake svg',
              'x-mark': 'fake svg',
            },
          }),
        ],
        imports: [
          ComboboxModule,
          InputTextDirective,
          ButtonComponent,
          IconDirective,
          DropdownComponent,
        ],
        template: `
          <tw-combobox
            #cbb1
            [selectionMode]="selectionMode()"
            class="sm:w-80"
            [(selectedValues)]="selections"
          >
            <!-- Label -->
            <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
            <!-- Input -->
            <input
              tw-input
              (changes)="filter($event)"
              type="text"
              autocomplete="off"
              id="search"
              class="pr-14"
            />
            <!-- Button -->
            <button
              tw-button
              variant="text"
              size="sm"
              [popup]="cbb1"
              class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50"
            >
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
          </tw-combobox>
        `,
        schemas: [NO_ERRORS_SCHEMA],
      })
      class TestComponent {
        users = USERS_STUB()
        selectionMode = signal('single')
        selections = Array.from({ length: 5 }, (_, i) => this.users[i].name)
      }

      const fixture = TestBed.createComponent(TestComponent)
      const combobox = fixture.debugElement.query(By.directive(ComboboxComponent))
        .componentInstance as ComboboxComponent
      fixture.detectChanges()
      tick()
      expect(combobox.selectionMode).toBe('single')
      combobox.selectionMode = 'multi'
      expect(combobox.selectionMode).toBe('multi')
    },
    { flush: true }
  ))

  it('should select multiple items', fakeAsync(
    () => {
      @Component({
        selector: 'app-test',
        providers: [
          {
            provide: ElementRef,
            useValue: {
              nativeElement: document.createElement('div'),
            },
          },
          provideIcon({
            map: {
              check: 'fake svg',
              'chevron-up-down': 'fake svg',
              'x-mark': 'fake svg',
            },
          }),
        ],
        imports: [
          ComboboxModule,
          InputTextDirective,
          ButtonComponent,
          IconDirective,
          DropdownComponent,
        ],
        template: `
          <tw-combobox
            #cbb1
            [selectionMode]="selectionMode()"
            class="sm:w-80"
            [(selectedValues)]="selections"
          >
            <!-- Label -->
            <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
            <!-- Input -->
            <input
              tw-input
              (changes)="filter($event)"
              type="text"
              autocomplete="off"
              id="search"
              class="pr-14"
            />
            <!-- Button -->
            <button
              tw-button
              variant="text"
              size="sm"
              [popup]="cbb1"
              class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50"
            >
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
          </tw-combobox>
        `,
        schemas: [NO_ERRORS_SCHEMA],
      })
      class TestComponent {
        users = USERS_STUB()
        selectionMode = signal('multi')
        selections = Array.from({ length: SELECTION_LENGTH }, (_, i) => this.users[i].name)
      }

      const fixture = TestBed.createComponent(TestComponent)
      const combobox = fixture.debugElement.query(By.directive(ComboboxComponent))
        .componentInstance as ComboboxComponent
      combobox.open()
      combobox.reset()
      fixture.detectChanges()

      const items = fixture.debugElement
        .queryAll(By.directive(ComboboxItemComponent))
        .map((x) => x.componentInstance)
        .slice(-3) as ComboboxItemComponent[]

      items.forEach((item) => {
        expect(item.selected()).toBeFalsy()
        expect(combobox.selectedValues().has(item.value)).toBeFalsy()
      })

      items.forEach((item) => {
        item.select()
      })

      items.forEach((item) => {
        expect(item.selected()).toBeTruthy()
        expect(combobox.selectedValues().has(item.value)).toBeTruthy()
      })
    },
    { flush: true }
  ))

  it('should deselect selected items on multiple selection mode', fakeAsync(
    () => {
      @Component({
        selector: 'app-test',
        providers: [
          {
            provide: ElementRef,
            useValue: {
              nativeElement: document.createElement('div'),
            },
          },
          provideIcon({
            map: {
              check: 'fake svg',
              'chevron-up-down': 'fake svg',
              'x-mark': 'fake svg',
            },
          }),
        ],
        imports: [
          ComboboxModule,
          InputTextDirective,
          ButtonComponent,
          IconDirective,
          DropdownComponent,
        ],
        template: `
          <tw-combobox
            #cbb1
            [selectionMode]="selectionMode()"
            class="sm:w-80"
            [(selectedValues)]="selections"
          >
            <!-- Label -->
            <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
            <!-- Input -->
            <input
              tw-input
              (changes)="filter($event)"
              type="text"
              autocomplete="off"
              id="search"
              class="pr-14"
            />
            <!-- Button -->
            <button
              tw-button
              variant="text"
              size="sm"
              [popup]="cbb1"
              class="focus:- absolute inset-y-0 px-2 right-0 rounded-r-md opacity-50"
            >
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
          </tw-combobox>
        `,
        schemas: [NO_ERRORS_SCHEMA],
      })
      class TestComponent {
        users = USERS_STUB()
        selectionMode = signal('multi')
        selections = Array.from({ length: SELECTION_LENGTH }, (_, i) => this.users[i].name)
      }

      const fixture = TestBed.createComponent(TestComponent)
      const combobox = fixture.debugElement.query(By.directive(ComboboxComponent))
        .componentInstance as ComboboxComponent
      combobox.open()
      combobox.reset()
      fixture.detectChanges()

      const items = fixture.debugElement
        .queryAll(By.directive(ComboboxItemComponent))
        .map((x) => x.componentInstance)
        .slice(-3) as ComboboxItemComponent[]

      items.forEach((item) => {
        expect(item.selected()).toBeFalsy()
        expect(combobox.selectedValues().has(item.value)).toBeFalsy()
      })

      // Select items
      items.forEach((item) => {
        item.select()
      })

      items.forEach((item) => {
        expect(item.selected()).toBeTruthy()
        expect(combobox.selectedValues().has(item.value)).toBeTruthy()
      })

      // Deselect items
      items.forEach((item) => {
        item.select()
      })

      items.forEach((item) => {
        expect(item.selected()).toBeFalsy()
        expect(combobox.selectedValues().has(item.value)).toBeFalsy()
      })
    },
    { flush: true }
  ))
})
