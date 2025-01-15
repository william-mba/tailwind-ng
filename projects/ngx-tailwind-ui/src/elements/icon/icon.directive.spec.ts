/* eslint-disable @angular-eslint/component-selector */
import { Str } from '@ngx-tailwind/core';
import { TestBed } from '@angular/core/testing';
import { IconDirective } from './icon.directive';
import { Component, ElementRef } from '@angular/core';
import { IconConfig, provideIconConfig } from './icon.config';
import { By } from '@angular/platform-browser';

describe('IconDirective', () => {
  let component: IconDirective;
  const config = IconConfig({
    source: {
      'language': 'fake svg',
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('tw-icon') }
        },
        IconDirective,
        provideIconConfig({ source: config.source })
      ]
    });
    TestBed.runInInjectionContext(() => {
      component = TestBed.inject(IconDirective);
    });
  });

  it('should set config', () => {
    // As set earlier, the source should be the same as the config provided
    expect(component.config.get<IconConfig>('Icon').value).toEqual(config);

    // When no config is provided, the source should be an empty object
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('tw-icon') }
        },
        IconDirective,
        provideIconConfig()
      ]
    });
    TestBed.runInInjectionContext(() => {
      component = TestBed.inject(IconDirective);
    });
    expect(component.config.get<IconConfig>('Icon').value.xs).toEqual(config.xs);
    expect(component.config.get<IconConfig>('Icon').value.sm).toEqual(config.sm);
    expect(component.config.get<IconConfig>('Icon').value.md).toEqual(config.md);
    expect(component.config.get<IconConfig>('Icon').value.lg).toEqual(config.lg);
    expect(component.config.get<IconConfig>('Icon').value.xl).toEqual(config.xl);
    expect(component.config.get<IconConfig>('Icon').value.source).toEqual({});
  });

  it('should get config', () => {
    expect(component.config.get<IconConfig>('Icon').value).toEqual(config);
  });

  it('should set size', () => {
    component.size = 'xl';
    expect(component.size).toBe('xl');

    component.size = 'lg';
    expect(component.size).toBe('lg');

    component.size = 'md';
    expect(component.size).toBe('md');

    component.size = 'sm';
    expect(component.size).toBe('sm');

    component.size = 'xs';
    expect(component.size).toBe('xs');
  });

  it('should apply style based on size', () => {
    @Component({
      template: `
        <tw-icon key="language" />
        <tw-icon size="xs" key="language" />
        <tw-icon size="sm" key="language" />
        <tw-icon size="lg" key="language" />
        <tw-icon size="xl" key="language" />
        `,
      selector: 'app-test',
      imports: [IconDirective]
    }) class TestComponent { }

    const fixture = TestBed.createComponent(TestComponent);
    let icon: HTMLElement;

    icon = fixture.debugElement.query(By.css('tw-icon')).nativeElement;
    fixture.detectChanges();
    // icon with default size
    expect(icon.classList).toContain(config.md.size!);

    icon = fixture.debugElement.query(By.css('tw-icon[size="xs"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.xs.size!);

    icon = fixture.debugElement.query(By.css('tw-icon[size="sm"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.sm.size!);

    icon = fixture.debugElement.query(By.css('tw-icon[size="lg"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.lg.size!);

    icon = fixture.debugElement.query(By.css('tw-icon[size="xl"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.xl.size!);
  });

  it('should customize style using class attribute', () => {
    const customizations = 'my-auto absolute right-3';

    @Component({
      selector: 'app-test',
      imports: [IconDirective],
      template: `
      <tw-icon class="my-auto absolute right-3" key="language" />
      `
    }) class TestComponent { }

    const fixture = TestBed.createComponent(TestComponent);
    const icon = fixture.debugElement.query(By.css('tw-icon')).nativeElement as HTMLElement;
    fixture.detectChanges()

    Str.toArray(customizations).forEach(c => {
      expect(icon.classList).toContain(c);
    })
  });
});

