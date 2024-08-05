import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comboboxe } from './comboboxe.component';

describe('ComboboxeComponent', () => {
  let component: Comboboxe;
  let fixture: ComponentFixture<Comboboxe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comboboxe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Comboboxe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
