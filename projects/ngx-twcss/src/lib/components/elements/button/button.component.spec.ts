import { ButtonComponent } from './button.component';
import { BUTTON_CONFIG, ButtonSizeOptions, provideButtonConfig } from './button.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button Component', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;
  let primaryStyle: string = '';
  let secondaryStyle: string = '';
  let tonalStyle: string = '';
  const sizeOptions = ['sm', 'md', 'lg'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
      providers: [
        provideButtonConfig(),
      ],
    }).compileComponents();

    TestBed.runInInjectionContext(()=> {
      const config = TestBed.inject(BUTTON_CONFIG);
      primaryStyle = toClassNames(config.primary);
      secondaryStyle = toClassNames(config.secondary);
      tonalStyle = toClassNames(config.tonal);
    });

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should set class names', () => {
    component.class = primaryStyle;
    expect(component.class).toEqual(primaryStyle);

    component.class = secondaryStyle;
    expect(component.class).toEqual(secondaryStyle);

    component.class = tonalStyle;
    expect(component.class).toEqual(tonalStyle);
  });

  it('should set custom style', () => {
    let classToAdd = 'text-red-500 bg-blue-500';
    component.class = mergeClassNames(primaryStyle, classToAdd);

    expect(component.class).toContain(classToAdd);

    let classToRemove = 'text- bg-';
    component.class = mergeClassNames(primaryStyle, classToRemove);
    expect(component.class).not.toContain(classToAdd);
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
