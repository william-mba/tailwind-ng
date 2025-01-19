/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { BadgeComponent } from './badge.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetBadgeConfig, provideBadgeConfig } from './badge.config';
import { Component, viewChild } from '@angular/core';
import { ClassList, Str } from '@tailwind-ng/core';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideBadgeConfig()
      ]
    });
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
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

  it('should set classList', () => {
    const config = GetBadgeConfig();
    const classList = new ClassList();

    classList.setFrom({ b: config.base, s: config[component.size] });

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value).toEqual(classList.value);
  });

  it('should get reactive config', () => {
    const config = GetBadgeConfig();
    component.config$.subscribe(c => {
      expect(c).toEqual(config);
    }).unsubscribe();
  });

  it('should set customizations using class attribute', () => {
    const customizations = 'rounded-md text-blue-500 gap-2 bg-blue-500/10';
    const defaultGap = GetBadgeConfig().base.gap!;
    const defaultFontSize = GetBadgeConfig().base.fontSize!;
    const defaultDisplay = GetBadgeConfig().base.display!;

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [BadgeComponent],
      template: `<tw-badge [class]="customizations">Badge</tw-badge>`
    }) class TestApp {
      badge = viewChild.required(BadgeComponent);
      protected customizations = customizations;
    }

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    Str.toArray(customizations).forEach(c => {
      expect(testApp.badge().classList.value.includes(c)).toBeTrue();
    });

    expect(testApp.badge().classList.value.includes(defaultGap)).toBeFalse();
    expect(testApp.badge().classList.value.includes(defaultFontSize)).toBeTrue();
    expect(testApp.badge().classList.value.includes(defaultDisplay)).toBeTrue();
  });

  it('should set customizations using dependency injection', () => {
    const config = GetBadgeConfig();
    config.base.gap = 'gap-2';
    config.base.ringWidth = 'ring-2';
    config.base.ringColor = 'ring-white';
    const defaultGap = GetBadgeConfig().base.gap!;

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideBadgeConfig(config)
      ]
    });
    const fixture = TestBed.createComponent(BadgeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.classList.value.includes(defaultGap)).toBeFalse();
    expect(component.classList.value.includes(config.base.gap)).toBeTrue();
    expect(component.classList.value.includes(config.base.ringWidth)).toBeTrue();
    expect(component.classList.value.includes(config.base.ringColor)).toBeTrue();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white', 'gap-2'];
    const defaultGap = GetBadgeConfig().base.gap!;

    component.classList.update(newClassList);

    newClassList.forEach(c => {
      expect(component.classList.value.includes(c)).toBeTrue();
    });

    expect(component.classList.value.includes(defaultGap)).toBeFalse();
  })

});

