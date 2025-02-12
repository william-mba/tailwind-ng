import { InputRadioDirective } from './input-radio.directive';
import { TestBed } from '@angular/core/testing';
import { GetInputRadioConfig, provideInputRadio } from './input-radio.directive.config';
import { classlist } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputRadioDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideInputRadio()
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

    expect(testApp.input().config).toEqual(GetInputRadioConfig());
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
    const expected = classlist().set(GetInputRadioConfig());
    expect(testApp.input().classList.value()).toEqual(expected.value());
  });
});
