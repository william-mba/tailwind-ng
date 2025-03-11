import { InputRadioDirective } from './input-radio.directive';
import { TestBed } from '@angular/core/testing';
import { provideInputRadio } from './input-radio.directive.config';
import { INPUT_RADIO_CONFIG, ClassName } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputRadioDirective', () => {
  let className = '';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideInputRadio()
      ]
    });

    TestBed.runInInjectionContext(() => {
      className = TestBed.inject(INPUT_RADIO_CONFIG);
    });
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
    ClassName.toArray(className).forEach(c => {
      expect(testApp.input().nativeElement.className.includes(c)).toBeTrue();
    });
  });
});
