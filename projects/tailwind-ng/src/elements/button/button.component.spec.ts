/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { SizeOption, ClassList, Str, ButtonVariant } from '@tailwind-ng/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { GetButtonConfig, provideButton } from './button.component.config';
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

  it('should get config', () => {
    const config = GetButtonConfig();
    component.config.subscribe(c => {
      expect(c).toEqual(config);
    }).unsubscribe();
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

  describe('Variant', () => {
    describe('Primary button', () => {
      it('should set classList', () => {
        const config = GetButtonConfig();
        const classList = new ClassList();

        classList.set({
          ...config.primary,
          ...config[component.size]
        });

        expect(component.classList.base).toEqual(classList.base);

        classList.value.forEach(c => {
          expect(component.classList.value.includes(c)).toBeTrue();
        });
      });

      it('should set customizations using class attribute', () => {
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

      it('should set customizations using dependency injection', () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            provideButton({
              primary: {
                gap: 'gap-3',
                bgColor: 'bg-red-600',
                radius: 'rounded-full'
              }
            })
          ]
        });

        @Component({
          selector: 'test-app',
          standalone: true,
          imports: [ButtonComponent],
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
    });

    describe('Secondary button', () => {
      it('should set classList', () => {
        const config = GetButtonConfig();
        const classList = new ClassList();
        classList.set({
          ...config.secondary,
          ...config[component.size]
        });

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        component.variant = 'secondary';
        fixture.detectChanges();

        expect(component.classList.base).toEqual(classList.base);

        classList.value.forEach(c => {
          expect(component.classList.value.includes(c)).toBeTrue();
        });
      });

      it('should set customizations using class attribute', () => {
        const defaultRingColor = GetButtonConfig().secondary.ringColor!;
        const defaultShadow = GetButtonConfig().secondary.boxShadow!;
        const defaultRingWidth = GetButtonConfig().secondary.ringWidth!;
        const defaultRing = GetButtonConfig().secondary.ring!;
        const defaultRadius = GetButtonConfig().md.radius!;
        const customizations = 'rounded-full ring-red-600 ring-3 shadow-lg';

        @Component({
          selector: 'test-app',
          standalone: true,
          imports: [ButtonComponent],
          template: `<button tw-button variant="secondary" [class]="customizations">Test button</button>`
        }) class TestApp {
          button = viewChild.required(ButtonComponent);
          customizations = customizations;
        }

        const appFixture = TestBed.createComponent(TestApp);
        const testApp = appFixture.componentInstance;
        appFixture.detectChanges();

        expect(testApp.button().variant).toBe('secondary');

        Str.toArray(customizations).forEach(c => {
          expect(testApp.button().classList.value.includes(c)).toBeTrue();
        });

        expect(testApp.button().classList.value.includes(defaultRing)).toBeTrue();
        expect(testApp.button().classList.value.includes(defaultRingColor)).toBeFalse();
        expect(testApp.button().classList.value.includes(defaultShadow)).toBeFalse();
        expect(testApp.button().classList.value.includes(defaultRingWidth)).toBeFalse();
        expect(testApp.button().classList.value.includes(defaultRadius)).toBeFalse();
      });

      it('should set customizations using dependency injection', () => {
        const config = GetButtonConfig();
        config.secondary.ringWidth = 'ring-4';
        config.secondary.ringColor = 'ring-red-600';
        config.secondary.radius = 'rounded-full';
        const customizations = 'rounded-full ring-red-600 ring-4';

        const defaultRingWith = GetButtonConfig().secondary.ringWidth!;
        const defaultRing = GetButtonConfig().secondary.ring!;
        const defaultRingColor = GetButtonConfig().secondary.ringColor!;
        const defaultRadius = GetButtonConfig().md.radius!;

        @Component({
          selector: 'test-app',
          standalone: true,
          imports: [ButtonComponent],
          template: `<button variant="secondary" tw-button>Test button</button>`
        }) class TestApp {
          button = viewChild.required(ButtonComponent);
        }

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            provideButton(config)
          ]
        });

        const appFixture = TestBed.createComponent(TestApp);
        const testApp = appFixture.componentInstance;
        appFixture.detectChanges();

        Str.toArray(customizations).forEach(c => {
          expect(testApp.button().classList.value.includes(c)).toBeTrue();
        });

        expect(testApp.button().variant).toBe('secondary');

        expect(testApp.button().classList.value.includes(defaultRadius)).toBeFalse();
        expect(testApp.button().classList.value.includes(defaultRingWith)).toBeFalse();
        expect(testApp.button().classList.value.includes(defaultRingColor)).toBeFalse();
        expect(testApp.button().classList.value.includes(defaultRing)).toBeTrue();
      });

      it('should update classList', () => {
        const newClassList = ['rounded-md', 'ring-4', 'ring-indigo-600', 'ring-inset'];
        const defaultRing = GetButtonConfig().secondary.ring!;
        const defaultRingWidth = GetButtonConfig().secondary.ringWidth!;
        const defaultRingColor = GetButtonConfig().secondary.ringColor!;

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        component.variant = 'secondary';
        fixture.detectChanges();

        component.classList.update(newClassList);

        newClassList.forEach(c => {
          expect(component.classList.value.includes(c)).toBeTrue();
        });

        expect(component.classList.value.includes(defaultRing)).toBeTrue();
        expect(component.classList.value.includes(defaultRingWidth)).toBeFalse();
        expect(component.classList.value.includes(defaultRingColor)).toBeFalse();
      });
    });
  });

  it('should set isFab', () => {
    expect(component.isFab).toBeFalse();
    component.isFab = true;
    expect(component.isFab).toBeTrue();
  });

});

