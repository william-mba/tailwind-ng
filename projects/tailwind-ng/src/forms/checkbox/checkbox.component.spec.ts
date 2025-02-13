import { TestBed } from '@angular/core/testing';
import { GetCheckboxConfig, provideCheckbox } from './checkbox.component.config';
import { Component, viewChild } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { provideIcon } from 'tailwind-ng';
import { classlist } from '@tailwind-ng/core';

describe('CheckboxComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideCheckbox(),
        provideIcon()
      ]
    });
  });

  it('should set classlit', () => {
    const classlit = classlist(GetCheckboxConfig());

    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [CheckboxComponent],
      template: `<tw-checkbox>Option A</tw-checkbox>`
    }) class TestAppComponent {
      component = viewChild.required(CheckboxComponent);
    }
    const fixture = TestBed.createComponent(TestAppComponent);
    const testApp = fixture.componentInstance;
    const component = testApp.component();
    fixture.detectChanges();

    expect(component.classList.value()).toEqual(classlit.value());
  });
});
