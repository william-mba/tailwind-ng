import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRefComponent } from './api-ref.component';

describe('ApiRefComponent', () => {
  let component: ApiRefComponent;
  let fixture: ComponentFixture<ApiRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
