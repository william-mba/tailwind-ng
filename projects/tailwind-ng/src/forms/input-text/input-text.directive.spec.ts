import { InputTextDirective } from './input-text.directive';
import { TestBed } from '@angular/core/testing';
import { GetInputTextConfig, provideInputText } from './input-text.directive.config';
import { ClassList } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideInputText()
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

    expect(testApp.input().config).toEqual(GetInputTextConfig());
  });

  it('should set classlist', async () => {
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

    const expected = await new ClassList().set(GetInputTextConfig());
    expect(testApp.input().classList.value()).toEqual(expected.value());
  });
});
