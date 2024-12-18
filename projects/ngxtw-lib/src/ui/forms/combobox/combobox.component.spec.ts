import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxComponent } from './combobox.component';
import { Combobox } from './combobox.interface';
import { provideButtonConfig } from '../../elements/button/button.config';
import { provideDropdownConfig } from '../../elements/dropdown/dropdown.config';
import { provideIconConfig } from '../../elements/icon/icon.config';
import { ElementRef } from '@angular/core';

describe('Combobox Component', () => {
  let component: ComboboxComponent;
  let fixture: ComponentFixture<ComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
