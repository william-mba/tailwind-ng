import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftButton } from './soft-button.component';
import { toClassName } from '../../../core/helpers/config.helper';
import { SizeVariant } from '../../base.component';
import { SoftButtonConfig } from './soft-button.config';

describe('SoftButtonComponent', () => {
  let component: SoftButton;
  let fixture: ComponentFixture<SoftButton>;
  const config = toClassName(SoftButtonConfig);
  const sizeVariants = ['sm', 'md', 'lg'] as SizeVariant[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftButton);
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
