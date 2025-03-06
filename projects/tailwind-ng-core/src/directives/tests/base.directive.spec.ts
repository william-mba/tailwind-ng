/* eslint-disable @angular-eslint/component-selector, @angular-eslint/directive-selector */
import { By } from '@angular/platform-browser';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Component, Directive, ElementRef } from "@angular/core";
import { BaseDirective } from "../base.directive";
import { classlist } from '../../config/classlist';

@Directive({
  selector: '[fakeDirective]',
}) class FakeDirective extends BaseDirective {
  private _isFocused = false;
  override get isFocused(): boolean {
    return this._isFocused;
  }
  constructor() {
    super();
    this.nativeElement.focus = () => this._isFocused = true;
  }
  protected override buildStyle(): void {
    this.classList = classlist(this.class);
  }
}

describe('BaseDirective', () => {
  let directive: FakeDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FakeDirective,
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') }
        }
      ]
    });
    directive = TestBed.inject(FakeDirective);
  });
  it('should create', () => {
    expect(directive).toBeTruthy();
  })

  describe('props', () => {
    it('should set class', () => {
      expect(directive.class).toBeNull();

      @Component({
        selector: 'test-component',
        imports: [FakeDirective],
        template: `<div fakeDirective class="class1 class2 class3"></div>`
      }) class TestComponent { }

      const fixture = TestBed.createComponent(TestComponent);
      directive = fixture.debugElement.query(By.directive(FakeDirective)).injector.get(FakeDirective);
      fixture.detectChanges();

      expect(directive.class).toBe('class1 class2 class3');
    });

    it('should set classlist', () => {
      expect(directive.classList).toBeTruthy();
      directive.classList.set('class1 class2 class3');
      expect(directive.classList.value).toEqual(['class1', 'class2', 'class3']);
    });

    it('should get nativeElement', () => {
      expect(directive.nativeElement).toBeTruthy();
    });

    it('should set disableable', () => {
      expect(directive.disabled).toBeFalse();
      directive.disabled = true;
      expect(directive.disabled).toBeTrue();
    });

  })

  describe('actions', () => {
    it('should focus', () => {
      expect(directive.isFocused).toBeFalse();
      directive.nativeElement.focus();
      expect(directive.isFocused).toBeTrue();
    });

    it('should add/remove visual focus', () => {
      expect(directive.hasVisualFocus).toBeFalse();
      directive.setVisualfocus();
      expect(directive.hasVisualFocus).toBeTrue();
      directive.removeVisualfocus();
      expect(directive.hasVisualFocus).toBeFalse();
    });

    it('should set whether it is hovered', () => {
      expect(directive.isHovered).toBeFalse();
      directive.isHovered = true;
      expect(directive.isHovered).toBeTrue();
    });

    it('should scroll into view', fakeAsync(() => {
      spyOn(directive.nativeElement, 'scrollIntoView');
      directive.scrollIntoView();
      tick(50);
      expect(directive.nativeElement.scrollIntoView).toHaveBeenCalled();
      expect(directive.nativeElement.scrollIntoView).toHaveBeenCalledTimes(1);
      expect(directive.nativeElement.scrollIntoView).toHaveBeenCalledWith({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
    }, { flush: true }));
  })
});
