import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupDemoComponent } from './button-group-demo.component';

describe('ButtonGroupDemoComponent', () => {
  let component: ButtonGroupDemoComponent;
  let fixture: ComponentFixture<ButtonGroupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonGroupDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
