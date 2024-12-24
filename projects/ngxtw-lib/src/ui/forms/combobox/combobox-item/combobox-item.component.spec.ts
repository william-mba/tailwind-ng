import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxItemComponent } from './combobox-item.component';
import { ComboboxComponent } from '../combobox.component';
import { ElementRef } from '@angular/core';
import { ComboboxItemConfig } from './combobox-item.config';
import { ReactiveConfig } from '../../../../config/reactive-config';

describe('ComboboxItemComponent', () => {
  let comboboxItem: ComboboxItemComponent;
  let fixture: ComponentFixture<ComboboxItemComponent>;
  let itemValue = 'dummy value';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComboboxComponent,
        ReactiveConfig,
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('tw-combobox-item') }
        }
      ],
    });
    fixture = TestBed.createComponent(ComboboxItemComponent);
    comboboxItem = fixture.componentInstance;
    comboboxItem.value = itemValue;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comboboxItem).toBeTruthy();
  });

  it('should set a value', () => {
    expect(comboboxItem.value).toBe(itemValue);
  });

  it('should get config', () => {
    expect(comboboxItem.config.get('ComboboxItem').value).toEqual(ComboboxItemConfig());
  });
});
