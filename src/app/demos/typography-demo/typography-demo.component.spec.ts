import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyDemoComponent } from './typography-demo.component';

describe('TypographyDemoComponent', () => {
  let component: TypographyDemoComponent;
  let fixture: ComponentFixture<TypographyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypographyDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypographyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
