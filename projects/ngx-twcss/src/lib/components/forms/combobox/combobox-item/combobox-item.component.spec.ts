import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxItem, IComboboxItem } from './combobox-item.component';
import { provideComboboxItemConfig } from './combobox-item.config';

describe('Combobox Item Component', () => {
  let component: IComboboxItem;
  let fixture: ComponentFixture<IComboboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxItem],
      providers: [provideComboboxItemConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
