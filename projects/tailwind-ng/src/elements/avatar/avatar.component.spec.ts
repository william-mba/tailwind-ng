/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { classlist, Str } from '@tailwind-ng/core';
import { TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { Component, viewChild } from '@angular/core';
import { GetAvatarConfig, provideAvatar } from './avatar.component.config';

describe('AvatarComponent', () => {
  const config = GetAvatarConfig();
  beforeEach(() => {
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
    const classList = classlist({ b: config.base, s: config[component.size] });

    fixture.detectChanges();

    expect(component.classList.value()).toEqual(classList.value());
  });

  it('should customize using class attribute', () => {
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

    expect(testApp.avatar().classList.value().includes(config.base.radius!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringColor!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringWidth!)).toBeFalse();
  });

  it('should customize using DI', () => {
    @Component({
      selector: 'test-app',
      standalone: true,
      providers: [
        provideAvatar({
          base: {
            ringWidth: 'ring-2',
            ringColor: 'ring-white',
            radius: 'rounded-md'
          }
        })
      ],
      imports: [AvatarComponent],
      template: ` <img tw-avatar >`
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    const avatar = testApp.avatar();
    fixture.detectChanges();

    expect(avatar.classList.value().includes('ring-2')).toBeTrue();
    expect(avatar.classList.value().includes('ring-white')).toBeTrue();
    expect(avatar.classList.value().includes('rounded-md')).toBeTrue();

    expect(avatar.classList.value().includes(config.base.radius!)).toBeFalse();
    expect(avatar.classList.value().includes(config.base.ringColor!)).toBeFalse();
    expect(avatar.classList.value().includes(config.base.ringWidth!)).toBeFalse();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white'];

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: ` <img tw-avatar > `
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges();
    testApp.avatar().classList.update(newClassList);

    expect(testApp.avatar().classList.value().includes(newClassList[0])).toBeTrue();
    expect(testApp.avatar().classList.value().includes(newClassList[1])).toBeTrue();
    expect(testApp.avatar().classList.value().includes(newClassList[2])).toBeTrue();

    expect(testApp.avatar().classList.value().includes(config.base.radius!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringColor!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringWidth!)).toBeFalse();
  })

});

