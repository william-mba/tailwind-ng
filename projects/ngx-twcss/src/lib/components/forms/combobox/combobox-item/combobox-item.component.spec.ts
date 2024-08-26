import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxItem } from './combobox-item.component';
import { provideComboboxItemConfig } from './combobox-item.config';

describe('ComboboxStringItemComponent', () => {
  let component: ComboboxItem;
  let fixture: ComponentFixture<ComboboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxItem],
      providers: [provideComboboxItemConfig()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComboboxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
