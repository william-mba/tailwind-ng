import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button.component';
import { ButtonConfig } from './button.config';
import { resolveStyle, toClassName } from '../../core/helpers/config.helper';
import { SizeVariant } from '../base.component';

describe('ButtonComponent', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;
  const primaryStyle = toClassName(ButtonConfig.primary);
  const secondaryStyle = toClassName(ButtonConfig.secondary);
  const softStyle = toClassName(ButtonConfig.soft);
  const sizeVariants = ['sm', 'md', 'lg'] as SizeVariant[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'ngOnInit');

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should init config when style is undefined', () => {
    spyOn(component, 'initConfig');
    component.initConfig();
    expect(component.initConfig).toHaveBeenCalled();
    // default button type is primary so primary config should have been set
    expect(component.style).toContain(primaryStyle);
  });

  it('should set type', () => {
    expect(component.type).toBeDefined()
    component.type = 'primary';
    expect(component.type).toBe('primary');
    component.type = 'secondary';
    expect(component.type).toBe('secondary');
    component.type = 'soft';
    expect(component.type).toBe('soft');
  });

  it('should set style', () => {
    expect(component.style).toBeDefined();

    component.style = resolveStyle(primaryStyle, component.className);
    expect(component.style).toEqual(primaryStyle);

    component.style = resolveStyle(secondaryStyle, component.className);
    expect(component.style).toEqual(secondaryStyle);

    component.style = resolveStyle(softStyle, component.className);
    expect(component.style).toEqual(softStyle);
  });

  it('should set custom style', () => {
    let customStyle = 'text-red-500 bg-blue-500';
    component.className = customStyle;
    component.initConfig();
    expect(component.style).toContain(customStyle);

    customStyle = 'text- bg-';
    component.className = customStyle;
    component.initConfig();
    expect(component.style).not.toContain(customStyle);
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
