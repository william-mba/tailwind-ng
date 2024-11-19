import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxComponent } from './combobox.component';
import { Combobox } from './combobox.interface';
import { provideButtonConfig } from '../../elements/button/button.config';
import { provideComboboxConfig } from './combobox.config';
import { provideDropdownConfig } from '../../elements/dropdown/dropdown.config';
import { provideIconConfig } from '../../elements/icon/icon.config';

describe('Combobox Component', () => {
  let component: Combobox;
  let fixture: ComponentFixture<Combobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxComponent],
      providers: [
        provideButtonConfig(),
        provideComboboxConfig(),
        provideDropdownConfig(),
        provideIconConfig()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
