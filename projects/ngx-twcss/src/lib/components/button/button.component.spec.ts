import { Button } from './button.component';
import { ButtonConfig, ButtonSizeOptions } from './button.config';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from '../../core/services/config.service';

describe('Button Component', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;
  let configService: ConfigService;
  const primaryStyle = toClassNames(ButtonConfig.primary);
  const secondaryStyle = toClassNames(ButtonConfig.secondary);
  const tonalStyle = toClassNames(ButtonConfig.tonal);
  const sizeOptions = ['sm', 'md', 'lg'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    }).compileComponents();

    configService = TestBed.inject(ConfigService);
    configService.setButton();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    component.config = mergeClassNames(primaryStyle, component.class);
    expect(component.config).toEqual(primaryStyle);

    component.config = mergeClassNames(secondaryStyle, component.class);
    expect(component.config).toEqual(secondaryStyle);

    component.config = mergeClassNames(tonalStyle, component.class);
    expect(component.config).toEqual(tonalStyle);
  });

  it('should set custom style', () => {
    let classToAdd = 'text-red-500 bg-blue-500';
    component.config = mergeClassNames(primaryStyle, classToAdd);

    expect(component.config).toContain(classToAdd);

    let classToRemove = 'text- bg-';
    component.config = mergeClassNames(primaryStyle, classToRemove);
    expect(component.config).not.toContain(classToAdd);
  });

  it('should set size', () => {
    expect(component.size).toBeDefined();
    component.size = sizeOptions[0] as keyof ButtonSizeOptions;
    expect(component.size).toBe('sm');
    component.size = sizeOptions[1] as keyof ButtonSizeOptions;
    expect(component.size).toBe('md');
    component.size = sizeOptions[2] as keyof ButtonSizeOptions;
    expect(component.size).toBe('lg');
  });
});
