import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Container, provideContainer } from 'tailwind-ng'

describe('Container', () => {
  let component: Container
  beforeEach(() => {
    @Component({
      imports: [Container],
      providers: [provideContainer()],
      template: `<tw-container><div>Hello world</div></tw-container>`,
    })
    class AppComponent {}

    const fixture = TestBed.createComponent(AppComponent)
    component = fixture.debugElement.query(By.directive(Container)).componentInstance
    fixture.detectChanges()
  })

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should set className', () => {
    expect(component.nativeElement.className).toBe('mx-auto max-w-7xl bg-gray-100 sm:px-6 lg:px-8')
  })

  it('should render projected content', () => {
    expect(component.nativeElement?.textContent).toBe('Hello world')
  })
})
