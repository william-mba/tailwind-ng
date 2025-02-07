/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ClassList, Str } from '@tailwind-ng/core';
import { TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { Component, viewChild } from '@angular/core';
import { GetAvatarConfig, provideAvatar } from './avatar.component.config';

describe('AvatarComponent', () => {
  const config = GetAvatarConfig();
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

  it('should set classList', async () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    const classList = new ClassList({ b: config.base, s: config[component.size] });
    component.classList = classList;
    fixture.detectChanges();

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value()).toEqual(classList.value());
  });

  it('should get config', () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.config).toEqual(config);
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
    fixture.detectChanges()

    const avatarConfig = testApp.avatar().config.base!;

    expect(avatarConfig.radius).toBe('rounded-md');
    expect(avatarConfig.ringColor).toBe('ring-white');
    expect(avatarConfig.ringWidth).toBe('ring-2');

    expect(testApp.avatar().classList.value().includes(config.base.radius!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringColor!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringWidth!)).toBeFalse();
  });

  it('should update classList', async () => {
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
    await testApp.avatar().classList.update(newClassList);

    expect(testApp.avatar().classList.value().includes(newClassList[0])).toBeTrue();
    expect(testApp.avatar().classList.value().includes(newClassList[1])).toBeTrue();
    expect(testApp.avatar().classList.value().includes(newClassList[2])).toBeTrue();

    expect(testApp.avatar().classList.value().includes(config.base.radius!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringColor!)).toBeFalse();
    expect(testApp.avatar().classList.value().includes(config.base.ringWidth!)).toBeFalse();
  })

});

