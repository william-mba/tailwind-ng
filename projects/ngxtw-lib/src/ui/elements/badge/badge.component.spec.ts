import { BadgeComponent } from './badge.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeConfig, provideBadgeConfig } from './badge.config';
import { Component, input, viewChild } from '@angular/core';
import { SizeOption } from '../../../core/types/size-options.type';
import { ClassList } from '../../../config/classlist';
import { StringHelper } from '../../../core/helpers/string.helper';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set size', () => {
    TestBed.runInInjectionContext(() => {
      const xl = input<SizeOption>('xl');
      const lg = input<SizeOption>('lg');
      const md = input<SizeOption>('md');
      const sm = input<SizeOption>('sm');
      const xs = input<SizeOption>('xs');

      component.size = xl;
      expect(component.size()).toBe(xl());

      component.size = lg;
      expect(component.size()).toBe(lg());

      component.size = md;
      expect(component.size()).toBe(md());

      component.size = sm;
      expect(component.size()).toBe(sm());

      component.size = xs;
      expect(component.size()).toBe(xs());
    });
  });

  it('should set classList', () => {
    const config = BadgeConfig();
    const classList = new ClassList();

    classList.setFrom({ t: config.theme, s: config.size[component.size()] });

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value).toEqual(classList.value);
  });

  it('should get reactive config', () => {
    const config = BadgeConfig();
    expect(component.config.get<BadgeConfig>('Badge').value).toEqual(config);
  });

  it('should set customizations using class attribute', () => {
    const customizations = 'rounded-md text-blue-500 gap-2 bg-blue-500/10';
    const defaultGap = BadgeConfig().theme.gap!;
    const defaultFontSize = BadgeConfig().theme.fontSize!;
    const defaultDisplay = BadgeConfig().theme.display!;

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

    StringHelper.toArray(customizations).forEach(c => {
      expect(testApp.badge().classList.value.includes(c)).toBeTrue();
    });

    expect(testApp.badge().classList.value.includes(defaultGap)).toBeFalse();
    expect(testApp.badge().classList.value.includes(defaultFontSize)).toBeTrue();
    expect(testApp.badge().classList.value.includes(defaultDisplay)).toBeTrue();
  });

  it('should set customizations using dependency injection', () => {
    const config = BadgeConfig();
    config.theme.gap = 'gap-2';
    config.theme.ringWidth = 'ring-2';
    config.theme.ringColor = 'ring-white';
    const defaultGap = BadgeConfig().theme.gap!;

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
    expect(component.classList.value.includes(config.theme.gap)).toBeTrue();
    expect(component.classList.value.includes(config.theme.ringWidth)).toBeTrue();
    expect(component.classList.value.includes(config.theme.ringColor)).toBeTrue();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white', 'gap-2'];
    const defaultGap = BadgeConfig().theme.gap!;

    component.classList.update(newClassList);

    newClassList.forEach(c => {
      expect(component.classList.value.includes(c)).toBeTrue();
    });

    expect(component.classList.value.includes(defaultGap)).toBeFalse();
  })

});
