import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupsComponent } from './button-groups.component';

describe('ButtonGroupsComponent', () => {
  let component: ButtonGroupsComponent;
  let fixture: ComponentFixture<ButtonGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
