import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftButtonComponent } from './soft-button.component';

describe('SoftButtonComponent', () => {
  let component: SoftButtonComponent;
  let fixture: ComponentFixture<SoftButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
