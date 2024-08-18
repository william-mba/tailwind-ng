import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Avatar, AvatarConfig } from './avatar';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';

describe('Avatar Component', () => {
  let component: Avatar;
  let fixture: ComponentFixture<Avatar>;
  const DEFAULT_CONFIG = toClassNames(AvatarConfig);
  const CUSTOM_CLASSNAMES = 'size-6 ring-2 ring-white';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avatar]
    }).compileComponents();

    fixture = TestBed.createComponent(Avatar);
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
    expect(component.setClassNames).not.toHaveBeenCalled();
    expect(component.config).toBe(CUSTOM_CLASSNAMES);
  });

  it('should contains custom configs', () => {
    component.class = CUSTOM_CLASSNAMES;

    component.setClassNames();

    expect(component.config).toContain(mergeClassNames(DEFAULT_CONFIG, component.class));
  });
});
