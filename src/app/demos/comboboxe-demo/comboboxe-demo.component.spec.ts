import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxeDemoComponent } from './comboboxe-demo.component';

describe('ComboboxeDemoComponent', () => {
  let component: ComboboxeDemoComponent;
  let fixture: ComponentFixture<ComboboxeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboboxeDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboboxeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
