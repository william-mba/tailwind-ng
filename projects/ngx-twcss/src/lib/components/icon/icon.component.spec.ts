import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Icon } from './icon.component';
import { IconConfig } from './icon.config';
import { toClassNames } from '../../core/helpers/config.helper';

describe('Icon Component', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon]
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class', () => {
    const CUSTOM_CLASSNAMES = 'text-yellow-500';
    component.class = CUSTOM_CLASSNAMES;
    expect(component.class).toBe(CUSTOM_CLASSNAMES);
  });

  it('should set size', () => {
    const size = 'lg';
    component.size = 'lg';
    expect(component.size).toBe(size);
  });

  it('should set default config', () => {
    spyOn(component, 'setConfig');

    const DEFAULT_CONFIG = toClassNames(IconConfig.size[component.size]!);
    component.ngOnInit();

    expect(component.setConfig).toHaveBeenCalled();
    expect(component.config).toContain(DEFAULT_CONFIG);
  });

});
