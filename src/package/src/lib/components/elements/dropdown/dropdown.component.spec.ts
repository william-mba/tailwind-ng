import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import { DropdownConfig, provideDropdownConfig } from './dropdown.config';
import { toClassNames } from '../../../core/helpers/config.helper';
import { Dropdown } from './dropdown';

describe('Dropdown Component', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;
  const CLASS_NAMES = 'shadow-lg *:justify-start *:rounded-none *:shadow-none';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent],
      providers: [
        provideDropdownConfig(CustomDropdownConfig),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class names', () => {
    (component as DropdownComponent).class = CLASS_NAMES;
    expect(component.class).toBe(CLASS_NAMES);
  })


  it('should set custom configs', async () => {
    expect(component.class).toContain(toClassNames(CustomDropdownConfig));
  });
});
