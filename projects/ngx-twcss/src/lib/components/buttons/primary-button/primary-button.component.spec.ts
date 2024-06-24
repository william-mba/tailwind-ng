import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryButton } from './primary-button.component';
import { PrimaryButtonConfig } from './primary-button.config';
import { toClassName } from '../../../core/helpers/config.helper';
import { SizeVariant } from '../../base.component';

describe('PrimaryButtonComponent', () => {
  let component: PrimaryButton;
  let fixture: ComponentFixture<PrimaryButton>;
  const config = toClassName(PrimaryButtonConfig);
  const sizeVariants = ['sm', 'md', 'lg'] as SizeVariant[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PrimaryButton);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'ngOnInit');

    component.className = config;

    component.ngOnInit();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalled();
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

  it('should set className', () => {
    expect(component.className).toBeDefined();
    expect(component.className).toEqual(config);
  });


  it('should init config', () => {
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
