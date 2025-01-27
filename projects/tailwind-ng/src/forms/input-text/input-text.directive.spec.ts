import { InputTextDirective } from './input-text.directive';
import { TestBed } from '@angular/core/testing';
import { GetInputConfig, provideInput } from './input-text.directive.config';
import { ClassList } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideInput()
      ]
    });
  });

  it('should get config', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputTextDirective],
      template: `<input tw-input type="text" />`
    }) class TestAppComponent {
      input = viewChild.required(InputTextDirective);
    }

    const appFixture = TestBed.createComponent(TestAppComponent);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    testApp.input().config.subscribe(c => {
      expect(c).toEqual(GetInputConfig());
    }).unsubscribe();
  });

  it('should set classlist', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputTextDirective],
      template: `<input tw-input type="email" />`
    }) class TestAppComponent {
      input = viewChild.required(InputTextDirective);
    }

    const appFixture = TestBed.createComponent(TestAppComponent);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();
    expect(testApp.input().classList.value).toEqual(new ClassList().set(GetInputConfig()).value);
  });
});
