/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { classlist, Str } from '@tailwind-ng/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { GetButtonConfig, provideButton } from './button.component.config';
import { Component, viewChild } from '@angular/core';

describe('ButtonComponent', () => {
  const config = GetButtonConfig();
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
      component.size.set('xl');
      expect(component.size()).toBe('xl');

      component.size.set('lg');
      expect(component.size()).toBe('lg');

      component.size.set('md');
      expect(component.size()).toBe('md');

      component.size.set('sm');
      expect(component.size()).toBe('sm');

      component.size.set('xs');
      expect(component.size()).toBe('xs');
    });
  });

  it('should set variant', () => {
    expect(component.variant()).toBe('primary');

    component.variant.set('secondary');
    expect(component.variant()).toBe('secondary');

    component.variant.set('text');
    expect(component.variant()).toBe('text');

    component.variant.set('tonal');
    expect(component.variant()).toBe('tonal');
  });

  it('should set classList', () => {
    const classList = classlist({
      ...config.md,
      ...config.primary
    });
    component.classList = classList;

    expect(component.classList.value).toEqual(classList.value);
  });

  it('should customize using class attribute', () => {
    const defaultGap = GetButtonConfig().md.gap!;
    const defaultBgColor = GetButtonConfig().primary.bgColor!;
    const defaultRadius = GetButtonConfig().md.radius!;
    const customizations = 'rounded-full bg-red-600 gap-3';

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
      expect(testApp.button().classList.value.includes(c)).toBeTrue();
    });

    expect(testApp.button().classList.value.includes(defaultGap)).toBeFalse();
    expect(testApp.button().classList.value.includes(defaultBgColor)).toBeFalse();
    expect(testApp.button().classList.value.includes(defaultRadius)).toBeFalse();
  });

  it('should customize using dependency injection', () => {
    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent],
      providers: [
        provideButton({
          primary: {
            gap: 'gap-3',
            bgColor: 'bg-red-600',
            radius: 'rounded-full'
          }
        })
      ],
      template: `<button tw-button>Test button</button>`
    }) class TestApp {
      button = viewChild.required(ButtonComponent);
    }

    const customizations = 'rounded-full bg-red-600 gap-3';

    const defaultGap = GetButtonConfig().md.gap!;
    const defaultRadius = GetButtonConfig().md.radius!;
    const defaultBgColor = GetButtonConfig().primary.bgColor!;

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    Str.toArray(customizations).forEach(c => {
      expect(testApp.button().classList.value.includes(c)).toBeTrue();
    });

    expect(testApp.button().classList.value.includes(defaultGap)).toBeFalse();
    expect(testApp.button().classList.value.includes(defaultBgColor)).toBeFalse();
    expect(testApp.button().classList.value.includes(defaultRadius)).toBeFalse();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white', 'gap-2'];
    const defaultRadius = GetButtonConfig().primary.gap!;

    component.classList.update(newClassList);

    newClassList.forEach(c => {
      expect(component.classList.value.includes(c)).toBeTrue();
    });

    expect(component.classList.value.includes(defaultRadius)).toBeFalse();
  });

  it('should set isFab', () => {
    expect(component.isFab()).toBeFalse();
    component.isFab.set(true);
    expect(component.isFab()).toBeTrue();
  });

});

