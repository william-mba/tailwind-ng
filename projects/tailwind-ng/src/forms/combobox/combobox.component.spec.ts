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
      template: `
        <div tw-combobox #combobox [isMulti]="isMulti" (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input type="text" id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm" [popup]="combobox"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon name="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <div tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </div>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      valueSelected = '';
      isOpened = false;
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
    expect(combobox.control).toBeTruthy();
    expect(combobox.isValid).toBeFalse();
    expect(combobox.isOpened()).toBeFalse();
    expect(combobox.isMulti).toBeFalse();
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
      template: `
        <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input type="text" id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm" [popup]="combobox"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon name="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check-thin" />
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

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();

    expect(combobox.isOpened()).toBeFalse();
    combobox.toggle();
    expect(combobox.isOpened()).toBeTrue();
    combobox.toggle();
    expect(combobox.isOpened()).toBeFalse();
    combobox.toggle();
    expect(combobox.isOpened()).toBeTrue();
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
      template: `
        <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input type="text" id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm" [popup]="combobox"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon name="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check-thin" />
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

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    tick();

    const combobox = testComponent.combobox();

    // Combobox is closed by default
    expect(combobox.isOpened()).toBeFalse();
    combobox.toggle();

    // Initial state when combobox is opened for the first time
    expect(combobox.isOpened()).toBeTrue();
    expect(combobox.isValid).toBeFalse();
    expect(testComponent.valueSelected).toBe('');
    expect(combobox.control.value).toBe('');
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;
    expect(input.value).toBe('');

    // first selection
    const item0 = testComponent.comboboxItems()[0];
    expect(item0.isSelected).toBeFalse();

    item0.nativeElement.click();

    expect(item0.isSelected).toBeTrue();
    expect(testComponent.valueSelected).toBe(item0.value);
    expect(combobox.control.value).toBe(item0.value);
    expect(input.value).toBe(item0.value);
    expect(combobox.isOpened()).toBeFalse();
    expect(combobox.isValid).toBeTrue();

    // Second selection
    const item1 = testComponent.comboboxItems()[1];
    expect(item1.isSelected).toBeFalse();

    item1.nativeElement.click();

    expect(item1.isSelected).toBeTrue();
    expect(testComponent.valueSelected).toBe(item1.value);
    expect(combobox.control.value).toBe(item1.value);
    expect(input.value).toBe(item1.value);
    expect(combobox.isOpened()).toBeFalse();
    expect(combobox.isValid).toBeTrue();

    // first item selected should be unselected after second selection
    expect(item0.isSelected).toBeFalse();
    expect(testComponent.valueSelected).not.toBe(item0.value);
    expect(combobox.control.value).not.toBe(item0.value);
    expect(input.value).not.toBe(item0.value);

    // Selected item should remain selected when clicking on it again
    item1.nativeElement.click();
    expect(item1.isSelected).toBeTrue();
    expect(testComponent.valueSelected).toBe(item1.value);
    expect(combobox.control.value).toBe(item1.value);
    expect(input.value).toBe(item1.value);
    expect(combobox.isValid).toBeTrue();
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
      template: `
        <div tw-combobox #combobox [isMulti]="true" (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input type="text" id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm" [popup]="combobox"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon name="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check-thin" />
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

      protected saveSelection(value: string[]) {
        this.valueSelected = value.join(', ');
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();

    // Combobox is closed by default
    expect(combobox.isOpened()).toBeFalse();
    combobox.toggle();

    // Initial state when combobox is opened for the first time
    expect(combobox.isOpened()).toBeTrue();
    expect(combobox.isValid).toBeFalse();
    expect(combobox.isMulti).toBeTrue();
    expect(testComponent.valueSelected).toBe('');
    expect(combobox.control.value).toBe('');
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;
    expect(input.value).toBe('');

    const item0 = testComponent.comboboxItems()[0];
    const item1 = testComponent.comboboxItems()[1];
    const item2 = testComponent.comboboxItems()[2];

    // Before selections
    expect(item0.isSelected).toBeFalse();
    expect(item1.isSelected).toBeFalse();
    expect(item2.isSelected).toBeFalse();

    item0.select();
    item1.select();
    item2.select();

    tick();

    // After selections
    expect(item0.isSelected).toBeTrue();
    expect(item1.isSelected).toBeTrue();
    expect(item2.isSelected).toBeTrue();

    let expectedValue = `${item0.value}, ${item1.value}, ${item2.value}`;

    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue + ', ');
    expect(input.value).toBe(expectedValue + ', ');

    // Combobox should remain opened
    expect(combobox.isOpened()).toBeTrue();
    expect(combobox.isValid).toBeTrue();

    // Selected item should be unselected when clicking on it again
    item1.nativeElement.click();
    expectedValue = `${item0.value}, ${item2.value}`;
    expect(item1.isSelected).toBeFalse();
    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue + ', ');
    expect(input.value).toBe(expectedValue + ', ');
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
            'check-thin': 'fake svg',
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
        <div tw-combobox #combobox [isMulti]="true" (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input type="text" id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm" [popup]="combobox"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon *ngIf="combobox.isOpened() && combobox.isValid" (click)="combobox.reset()" size="sm" name="x-mark" />
            <tw-icon name="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <div tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" name="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </div>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value.join(', ');
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();
    tick();

    const combobox = testComponent.combobox();
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;

    // Combobox is closed by default
    expect(combobox.isOpened()).toBeFalse();
    combobox.toggle();
    expect(combobox.isOpened()).toBeTrue();
    expect(combobox.isValid).toBeFalse();

    const item0 = testComponent.comboboxItems()[0];
    const item1 = testComponent.comboboxItems()[1];
    const item2 = testComponent.comboboxItems()[2];

    // Before selections
    expect(item0.isSelected).toBeFalse();
    expect(item1.isSelected).toBeFalse();
    expect(item2.isSelected).toBeFalse();

    item0.select();
    item1.select();
    item2.select();
    tick();

    // After selections
    expect(item0.isSelected).toBeTrue();
    expect(item1.isSelected).toBeTrue();
    expect(item2.isSelected).toBeTrue();

    let expectedValue = `${item0.value}, ${item1.value}, ${item2.value}`;

    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue + ', ');
    expect(input.value).toBe(expectedValue + ', ');

    // Before reset
    expect(combobox.isOpened()).toBeTrue();
    expect(combobox.isValid).toBeTrue();
    combobox.reset();
    expectedValue = '';

    // After reset
    expect(item0.isSelected).toBeFalse();
    expect(item1.isSelected).toBeFalse();
    expect(item2.isSelected).toBeFalse();
    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue);
    expect(input.value).toBe(expectedValue);
  }, { flush: true }));
});


