import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { Badge, BadgeConfig } from './badge.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Badge Component', () => {
  let component: Badge;
  let fixture: ComponentFixture<Badge>;
  const DEFAULT_CONFIG = toClassNames(BadgeConfig);
  const CUSTOM_CLASSNAMES = 'text-gray-500 bg-gray-500/10 text-xs';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge]
    }).compileComponents();

    fixture = TestBed.createComponent(Badge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class names', () => {
    component.class = CUSTOM_CLASSNAMES;
    expect(component.class).toBe(CUSTOM_CLASSNAMES);
  })

  it('should set default config', () => {
    component.config = DEFAULT_CONFIG;
    expect(component.config).toBe(DEFAULT_CONFIG);
  });

  it('should set config', () => {
    spyOn(component, 'setConfig');
    spyOn(component, 'ngOnInit');

    component.config = CUSTOM_CLASSNAMES;
    component.ngOnInit();

    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.setConfig).not.toHaveBeenCalled();
    expect(component.config).toBe(CUSTOM_CLASSNAMES);
  });

  it('should contains custom configs', () => {
    component.class = CUSTOM_CLASSNAMES;

    component.setConfig();

    expect(component.config).toContain(mergeClassNames(DEFAULT_CONFIG, component.class));
  });
});
