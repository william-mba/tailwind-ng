import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import { DropdownConfig, provideDropdownConfig } from './dropdown.config';

describe('Dropdown Component', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  const CLASS_NAMES = 'shadow-lg *:justify-start *:rounded-none *:shadow-none';

  const CustomDropdownConfig: Partial<DropdownConfig> = {
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    divideColor: 'divide-rose-200',
    dark: {
      bgColor: 'dark:bg-rose-900',
      borderColor: 'dark:border-rose-700',
      divideColor: 'dark:divide-rose-700'
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
});
