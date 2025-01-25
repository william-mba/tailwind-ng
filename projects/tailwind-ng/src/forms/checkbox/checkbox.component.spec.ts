import { TestBed } from '@angular/core/testing';
import { GetCheckboxConfig, provideCheckboxConfig } from './checkbox.component.config';
import { Component, viewChild } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';


fdescribe('CheckboxComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideCheckboxConfig()
      ]
    });
  });

  it('should get config', () => {
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

    component.config$.subscribe(c => {
      expect(c).toEqual(GetCheckboxConfig());
    }).unsubscribe();
  });

  describe('checkbox with parent', () => {
    it('should get config', () => {
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

      component.config$.subscribe(c => {
        expect(c).toEqual(GetCheckboxConfig());
      }).unsubscribe();
    });
  })
});
