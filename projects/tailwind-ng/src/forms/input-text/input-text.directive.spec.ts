import { InputTextDirective } from './input-text.directive';
import { TestBed } from '@angular/core/testing';
import { GetInputTextConfig, provideInputText } from './input-text.directive.config';
import { classlist } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideInputText()
      ]
    });
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

    const expected = classlist().set(GetInputTextConfig());
    expect(testApp.input().classList.value).toEqual(expected.value);
  });
});
