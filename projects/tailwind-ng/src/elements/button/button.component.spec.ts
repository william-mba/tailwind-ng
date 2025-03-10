/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { BUTTON_CONFIG, Str } from '@tailwind-ng/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { provideButton } from './button.component.config';
import { Component, viewChild } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideButton()
      ]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
  });

  it('should set size', () => {
    TestBed.runInInjectionContext(() => {
      const xl = 'xl';
      const lg = 'lg';
      const md = 'md';
      const sm = 'sm';
      const xs = 'xs';

      component.size = xl;
      expect(component.size).toBe(xl);

      component.size = lg;
      expect(component.size).toBe(lg);

      component.size = md;
      expect(component.size).toBe(md);

      component.size = sm;
      expect(component.size).toBe(sm);

      component.size = xs;
      expect(component.size).toBe(xs);
    });
  });

  it('should set variant', () => {
    expect(component.variant).toBe('primary');

    component.variant = 'secondary';
    expect(component.variant).toBe('secondary');

    component.variant = 'tonal';
    expect(component.variant).toBe('tonal');

    component.variant = 'text';
    expect(component.variant).toBe('text');
  });

  it('should set classList', () => {
    TestBed.runInInjectionContext(() => {
      const className = TestBed.inject(BUTTON_CONFIG)[component.variant];
      className?.split(' ').forEach(c => {
        expect(component.nativeElement.classList.contains(c)).toBeTrue();
      }
      );
    });
  });

  it('should customize using class attribute', () => {
    const customizations = 'rounded-full bg-red-600 gap-3';
    const defaultGap = 'gap-2';
    const defaultBgColor = 'bg-blue-600';
    const defaultRadius = 'rounded-md';

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent],
      template: `<button tw-button [class]="customizations">Test button</button>`
    }) class TestApp {
      button = viewChild.required(ButtonComponent);
      customizations = customizations;
    }

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    Str.toArray(customizations).forEach(c => {
      expect(testApp.button().nativeElement.classList.contains(c)).toBeTrue();
    });

    expect(testApp.button().nativeElement.classList.contains(defaultGap)).toBeFalse();
    expect(testApp.button().nativeElement.classList.contains(defaultBgColor)).toBeFalse();
    expect(testApp.button().nativeElement.classList.contains(defaultRadius)).toBeFalse();
  });

  it('should customize using dependency injection', () => {
    const customization = 'rounded-full bg-red-600 gap-3';
    const defaultGap = 'gap-2';
    const defaultBgColor = 'bg-blue-600';
    const defaultRadius = 'rounded-md';

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent],
      providers: [
        provideButton({
          primary: customization
        })
      ],
      template: `<button tw-button>Test button</button>`
    }) class TestApp {
      button = viewChild.required(ButtonComponent);
    }

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    Str.toArray(customization).map(c => {
      expect(testApp.button().nativeElement.classList.contains(c)).toBeTrue();
    });

    expect(testApp.button().nativeElement.classList.contains(defaultGap)).toBeFalse();
    expect(testApp.button().nativeElement.classList.contains(defaultBgColor)).toBeFalse();
    expect(testApp.button().nativeElement.classList.contains(defaultRadius)).toBeFalse();
  });

  it('should set isFab', () => {
    expect(component.isFab).toBeFalse();
    expect(component.nativeElement.classList.contains('shadow-lg')).toBeFalse();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance
    component.isFab = true;
    fixture.detectChanges();

    expect(component.isFab).toBeTrue();
    expect(component.nativeElement.classList.contains('shadow-lg')).toBeTrue();
  });

});

