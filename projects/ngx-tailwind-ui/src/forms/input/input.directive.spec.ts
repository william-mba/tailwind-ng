import { InputDirective } from './input.directive';
import { TestBed } from '@angular/core/testing';
import { GetInputConfig, provideInputConfig } from './input.config';
import { ClassList } from '@ngx-tailwind/core';
import { Component, viewChild } from '@angular/core';

describe('InputDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideInputConfig()
      ]
    });
  });

  it('should get config', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputDirective],
      template: `<input tw-input type="text" />`
    }) class TestAppComponent {
      input = viewChild.required(InputDirective);
    }

    const appFixture = TestBed.createComponent(TestAppComponent);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    testApp.input().config$.subscribe(c => {
      expect(c).toEqual(GetInputConfig());
    }).unsubscribe();
  });

  it('should set classlist', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputDirective],
      template: `<input tw-input type="email" />`
    }) class TestAppComponent {
      input = viewChild.required(InputDirective);
    }

    const appFixture = TestBed.createComponent(TestAppComponent);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();
    expect(testApp.input().classList.value).toEqual(new ClassList().setFrom(GetInputConfig()).value);
  });
});
