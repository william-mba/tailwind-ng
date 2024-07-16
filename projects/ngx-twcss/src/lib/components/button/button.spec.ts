import { Button } from './button';
import { ButtonConfig, ButtonSize } from './button.config';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ElementRef, inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('Button', () => {
  let component: Button;
  const primaryStyle = toClassName(ButtonConfig.primary);
  const secondaryStyle = toClassName(ButtonConfig.secondary);
  const tonalStyle = toClassName(ButtonConfig.tonal);
  const sizeVariants = ['sm', 'md', 'lg'] as ButtonSize[];

  beforeEach(async () => {
    TestBed.runInInjectionContext(() => {
      component = new Button(new ElementRef('tw-button'));
    });

    spyOn(component, 'ngOnInit');
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should init config', () => {
    spyOn(component, 'initConfig');
    component.initConfig();
    expect(component.initConfig).toHaveBeenCalled();
  });

  it('should set variant', () => {
    expect(component.variant).toBeDefined()
    component.variant = 'primary';
    expect(component.variant).toBe('primary');
    component.variant = 'secondary';
    expect(component.variant).toBe('secondary');
    component.variant = 'tonal';
    expect(component.variant).toBe('tonal');
    component.variant = 'text';
    expect(component.variant).toBe('text');
  });

  it('should set config', () => {
    expect(component.config).toBeUndefined();

    component.config = resolveClassName(primaryStyle, component.className);
    expect(component.config).toEqual(primaryStyle);

    component.config = resolveClassName(secondaryStyle, component.className);
    expect(component.config).toEqual(secondaryStyle);

    component.config = resolveClassName(tonalStyle, component.className);
    expect(component.config).toEqual(tonalStyle);
  });

  it('should set custom style', () => {
    let classToAdd = 'text-red-500 bg-blue-500';
    component.config = resolveClassName(primaryStyle, classToAdd);

    expect(component.config).toContain(classToAdd);

    let classToRemove = 'text- bg-';
    component.config = resolveClassName(primaryStyle, classToRemove);
    expect(component.config).not.toContain(classToAdd);
  });

  it('should set size', () => {
    expect(component.size).toBeDefined();
    component.size = sizeVariants[0];
    expect(component.size).toBe('sm');
    component.size = sizeVariants[1];
    expect(component.size).toBe('md');
    component.size = sizeVariants[2];
    expect(component.size).toBe('lg');
  });
});
