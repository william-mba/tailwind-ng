/* eslint-disable @angular-eslint/directive-selector, @angular-eslint/directive-class-suffix */
import { computed, Directive, ElementRef } from "@angular/core";
import { classlist } from '../../config/classlist';
import { PopupDirective } from '../popup.directive';
import { fakeAsync, TestBed, tick } from "@angular/core/testing";

@Directive({
  selector: '[fakePopup]',
}) class FakePopup extends PopupDirective {
  protected override buildStyle(): void {
    this.classList = classlist(this.class);
  }
}

describe('PopupDirective', () => {
  let directive: FakePopup;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FakePopup,
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        }
      ]
    });
    directive = TestBed.inject(FakePopup);
  });
  it('should create', () => {
    expect(directive).toBeTruthy();
  })

  describe('props', () => {
    it('should set id', () => {
      expect(directive.id.startsWith('popup')).toBeTrue();
    });
  });

  describe('actions', () => {
    it('should toggle', fakeAsync(() => {
      expect(directive.opened()).toBeFalse();
      directive.toggle();
      tick(100);
      expect(directive.opened()).toBeTrue();
      directive.toggle();
      tick(100);
      expect(directive.opened()).toBeFalse();
    }, { flush: true }));

    it('should open', fakeAsync(() => {
      expect(directive.opened()).toBeFalse();
      directive.open();
      tick(100);
      expect(directive.opened()).toBeTrue();
    }, { flush: true }));

    it('should close', fakeAsync(() => {
      expect(directive.opened()).toBeFalse();
      directive.open();
      tick(100);
      expect(directive.opened()).toBeTrue();
      directive.close();
      tick(100);
      expect(directive.opened()).toBeFalse();
    }, { flush: true }));
  });

  describe('advanced actions', () => {
    it('should close after a given delay', fakeAsync(() => {
      const opened = computed(() => directive.opened());
      expect(opened()).toBeFalse();
      directive.open();
      tick(100);
      expect(directive.opened()).toBeTrue();
      directive.closeAfter(1000);
      tick(2000);
      expect(opened()).toBeFalse();
    }, { flush: true }));
  });
});
