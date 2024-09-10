import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxItemComponent } from './combobox-item.component';
import { provideComboboxItemConfig } from './combobox-item.config';
import { ComboboxItem } from './combobox-item';
import { ComboboxComponent } from '../combobox.component';
import { provideComboboxConfig } from '../combobox.config';

describe('Combobox Item Component', () => {
  let component: ComboboxItem;
  let fixture: ComponentFixture<ComboboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxItemComponent],
      providers: [provideComboboxItemConfig(), provideComboboxConfig()],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxItemComponent);
    component = fixture.componentInstance;
    TestBed.runInInjectionContext(() => {
      component.combobox = new ComboboxComponent();
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
