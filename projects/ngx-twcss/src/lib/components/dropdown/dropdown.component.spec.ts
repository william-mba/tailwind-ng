import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dropdown } from './dropdown.component';
import { DropdownConfig } from './dropdown.config';
import { toClassNames } from '../../core/helpers/config.helper';
import { ConfigService } from '../../core/services/config.service';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('Dropdown Component', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;
  let configService: ConfigService;
  const CONFIG = toClassNames(DropdownConfig);
  const CLASS_NAMES = 'shadow-lg *:justify-start *:rounded-none *:shadow-none';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdown],
      providers: [
        provideAnimations()
      ]
    }).compileComponents();

    configService = TestBed.inject(ConfigService);
    configService.setDropdown();

    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class names', () => {
    component.class = CLASS_NAMES;
    expect(component.class).toBe(CLASS_NAMES);
  })

  it('should set default config', () => {
    component.config = CONFIG;
    expect(component.config).toBe(CONFIG);
  });

  it('should set config', () => {
    spyOn(component, 'setConfig');
    spyOn(component, 'ngOnInit');

    component.config = CLASS_NAMES;
    component.ngOnInit();

    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.setConfig).not.toHaveBeenCalled();
    expect(component.config).toBe(CLASS_NAMES);
  });

  it('should contains custom configs', () => {
    const CustomDropdownConfig: Partial<DropdownConfig> = {
      theme: {
        light: {
          bgColor: 'bg-rose-50',
          borderColor: 'border-rose-200',
          divideColor: 'divide-rose-200'
        },
        dark: {
          bgColor: 'dark:bg-rose-900',
          borderColor: 'dark:border-rose-700',
          divideColor: 'dark:divide-rose-700'
        }
      }
    };

    configService.setDropdown(CustomDropdownConfig);

    expect(component.config).toContain(toClassNames(CustomDropdownConfig));
  });
});
