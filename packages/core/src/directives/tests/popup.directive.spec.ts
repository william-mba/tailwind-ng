/* eslint-disable @angular-eslint/directive-selector, @angular-eslint/directive-class-suffix */
import { computed, Directive, ElementRef } from '@angular/core'
import { PopupDirective } from '../popup.directive'
import { fakeAsync, TestBed, tick } from '@angular/core/testing'

@Directive({
  selector: '[fakePopup]',
})
class FakePopup extends PopupDirective {
  protected override buildStyle(): void {
    /*NOOP */
  }
}

describe('PopupDirective', () => {
  let directive: FakePopup
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FakePopup,
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('div'),
          },
        },
      ],
    })
    directive = TestBed.inject(FakePopup)
  })
  it('should create', () => {
    expect(directive).toBeTruthy()
  })

  describe('props', () => {
    it('should set id', () => {
      expect(directive.id.startsWith('popup')).toBeTruthy()
    })
  })

  describe('actions', () => {
    it('should toggle', fakeAsync(
      () => {
        expect(directive.isOpened()).toBeFalsy()
        directive.toggle()
        tick(100)
        expect(directive.isOpened()).toBeTruthy()
        directive.toggle()
        tick(100)
        expect(directive.isOpened()).toBeFalsy()
      },
      { flush: true }
    ))

    it('should open', fakeAsync(
      () => {
        expect(directive.isOpened()).toBeFalsy()
        directive.open()
        tick(100)
        expect(directive.isOpened()).toBeTruthy()
      },
      { flush: true }
    ))

    it('should close', fakeAsync(
      () => {
        expect(directive.isOpened()).toBeFalsy()
        directive.open()
        tick(100)
        expect(directive.isOpened()).toBeTruthy()
        directive.close()
        tick(100)
        expect(directive.isOpened()).toBeFalsy()
      },
      { flush: true }
    ))
  })

  describe('advanced actions', () => {
    it('should close after a given delay', fakeAsync(
      () => {
        const opened = computed(() => directive.isOpened())
        expect(opened()).toBeFalsy()
        directive.open()
        tick(100)
        expect(directive.isOpened()).toBeTruthy()
        directive.closeAfter(1000)
        tick(2000)
        expect(opened()).toBeFalsy()
      },
      { flush: true }
    ))
  })
})
