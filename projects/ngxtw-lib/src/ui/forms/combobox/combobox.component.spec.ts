import { By } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { IconDirective } from './../../elements/icon/icon.directive';
import { DropdownComponent } from './../../elements/dropdown/dropdown.component';
import { InputComponent } from './../input/input.component';
import { TestBed } from '@angular/core/testing';
import { ComboboxComponent } from './combobox.component';
import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { ComboboxModule } from './combobox.module';
import { ButtonComponent } from '../../elements/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideIconConfig } from '../../elements/icon/icon.config';
import { ComboboxItemComponent } from './combobox-item/combobox-item.component';

describe('ComboboxComponent', () => {
  interface User {
    image?: string;
    name: string;
    status?: 'active' | 'inactive';
  }

  const USERS_STUB = (): User[] => {
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

  it('should create', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIconConfig({
          source: {
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
        InputComponent,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #combobox [isOpened]="isOpened" [isMultiselect]="isMultiselect" (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon (click)="combobox.toggle()" key="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown [isOpened]="combobox.isOpened" class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </tw-dropdown>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      valueSelected: string = '';
      isOpened = false;
      isMultiselect = false;
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0];
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    const combobox = testComponent.combobox();

    fixture.detectChanges();

    expect(combobox).toBeTruthy();
    expect(combobox.control).toBeTruthy();
    expect(combobox.isValid).toBeFalse();
    expect(combobox.isOpened).toBeFalse();
    expect(combobox.valueSeparator).toBe(',');
    expect(combobox.isMultiselect).toBeFalse();

    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;
    expect(input).toBeTruthy();

    const button = fixture.debugElement.query(By.css('button[tw-button]')).nativeElement;
    expect(button).toBeTruthy();

    const dropdown = fixture.debugElement.query(By.css('tw-dropdown')).nativeElement;
    expect(dropdown).toBeTruthy();

    let items = fixture.debugElement.queryAll(By.css('div[tw-combobox-item]')).map((x) => x.nativeElement);
    expect(items.length).toBe(USERS_STUB().length);

    let checkIcons = fixture.debugElement.queryAll(By.css('tw-icon[key="check-thin"]')).map((x) => x.nativeElement);
    expect(checkIcons.length).toBe(0);
  });

  it('should toggle', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIconConfig({
          source: {
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
        InputComponent,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon (click)="combobox.toggle()" key="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown [isOpened]="combobox.isOpened" class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </tw-dropdown>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      valueSelected: string = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();
    const toggleIcon = fixture.debugElement.query(By.css('tw-icon[key="chevron-up-down"]')).nativeElement;

    expect(combobox.isOpened).toBeFalse();
    toggleIcon.click();
    expect(combobox.isOpened).toBeTrue();
    toggleIcon.click();
    expect(combobox.isOpened).toBeFalse();
    toggleIcon.click();
    expect(combobox.isOpened).toBeTrue();
  });

  it('should select an item', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIconConfig({
          source: {
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
        InputComponent,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon (click)="combobox.toggle()" key="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown [isOpened]="combobox.isOpened" class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </tw-dropdown>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected: string = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();

    // Combobox is closed by default
    expect(combobox.isOpened).toBeFalse();
    const toggleIcon: HTMLElement = fixture.debugElement.query(By.css('tw-icon[key="chevron-up-down"]')).nativeElement;
    toggleIcon.click();

    // Initial state when combobox is opened for the first time
    expect(combobox.isOpened).toBeTrue();
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
    expect(combobox.isOpened).toBeFalse();
    expect(combobox.isValid).toBeTrue();

    // Second selection
    const item1 = testComponent.comboboxItems()[1];
    expect(item1.isSelected).toBeFalse();

    item1.nativeElement.click();

    expect(item1.isSelected).toBeTrue();
    expect(testComponent.valueSelected).toBe(item1.value);
    expect(combobox.control.value).toBe(item1.value);
    expect(input.value).toBe(item1.value);
    expect(combobox.isOpened).toBeFalse();
    expect(combobox.isValid).toBeTrue();

    // first item selected should be unselected after second selection
    expect(item0.isSelected).toBeFalse();
    expect(testComponent.valueSelected).not.toBe(item0.value);
    expect(combobox.control.value).not.toBe(item0.value);
    expect(input.value).not.toBe(item0.value);

    // Selected item should be unselected after clicking on it again
    item1.nativeElement.click();
    expect(combobox.isValid).toBeFalse();
    expect(item1.isSelected).toBeFalse();
    expect(testComponent.valueSelected).toBe('');
    expect(combobox.control.value).toBe('');
    expect(input.value).toBe('');
  });

  it('should select multiple items', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIconConfig({
          source: {
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
        InputComponent,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #combobox [isMultiselect]="true" (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon (click)="combobox.toggle()" key="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown [isOpened]="combobox.isOpened" class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </tw-dropdown>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected: string = '';
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
    expect(combobox.isOpened).toBeFalse();
    const toggleIcon: HTMLElement = fixture.debugElement.query(By.css('tw-icon[key="chevron-up-down"]')).nativeElement;
    toggleIcon.click();

    // Initial state when combobox is opened for the first time
    expect(combobox.isOpened).toBeTrue();
    expect(combobox.isValid).toBeFalse();
    expect(combobox.isMultiselect).toBeTrue();
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

    item0.nativeElement.click();
    item1.nativeElement.click();
    item2.nativeElement.click();

    // After selections
    expect(item0.isSelected).toBeTrue();
    expect(item1.isSelected).toBeTrue();
    expect(item2.isSelected).toBeTrue();

    let expectedValue = `${item0.value}, ${item1.value}, ${item2.value}`;

    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue);
    expect(input.value).toBe(expectedValue);

    // Combobox should remain opened
    expect(combobox.isOpened).toBeTrue();
    expect(combobox.isValid).toBeTrue();

    // Selected item should be unselected when clicking on it again
    item1.nativeElement.click();
    expectedValue = `${item0.value}, ${item2.value}`;
    expect(item1.isSelected).toBeFalse();
    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue);
    expect(input.value).toBe(expectedValue);
  });

  it('should reset', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideIconConfig({
          source: {
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
        InputComponent,
        ButtonComponent,
        IconDirective,
        DropdownComponent
      ],
      template: `
        <div tw-combobox #combobox [isMultiselect]="true" (valueSelected)="saveSelection($event)" class="sm:w-80">
          <!-- Label -->
          <label for="search" class="block text-sm mb-2 font-medium"> Quick search </label>
          <!-- Input -->
          <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
          <!-- Button -->
          <button tw-button variant="text" size="sm"
            class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
            <tw-icon *ngIf="combobox.isOpened && combobox.isValid" (click)="combobox.reset()" size="sm" key="x-mark" />
            <tw-icon (click)="combobox.toggle()" key="chevron-up-down" />
          </button>
          <!-- Dropdown -->
          <tw-dropdown [isOpened]="combobox.isOpened" class="w-full overflow-y-auto max-h-56 duration-0">
            @for (user of users; track user.name) {
            <div tw-combobox-item #item [value]="user.name">
              <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
              <span>{{ user.name }}</span>
            </div>
            }
          </tw-dropdown>
        </div>
      `
    }) class TestComponent {
      combobox = viewChild.required(ComboboxComponent);
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected: string = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value.join(', ');
      }
    }

    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    fixture.detectChanges();

    const combobox = testComponent.combobox();
    const toggleIcon: HTMLElement = fixture.nativeElement.querySelector('tw-icon[key="chevron-up-down"]');
    const input = fixture.debugElement.query(By.css('input[tw-input]')).nativeElement;

    // Combobox is closed by default
    expect(combobox.isOpened).toBeFalse();
    toggleIcon.click();
    fixture.detectChanges();
    expect(combobox.isOpened).toBeTrue();
    expect(combobox.isValid).toBeFalse();

    const item0 = testComponent.comboboxItems()[0];
    const item1 = testComponent.comboboxItems()[1];
    const item2 = testComponent.comboboxItems()[2];

    // Before selections
    expect(item0.isSelected).toBeFalse();
    expect(item1.isSelected).toBeFalse();
    expect(item2.isSelected).toBeFalse();

    item0.nativeElement.click();
    item1.nativeElement.click();
    item2.nativeElement.click();
    fixture.detectChanges();

    // After selections
    expect(item0.isSelected).toBeTrue();
    expect(item1.isSelected).toBeTrue();
    expect(item2.isSelected).toBeTrue();

    let expectedValue = `${item0.value}, ${item1.value}, ${item2.value}`;

    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue);
    expect(input.value).toBe(expectedValue);

    // Before reset
    expect(combobox.isOpened).toBeTrue();
    expect(combobox.isValid).toBeTrue();
    const resetIcon: HTMLElement = fixture.debugElement.query(By.css('tw-icon[key="x-mark"]')).nativeElement;

    resetIcon.click();
    fixture.detectChanges();
    expectedValue = '';

    // After reset
    expect(item0.isSelected).toBeFalse();
    expect(item1.isSelected).toBeFalse();
    expect(item2.isSelected).toBeFalse();
    expect(testComponent.valueSelected).toBe(expectedValue);
    expect(combobox.control.value).toBe(expectedValue);
    expect(input.value).toBe(expectedValue);
  });
});
