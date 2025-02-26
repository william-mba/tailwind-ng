/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { BadgeComponent } from './badge.component';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { GetBadgeConfig, provideBadge } from './badge.component.config';
import { Component, viewChild } from '@angular/core';
import { classlist } from '@tailwind-ng/core';

describe('BadgeComponent', () => {
  const config = GetBadgeConfig();
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        provideBadge()
      ]
    });
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    component.classList = classlist().set({ b: config.base, s: config.md });
    fixture.detectChanges();
  }));

  it('should set size', () => {
    TestBed.runInInjectionContext(() => {
      const xl = 'xl';
      const lg = 'lg';
      const md = 'md';
      const sm = 'sm';
      const xs = 'xs';

      component.size.set(xl);
      expect(component.size()).toBe(xl);

      component.size.set(lg);
      expect(component.size()).toBe(lg);

      component.size.set(md);
      expect(component.size()).toBe(md);

      component.size.set(sm);
      expect(component.size()).toBe(sm);

      component.size.set(xs);
      expect(component.size()).toBe(xs);
    });
  });

  it('should set classList', () => {
    const classList = classlist().set({ b: config.base, s: config.md });
    expect(component.classList.base()).toEqual(classList.base());
    expect(component.classList.value()).toEqual(classList.value());
  });

  it('should customize using class attribute', () => {
    const customConfig = GetBadgeConfig();
    customConfig.base.gap = 'gap-2';
    customConfig.base.radius = 'rounded-md';
    customConfig.base.bgColor = 'bg-blue-500/10';
    customConfig.base.textColor = 'text-blue-500';
    const expectedClassList = classlist(customConfig.base)
      .set({ b: config.base, s: config.md });

    const defaultGap = GetBadgeConfig().base.gap!;
    const defaultFontSize = GetBadgeConfig().base.fontSize!;
    const defaultDisplay = GetBadgeConfig().base.display!;

    @Component({
      selector: 'test-app',
      imports: [BadgeComponent],
      template: `<tw-badge [class]="config">Badge</tw-badge>`
    }) class TestApp {
      badge = viewChild.required(BadgeComponent);
      protected config = customConfig.base;
    }

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    expect(testApp.badge().classList.base()).toEqual(expectedClassList.base());
    expect(testApp.badge().classList.value()).toEqual(expectedClassList.value());

    expect(testApp.badge().classList.value().includes(defaultGap)).toBeFalse();
    expect(testApp.badge().classList.value().includes(defaultFontSize)).toBeTrue();
    expect(testApp.badge().classList.value().includes(defaultDisplay)).toBeTrue();
  });

  it('should customize using DI', () => {
    const customConfig = GetBadgeConfig({
      base: {
        gap: 'gap-2',
        radius: 'rounded-md',
        bgColor: 'bg-blue-500/10',
        textColor: 'text-blue-500'
      }
    });
    const expectedClassList = classlist().set({ b: customConfig.base, s: customConfig.md });

    const defaultGap = GetBadgeConfig().base.gap!;
    const defaultFontSize = GetBadgeConfig().base.fontSize!;
    const defaultDisplay = GetBadgeConfig().base.display!;

    @Component({
      selector: 'test-app',
      standalone: true,
      providers: [
        provideBadge(customConfig)
      ],
      imports: [BadgeComponent],
      template: `<tw-badge>Badge</tw-badge>`
    }) class TestApp {
      badge = viewChild.required(BadgeComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges();

    expect(testApp.badge().classList.base()).toEqual([]);
    expect(testApp.badge().classList.value()).toEqual(expectedClassList.value());

    expect(testApp.badge().classList.value().includes(defaultGap)).toBeFalse();
    expect(testApp.badge().classList.value().includes(defaultFontSize)).toBeTrue();
    expect(testApp.badge().classList.value().includes(defaultDisplay)).toBeTrue();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white', 'gap-2'];
    const defaultGap = GetBadgeConfig().base.gap!;

    component.classList.update(newClassList);

    newClassList.forEach(c => {
      expect(component.classList.value().includes(c)).toBeTrue();
    });

    expect(component.classList.value().includes(defaultGap)).toBeFalse();
  })

});

