import { InputTextDirective } from './input-text.directive'
import { TestBed } from '@angular/core/testing'
import { provideInputText } from './input-text.directive.config'
import { INPUT_TEXT_CONFIG, stringToArray } from '@tailwind-ng/core'
import { Component } from '@angular/core'
import { By } from '@angular/platform-browser'

describe('InputDirective', () => {
  let className = ''
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideInputText()],
    })

    TestBed.runInInjectionContext(() => {
      className = TestBed.inject(INPUT_TEXT_CONFIG).className ?? ''
    })
  })

  it('should set classlist', () => {
    @Component({
      selector: 'tw-test-app',
      standalone: true,
      imports: [InputTextDirective],
      template: ` <input tw-input type="email" /> `,
    })
    class TestAppComponent {}

    const fixture = TestBed.createComponent(TestAppComponent)
    const input = fixture.debugElement.query(By.directive(InputTextDirective))
    fixture.detectChanges()

    stringToArray(className).forEach(c => {
      expect(input.nativeElement.classList.contains(c)).toBe(true)
    })
  })
})
