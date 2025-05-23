/* eslint-disable @angular-eslint/component-selector, @angular-eslint/directive-selector */
import { By } from '@angular/platform-browser'
import { fakeAsync, TestBed, tick } from '@angular/core/testing'
import { Component, Directive } from '@angular/core'
import { BaseDirective } from '../base.directive'
import { vi } from 'vitest'

@Directive({
  selector: '[fakeDirective]',
})
class FakeDirective extends BaseDirective {
  private _isFocused = false
  override get isFocused(): boolean {
    return this._isFocused
  }
  constructor() {
    super()
    this.nativeElement.focus = () => (this._isFocused = true)
    this.nativeElement.scrollIntoView = () => {
      /*NOOP */
    }
  }
  protected override buildStyle(): void {
    /*NOOP */
  }
}

describe('BaseDirective', () => {
  let directive: FakeDirective
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeDirective],
    })
    directive = TestBed.inject(FakeDirective)
  })
  it('should create', () => {
    expect(directive).toBeTruthy()
  })

  describe('props', () => {
    it('should set class', () => {
      expect(directive.class).toBeNull()

      @Component({
        selector: 'test-component',
        imports: [FakeDirective],
        template: ` <div fakeDirective class="class1 class2 class3"></div> `,
      })
      class TestComponent {}

      const fixture = TestBed.createComponent(TestComponent)
      directive = fixture.debugElement
        .query(By.directive(FakeDirective))
        .injector.get(FakeDirective)
      fixture.detectChanges()

      expect(directive.class).toBe('class1 class2 class3')
      expect(directive.nativeElement.className).toBe('class1 class2 class3')
    })

    it('should get nativeElement', () => {
      expect(directive.nativeElement).toBeTruthy()
    })

    it('should set disableable', () => {
      expect(directive.disabled).toBeFalsy()
      directive.disabled = true
      expect(directive.disabled).toBeTruthy()
    })
  })

  describe('actions', () => {
    it('should focus', () => {
      expect(directive.isFocused).toBeFalsy()
      directive.nativeElement.focus()
      expect(directive.isFocused).toBeTruthy()
    })

    it('should add/remove visual focus', () => {
      expect(directive.hasVisualFocus).toBeFalsy()
      directive.setVisualfocus()
      expect(directive.hasVisualFocus).toBeTruthy()
      directive.removeVisualfocus()
      expect(directive.hasVisualFocus).toBeFalsy()
    })

    it('should scroll into view', fakeAsync(
      () => {
        vi.spyOn(directive.nativeElement, 'scrollIntoView')
        directive.scrollIntoView()
        tick(50)
        expect(directive.nativeElement.scrollIntoView).toHaveBeenCalled()
        expect(directive.nativeElement.scrollIntoView).toHaveBeenCalledTimes(1)
        expect(directive.nativeElement.scrollIntoView).toHaveBeenCalledWith({
          block: 'nearest',
          inline: 'nearest',
          behavior: 'instant',
        })
      },
      { flush: true }
    ))
  })
})
