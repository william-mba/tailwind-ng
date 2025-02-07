/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { SizeOption, ClassList, Str, ButtonVariant } from '@tailwind-ng/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  it('should get config', () => {
    expect(component.config).toEqual(config);
  });

  it('should set size', () => {
    TestBed.runInInjectionContext(() => {
      const xl: SizeOption = 'xl';
      const lg: SizeOption = 'lg';
      const md: SizeOption = 'md';
      const sm: SizeOption = 'sm';
      const xs: SizeOption = 'xs';

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
    const primary: ButtonVariant = 'primary';
    const secondary: ButtonVariant = 'secondary';
    const tonal: ButtonVariant = 'tonal';
    const text: ButtonVariant = 'text';

    component.variant = primary;
    expect(component.variant).toBe(primary);

    component.variant = secondary;
    expect(component.variant).toBe(secondary);

    component.variant = tonal;
    expect(component.variant).toBe(tonal);

    component.variant = text;
    expect(component.variant).toBe(text);
  });

  it('should set classList', async () => {
    const classList = new ClassList({
      ...config.md,
      ...config.primary
    });
    component.classList = classList;

    expect(component.classList.value()).toEqual(classList.value());
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
      expect(testApp.button().classList.value().includes(c)).toBeTrue();
    });

    expect(testApp.button().classList.value().includes(defaultGap)).toBeFalse();
    expect(testApp.button().classList.value().includes(defaultBgColor)).toBeFalse();
    expect(testApp.button().classList.value().includes(defaultRadius)).toBeFalse();
  });

  it('should customize using dependency injection', fakeAsync(() => {
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

    tick();

    Str.toArray(customizations).forEach(c => {
      expect(testApp.button().classList.value().includes(c)).toBeTrue();
    });

    expect(testApp.button().classList.value().includes(defaultGap)).toBeFalse();
    expect(testApp.button().classList.value().includes(defaultBgColor)).toBeFalse();
    expect(testApp.button().classList.value().includes(defaultRadius)).toBeFalse();
  }, { flush: true }));

  it('should update classList', async () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white', 'gap-2'];
    const defaultRadius = GetButtonConfig().primary.gap!;

    await component.classList.update(newClassList);

    newClassList.forEach(c => {
      expect(component.classList.value().includes(c)).toBeTrue();
    });

    expect(component.classList.value().includes(defaultRadius)).toBeFalse();
  });

  it('should set isFab', () => {
    expect(component.isFab).toBeFalse();
    component.isFab = true;
    expect(component.isFab).toBeTrue();
  });

});

