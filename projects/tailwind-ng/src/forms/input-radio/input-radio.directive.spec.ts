import { InputRadioDirective } from './input-radio.directive';
import { TestBed } from '@angular/core/testing';
import { GetInputRadioConfig, provideInputRadioConfig } from './input-radio.directive.config';
import { ClassList } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputRadioDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideInputRadioConfig()
      ]
    });
  });

  it('should get config', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputRadioDirective],
      template: `<input tw-input type="radio" name="notification" id="email-notification" />`
    }) class TestAppComponent {
      input = viewChild.required(InputRadioDirective);
    }

    const appFixture = TestBed.createComponent(TestAppComponent);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    testApp.input().config$.subscribe(c => {
      expect(c).toEqual(GetInputRadioConfig());
    }).unsubscribe();
  });

  it('should set classlist', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputRadioDirective],
      template: `<input tw-input type="radio" name="notification" id="email-notification" />`
    }) class TestAppComponent {
      input = viewChild.required(InputRadioDirective);
    }

    const appFixture = TestBed.createComponent(TestAppComponent);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();
    expect(testApp.input().classList.value).toEqual(new ClassList().set(GetInputRadioConfig()).value);
  });
});
