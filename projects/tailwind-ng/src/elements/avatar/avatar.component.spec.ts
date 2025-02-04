/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ClassList, Str } from '@tailwind-ng/core';
import { TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { Component, viewChild } from '@angular/core';
import { GetAvatarConfig, provideAvatar } from './avatar.component.config';

describe('AvatarComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideAvatar()
      ]
    });
  });

  it('should set size', () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

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

  it('should set classList', () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const config = GetAvatarConfig();
    const classList = new ClassList();

    classList.set({ b: config.base, s: config[component.size] });

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value()).toEqual(classList.value());
  });

  it('should get config', () => {
    const config = GetAvatarConfig();
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component.config).toEqual(config);
  });

  it('should set customizations using class attribute', () => {
    const defaultRadius = GetAvatarConfig().base.radius!;
    const defaultRingWidth = GetAvatarConfig().base.ringWidth!;
    const defaultRingColor = GetAvatarConfig().base.ringColor!;
    const customizations = 'ring-2 ring-white rounded-md';

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: `
      <img tw-avatar class="ring-2 ring-white rounded-md">
      `
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges()

    Str.toArray(customizations).forEach(c => {
      expect(testApp.avatar().classList.value().includes(c)).toBeTrue();
    })

    expect(testApp.avatar().classList.value().includes(defaultRadius)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(defaultRingColor)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(defaultRingWidth)).toBeFalse();
  });

  it('should set customizations using dependency injection', () => {
    const defaultRadius = GetAvatarConfig().base.radius!;
    const defaultRingWidth = GetAvatarConfig().base.ringWidth!;
    const defaultRingColor = GetAvatarConfig().base.ringColor!;
    const customizations = 'ring-2 ring-white rounded-md';

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideAvatar({
          base: {
            ringWidth: 'ring-2',
            ringColor: 'ring-white',
            radius: 'rounded-md'
          }
        })
      ]
    });

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: ` <img tw-avatar >`
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges()

    Str.toArray(customizations).forEach(c => {
      expect(testApp.avatar().classList.value().includes(c)).toBeTrue();
    })

    expect(testApp.avatar().classList.value().includes(defaultRadius)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(defaultRingColor)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(defaultRingWidth)).toBeFalse();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white'];
    const defaultRadius = GetAvatarConfig().base.radius!;
    const defaultRingWidth = GetAvatarConfig().base.ringWidth!;
    const defaultRingColor = GetAvatarConfig().base.ringColor!;

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: ` <img tw-avatar > `
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);

      update() {
        this.avatar().classList.update(newClassList);
      }
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges();
    testApp.update();

    newClassList.forEach(c => {
      expect(testApp.avatar().classList.value().includes(c)).toBeTrue();
    });

    expect(testApp.avatar().classList.value().includes(defaultRadius)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(defaultRingColor)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(defaultRingWidth)).toBeFalse();
  })

});

