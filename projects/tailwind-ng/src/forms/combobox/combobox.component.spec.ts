/* eslint-disable @angular-eslint/component-selector */
import { By } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { IconDirective } from './../../elements/icon/icon.directive';
import { DropdownComponent } from './../../elements/dropdown/dropdown.component';
import { InputTextDirective } from '../input-text/input-text.directive';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ComboboxComponent } from './combobox.component';
import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { ComboboxModule } from './combobox.module';
import { ButtonComponent } from '../../elements/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideIcon } from '../../elements/icon/icon.directive.config';
import { ComboboxItemComponent } from './combobox-item/combobox-item.component';

interface User {
  image?: string;
  name: string;
  status?: 'active' | 'inactive';
}

export const USERS_STUB = (): User[] => {
  return [
    {
      name: 'Elizabeth Martinez',
      status: 'inactive'
    },
    {
      name: 'David Rodriguez',
      status: 'inactive'
    },
    {
      name: 'Susan Wilson',
      status: 'active'
    },
    {
      name: 'Courtney Henry',
      status: 'inactive'
    },
    {
      name: 'Tom Cook',
      status: 'active'
    },
    {
      name: 'Charles Thomas',
      status: 'active'
    },
    {
      name: 'Mary Taylor',
      status: 'inactive'
    },
    {
      name: 'Christopher Moore',
      status: 'active'
    },
    {
      name: 'Lindsay Walton',
      status: 'inactive'
    },
    {
      name: 'James Williams',
      status: 'active'
    },
    {
      name: 'Linda Jones',
      status: 'active'
    },
    {
      name: 'Barbara Garcia',
      status: 'inactive'
    },
    {
      name: 'Whitney Francis',
      status: 'active'
    },
    {
      name: 'Leonard Krasner',
      status: 'active'
    },
    {
      name: 'Floyd Miles',
      status: 'active'
    },
    {
      name: 'Emily Selman',
      status: 'inactive'
    },
    {
      name: 'Kristin Watson',
      status: 'active'
    },
    {
      name: 'Emma Dorsey',
      status: 'active'
    },
    {
      name: 'John Doe',
      status: 'active'
    },
    {
      name: 'Jane Smith',
      status: 'inactive'
    },
    {
      name: 'Patricia Brown',
      status: 'active'
    },
    {
      name: 'Ronald Rodriguez',
      status: 'inactive'
    },
    {
      name: 'Anthony Lewis',
      status: 'active'
    },
  ]
};

