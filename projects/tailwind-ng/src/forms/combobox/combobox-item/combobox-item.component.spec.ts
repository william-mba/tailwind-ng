/* eslint-disable @angular-eslint/component-selector */
import { DropdownComponent } from './../../../elements/dropdown/dropdown.component';
import { TestBed } from '@angular/core/testing';
import { ComboboxItemComponent } from './combobox-item.component';
import { Component, ElementRef, viewChildren } from '@angular/core';
import { GetComboboxItemConfig, provideComboboxItem } from './combobox-item.component.config';

import { USERS_STUB } from '../combobox.component.spec';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../../../elements/button/button.component';
import { ComboboxModule } from '../combobox.module';

describe('ComboboxItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        },
        provideComboboxItem()
      ],
    });
  });

  it('should create', () => {
    @Component({
      selector: 'app-test',
      imports: [
    NgIf,
    ReactiveFormsModule,
    ComboboxModule,
    ButtonComponent,
    DropdownComponent
],
      template: `
      <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
        <!-- Input -->
        <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
        <!-- Button -->
        <button tw-button variant="text" size="sm" [popup]="combobox"
          class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
        </button>
        <!-- Dropdown -->
        <tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
          @for (user of users; track user.name) {
          <div tw-combobox-item #item [value]="user.name">
            <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
            <span>{{ user.name }}</span>
          </div>
          }
        </tw-dropdown>
      </div>
      `,
    }) class TestComponent {
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    expect(testComponent.comboboxItems()).toBeTruthy();
  });

  it('should set a value', () => {
    @Component({
      selector: 'app-test',
      imports: [
    NgIf,
    ReactiveFormsModule,
    ComboboxModule,
    ButtonComponent,
    DropdownComponent
],
      template: `
      <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
        <!-- Input -->
        <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
        <!-- Button -->
        <button tw-button variant="text" size="sm" [popup]="combobox"
          class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
        </button>
        <!-- Dropdown -->
        <tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
          @for (user of users; track user.name) {
          <div tw-combobox-item #item [value]="user.name">
            <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
            <span>{{ user.name }}</span>
          </div>
          }
        </tw-dropdown>
      </div>
      `,
    }) class TestComponent {
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    expect(testComponent.comboboxItems().length).toBe(USERS_STUB().length);

    for (let i = 0; i < testComponent.comboboxItems().length; i++) {
      expect(testComponent.comboboxItems()[i].value).toBe(USERS_STUB()[i].name);
    }
  });

  it('should get config', () => {

    @Component({
      selector: 'app-test',
      imports: [
    NgIf,
    ReactiveFormsModule,
    ComboboxModule,
    ButtonComponent,
    DropdownComponent
],
      template: `
      <div tw-combobox #combobox (valueSelected)="saveSelection($event)" class="sm:w-80">
        <!-- Input -->
        <input tw-input id="search" [formControl]="combobox.control" class="pr-12" />
        <!-- Button -->
        <button tw-button variant="text" size="sm" [popup]="combobox"
          class="absolute inset-y-0 gap-0 -right-1 rounded-r-md inline-flex users-center opacity-50">
        </button>
        <!-- Dropdown -->
        <tw-dropdown class="w-full overflow-y-auto max-h-56 duration-0">
          @for (user of users; track user.name) {
          <div tw-combobox-item #item [value]="user.name">
            <tw-icon *ngIf="item.isSelected" class="my-auto absolute right-3" key="check-thin" />
            <span>{{ user.name }}</span>
          </div>
          }
        </tw-dropdown>
      </div>
      `,
    }) class TestComponent {
      comboboxItems = viewChildren(ComboboxItemComponent);
      valueSelected = '';
      users = USERS_STUB();

      protected saveSelection(value: string[]) {
        this.valueSelected = value[0] || '';
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    const item = testComponent.comboboxItems()[0];
    item.config.subscribe(c => {
      expect(c).toEqual(GetComboboxItemConfig());
    }).unsubscribe();
  });
});

