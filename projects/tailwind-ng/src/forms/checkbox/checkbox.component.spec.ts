import { TestBed } from '@angular/core/testing';
import { GetCheckboxConfig, provideCheckboxConfig } from './checkbox.component.config';
import { ClassList } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';
import { CheckboxModule } from './checkbox.module';
import { CheckboxComponent } from './checkbox.component';
import { InputCheckboxDirective } from './input-checkbox.directive';
import { IconDirective } from 'tailwind-ng';


describe('CheckboxComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideCheckboxConfig()
      ]
    });
  });

  describe('container', () => {
    it('should get config', () => {
      @Component({
        selector: 'tw-test-app',
        standalone: true,
        imports: [CheckboxModule, IconDirective],
        template: `
        <div tw-checkbox>
          <input tw-input type="checkbox" name="email" id="email-notification-cb" />
          <tw-icon key="check-thin" size="sm" class="peer-checked:block" />
        </div>
        `
      }) class TestAppComponent {
        checkbox = viewChild.required(CheckboxComponent);
      }

      const appFixture = TestBed.createComponent(TestAppComponent);
      const testApp = appFixture.componentInstance;
      const checkbox = testApp.checkbox();
      appFixture.detectChanges();

      checkbox.input().config$.subscribe(c => {
        expect(c.container).toEqual(GetCheckboxConfig().container);
      }).unsubscribe();
    });

    it('should set classlist', () => {
      const expectedClasslist = new ClassList().set(GetCheckboxConfig().container);
      @Component({
        selector: 'tw-test-app',
        standalone: true,
        imports: [CheckboxModule, IconDirective],
        template: `
        <div tw-checkbox>
          <input tw-input type="checkbox" name="email" id="email-notification-cb" />
          <tw-icon key="check-thin" size="sm" class="peer-checked:block" />
        </div>
        `
      }) class TestAppComponent {
        checkbox = viewChild.required(CheckboxComponent);
      }

      const appFixture = TestBed.createComponent(TestAppComponent);
      const testApp = appFixture.componentInstance;
      const checkbox = testApp.checkbox();
      appFixture.detectChanges();
      expect(checkbox.classList.value).toEqual(expectedClasslist.value);
    });
  })

  describe('input', () => {
    it('should get config', () => {
      @Component({
        selector: 'tw-test-app',
        standalone: true,
        imports: [CheckboxModule, IconDirective],
        template: `
        <div tw-checkbox>
          <input tw-input type="checkbox" name="email" id="email-notification-cb" />
          <tw-icon key="check-thin" size="sm" class="peer-checked:block" />
        </div>
        `
      }) class TestAppComponent {
        input = viewChild.required(InputCheckboxDirective);
      }

      const appFixture = TestBed.createComponent(TestAppComponent);
      const testApp = appFixture.componentInstance;
      const input = testApp.input();
      appFixture.detectChanges();

      input.config$.subscribe(c => {
        expect(c.input).toEqual(GetCheckboxConfig().input);
      }).unsubscribe();
    });

    it('should set classlist', () => {
      const inputClasslist = new ClassList().set(GetCheckboxConfig().input);

      @Component({
        selector: 'tw-test-app',
        standalone: true,
        imports: [CheckboxModule, IconDirective],
        template: `
        <div tw-checkbox>
          <input tw-input type="checkbox" name="email" id="email-notification-cb" />
          <tw-icon key="check-thin" size="sm" class="peer-checked:block" />
        </div>
        `
      }) class TestAppComponent {
        input = viewChild.required(InputCheckboxDirective);
      }

      const appFixture = TestBed.createComponent(TestAppComponent);
      const testApp = appFixture.componentInstance;
      const input = testApp.input();
      appFixture.detectChanges();
      expect(input.classList.value).toEqual(inputClasslist.value);
    });
  })
});
