import { TestBed } from '@angular/core/testing'
import { provideCheckbox } from './checkbox.component.config'
import { Component } from '@angular/core'
import { CheckboxComponent } from './checkbox.component'
import { provideIcon } from 'tailwind-ng'
import { CHECKBOX_CONFIG, ClassName } from '@tailwind-ng/core'
import { By } from '@angular/platform-browser'

describe('CheckboxComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCheckbox(), provideIcon()],
    })
  })

  it('should set classlit', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [CheckboxComponent],
      template: ` <tw-checkbox>Option A</tw-checkbox> `,
    })
    class TestAppComponent {}

    const fixture = TestBed.createComponent(TestAppComponent)
    const component = fixture.debugElement.query(
      By.directive(CheckboxComponent)
    )
    fixture.detectChanges()

    let className = ''
    TestBed.runInInjectionContext(() => {
      className = TestBed.inject(CHECKBOX_CONFIG) || ''
    })

    const checkboxInput = component.query(
      By.css('input[type="checkbox"]')
    ).nativeElement

    ClassName.toArray(className).forEach((c) => {
      expect(checkboxInput.classList.contains(c)).toBe(true)
    })
  })
})
