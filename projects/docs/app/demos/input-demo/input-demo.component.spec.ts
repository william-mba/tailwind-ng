import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemoComponent } from './input-demo.component';

describe('InputDemoComponent', () => {
  let component: InputDemoComponent;
  let fixture: ComponentFixture<InputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
