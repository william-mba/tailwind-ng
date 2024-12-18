import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxItemComponent } from './combobox-item.component';
import { provideComboboxItemConfig } from './combobox-item.config';
import { ComboboxItem } from './combobox-item.interface';
import { ComboboxComponent } from '../combobox.component';
import { ElementRef } from '@angular/core';

describe('ComboboxItemComponent', () => {
  let component: ComboboxItemComponent;
  let fixture: ComponentFixture<ComboboxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ComboboxComponent,
        {
          provide: ComboboxItemComponent,
          useFactory: () => new ComboboxItemComponent(),
        }, {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('tw-combobox-item') }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxItemComponent);
    component = fixture.componentInstance;
    component.value = 'test item';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
