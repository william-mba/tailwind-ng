/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ButtonGroupComponent } from './button-group.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideButtonGroup } from './button-group.component.config'
import { BUTTON_GROUP_CONFIG, ClassName } from '@tailwind-ng/core'
import { Component } from '@angular/core'
import { ButtonComponent } from '../button/button.component'
import { By } from '@angular/platform-browser'

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent
  let fixture: ComponentFixture<ButtonGroupComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideButtonGroup()],
    })
    fixture = TestBed.createComponent(ButtonGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should set classList', () => {
    let className = ''
    TestBed.runInInjectionContext(() => {
      className = TestBed.inject(BUTTON_GROUP_CONFIG) || ''
    })

    ClassName.toArray(className).forEach((c) => {
      expect(component.nativeElement.classList.contains(c)).toBeTruthy()
    })
  })

  it('should customize using class attribute', () => {
    const defaultRadius = 'rounded-md'
    const defaultBoxShadow = 'shadow-sm'

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent, ButtonGroupComponent],
      template: `
        <tw-button-group class="rounded-full">
          <button tw-button variant="secondary">Button A</button>
          <button tw-button variant="secondary">Button B</button>
          <button tw-button variant="secondary">Button C</button>
        </tw-button-group>
      `,
    })
    class TestApp {}

    const fixture = TestBed.createComponent(TestApp)
    const buttonGroup = fixture.debugElement.query(
      By.directive(ButtonGroupComponent)
    ).componentInstance
    fixture.detectChanges()

    expect(buttonGroup.nativeElement.className.includes('rounded-full')).toBeTruthy()
    expect(buttonGroup.nativeElement.className.includes(defaultRadius)).toBeFalsy()
    expect(buttonGroup.nativeElement.className.includes(defaultBoxShadow)).toBeTruthy()
  })

  it('should customize using DI', () => {
    const defaultRadius = 'rounded-md'
    const defaultBoxShadow = 'shadow-sm'

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent, ButtonGroupComponent],
      providers: [provideButtonGroup('rounded-full shadow-lg')],
      template: `
        <tw-button-group>
          <button tw-button variant="secondary">Button A</button>
          <button tw-button variant="secondary">Button B</button>
          <button tw-button variant="secondary">Button C</button>
        </tw-button-group>
      `,
    })
    class TestApp {}

    const fixture = TestBed.createComponent(TestApp)
    const buttonGroup = fixture.debugElement.query(
      By.directive(ButtonGroupComponent)
    ).componentInstance
    fixture.detectChanges()

    expect(buttonGroup.nativeElement.className.includes('shadow-lg')).toBeTruthy()
    expect(buttonGroup.nativeElement.className.includes('rounded-full')).toBeTruthy()
    expect(buttonGroup.nativeElement.className.includes(defaultRadius)).toBeFalsy()
    expect(buttonGroup.nativeElement.className.includes(defaultBoxShadow)).toBeFalsy()
  })
})