describe('ComboboxComponent', () => {

  it('should create', fakeAsync(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIcon({
          map: {
            'check': 'fake svg',
            'chevron-up-down': 'fake svg',
            'x-mark': 'fake svg'
          }
        })
      ],
    });

    @Component({
      selector: 'app-test',
      imports: [
        NgIf,
        ReactiveFormsModule,
        ComboboxModule,
        InputTextDirective,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `<div tw-combobox #cbb1 class="sm:w-80">
      <!-- Label -->
      <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
      <!-- Input -->
      <input tw-input #input="twInputText" type="text" autocomplete="off" id="search"
        class="pr-14" />
      <!-- Button -->
      <button tw-button variant="text" size="sm" (click)="cbb1.toggle()" [popup]="cbb1"
        class="focus:- absolute inset-y-0 gap-0.5 px-2 right-0 rounded-r-md opacity-50">
        <tw-icon *ngIf="cbb1.opened() && input.isValid" (click)="reset()" size="sm" name="x-mark" />
        <tw-icon name="chevron-up-down" />
      </button>
      <!-- Dropdown -->
      <tw-dropdown (closed)="reset()" class="w-full overflow-y-auto max-h-56">
        @for (user of users1; track user.name) {
        <div tw-combobox-item #item [value]="user.name">
          <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check" />
          <span>{{ user.name }}</span>
        </div>
        }
      </tw-dropdown>
    </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      valueSelected = '';
      opened = false;
      isMulti = false;
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0];
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    const combobox = testComponent.combobox();

    fixture.autoDetectChanges();

    expect(combobox).toBeTruthy();
    expect(combobox.input()).toBeTruthy();
    expect(combobox.opened()).toBeFalse();
    expect(combobox.selectMode()).toBe('single');
  }, { flush: true }));

  it('should toggle', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIcon({
          map: {
            'check-thin': 'fake svg',
            'chevron-up-down': 'fake svg',
            'x-mark': 'fake svg'
          }
        })
      ],
    });

    @Component({
      selector: 'app-test',
      imports: [
        NgIf,
        ReactiveFormsModule,
        ComboboxModule,
        InputTextDirective,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `<div tw-combobox #cbb1 class="sm:w-80">
      <!-- Label -->
      <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
      <!-- Input -->
      <input tw-input #input="twInputText" type="text" autocomplete="off" id="search"
        class="pr-14" />
      <!-- Button -->
      <button tw-button variant="text" size="sm" (click)="cbb1.toggle()" [popup]="cbb1"
        class="focus:- absolute inset-y-0 gap-0.5 px-2 right-0 rounded-r-md opacity-50">
        <tw-icon *ngIf="cbb1.opened() && input.isValid" (click)="reset()" size="sm" name="x-mark" />
        <tw-icon name="chevron-up-down" />
      </button>
      <!-- Dropdown -->
      <tw-dropdown (closed)="reset()" class="w-full overflow-y-auto max-h-56">
        @for (user of users1; track user.name) {
        <div tw-combobox-item #item [value]="user.name">
          <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check" />
          <span>{{ user.name }}</span>
        </div>
        }
      </tw-dropdown>
    </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      valueSelected = '';
      users = USERS_STUB();
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();

    expect(combobox.opened()).toBeFalse();
    combobox.toggle();
    expect(combobox.opened()).toBeTrue();
    combobox.toggle();
    expect(combobox.opened()).toBeFalse();
    combobox.toggle();
    expect(combobox.opened()).toBeTrue();
  });

  it('should handle single selection', fakeAsync(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIcon({
          map: {
            'check-thin': 'fake svg',
            'chevron-up-down': 'fake svg',
            'x-mark': 'fake svg'
          }
        })
      ],
    });

    @Component({
      selector: 'app-test',
      imports: [
        NgIf,
        ReactiveFormsModule,
        ComboboxModule,
        InputTextDirective,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `<div tw-combobox #cbb1 class="sm:w-80">
      <!-- Label -->
      <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
      <!-- Input -->
      <input tw-input #input="twInputText" type="text" autocomplete="off" id="search"
        class="pr-14" />
      <!-- Button -->
      <button tw-button variant="text" size="sm" (click)="cbb1.toggle()" [popup]="cbb1"
        class="focus:- absolute inset-y-0 gap-0.5 px-2 right-0 rounded-r-md opacity-50">
        <tw-icon *ngIf="cbb1.opened() && input.isValid" (click)="reset()" size="sm" name="x-mark" />
        <tw-icon name="chevron-up-down" />
      </button>
      <!-- Dropdown -->
      <tw-dropdown (closed)="reset()" class="w-full overflow-y-auto max-h-56">
        @for (user of users1; track user.name) {
        <div tw-combobox-item #item [value]="user.name">
          <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check" />
          <span>{{ user.name }}</span>
        </div>
        }
      </tw-dropdown>
    </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      users = USERS_STUB();
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    tick();

    const combobox = testComponent.combobox();

    // Combobox is closed by default
    expect(combobox.opened()).toBeFalse();
    combobox.toggle();

    // Initial state when combobox is opened for the first time
    expect(combobox.opened()).toBeTrue();
    expect(combobox.input().value).toBe('');
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;
    expect(input.value).toBe('');
    expect(combobox.opened()).toBeFalse();
    expect(combobox.input().isValid).toBeTrue();

    // Second selection
    const item1 = testComponent.comboboxItems()[1];
    expect(item1.isInsideCombobox).toBeFalse();

    item1.nativeElement.click();

    expect(item1.isInsideCombobox).toBeTrue();
    expect(combobox.input().value).toBe(item1.value());
    expect(input.value).toBe(item1.value);
    expect(combobox.opened()).toBeFalse();
    expect(combobox.input().isValid).toBeTrue();
    // Selected item should remain selected when clicking on it again
    item1.nativeElement.click();
    expect(item1.isInsideCombobox).toBeTrue();
    expect(combobox.input().value).toBe(item1.value());
    expect(input.value).toBe(item1.value());
    expect(combobox.input().isValid).toBeTrue();
  }, { flush: true }));

  it('should handle multiselection', fakeAsync(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIcon({
          map: {
            'check': 'fake svg',
            'chevron-up-down': 'fake svg',
            'x-mark': 'fake svg'
          }
        })
      ],
    });

    @Component({
      selector: 'app-test',
      imports: [
        NgIf,
        ReactiveFormsModule,
        ComboboxModule,
        InputTextDirective,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #cbb1 class="sm:w-80" selectionMode="multiple">
        <!-- Label -->
        <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
        <!-- Input -->
        <input tw-input #input="twInputText" type="text" autocomplete="off" id="search"
          class="pr-14" />
        <!-- Button -->
        <button tw-button variant="text" size="sm" (click)="cbb1.toggle()" [popup]="cbb1"
          class="focus:- absolute inset-y-0 gap-0.5 px-2 right-0 rounded-r-md opacity-50">
          <tw-icon *ngIf="cbb1.opened() && input.isValid" size="sm" name="x-mark" />
          <tw-icon name="chevron-up-down" />
        </button>
        <!-- Dropdown -->
        <tw-dropdown class="w-full overflow-y-auto max-h-56">
          @for (user of users1; track user.name) {
          <div tw-combobox-item #item [value]="user.name">
            <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check" />
            <span>{{ user.name }}</span>
          </div>
          }
        </tw-dropdown>
      </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected = '';
      users = USERS_STUB();
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();

    // Combobox is closed by default
    expect(combobox.opened()).toBeFalse();
    combobox.toggle();

    // Initial state when combobox is opened for the first time
    expect(combobox.opened()).toBeTrue();
    expect(combobox.selectMode()).toBe('multiple');
    expect(combobox.input().value).toBe('');
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;
    expect(input.value).toBe('');

    // Combobox should remain opened
    expect(combobox.opened()).toBeTrue();
    expect(combobox.input().isValid).toBeTrue();
  }, { flush: true }));
  it('should reset', fakeAsync(() => {
    @Component({
      selector: 'app-test',
      standalone: true,
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIcon({
          map: {
            'check': 'fake svg',
            'chevron-up-down': 'fake svg',
            'x-mark': 'fake svg'
          }
        })
      ],
      imports: [
        NgIf,
        ReactiveFormsModule,
        ComboboxModule,
        InputTextDirective,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #cbb1 class="sm:w-80" selectionMode="multiple">
        <!-- Label -->
        <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
        <!-- Input -->
        <input tw-input #input="twInputText" type="text" autocomplete="off" id="search"
          class="pr-14" />
        <!-- Button -->
        <button tw-button variant="text" size="sm" (click)="cbb1.toggle()" [popup]="cbb1"
          class="focus:- absolute inset-y-0 gap-0.5 px-2 right-0 rounded-r-md opacity-50">
          <tw-icon *ngIf="cbb1.opened() && input.isValid" (click)="reset()" size="sm" name="x-mark" />
          <tw-icon name="chevron-up-down" />
        </button>
        <!-- Dropdown -->
        <tw-dropdown (closed)="reset()" class="w-full overflow-y-auto max-h-56">
          @for (user of users1; track user.name) {
          <div tw-combobox-item #item [value]="user.name">
            <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check" />
            <span>{{ user.name }}</span>
          </div>
          }
        </tw-dropdown>
      </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected = '';
      users = USERS_STUB();
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();
    tick();

    const combobox = testComponent.combobox();
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;

    // Combobox is closed by default
    expect(combobox.opened()).toBeFalse();
    combobox.toggle();
    expect(combobox.opened()).toBeTrue();

    // Before reset
    expect(combobox.opened()).toBeTrue();
    expect(combobox.input().isValid).toBeTrue();
    combobox.reset();
    const expectedValue = '';

    // After reset
    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.input().value).toBe(expectedValue);
    expect(input.value).toBe(expectedValue);
  }, { flush: true }));
});


