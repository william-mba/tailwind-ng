import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupsComponent } from './radio-groups.component';

describe('RadioGroupsComponent', () => {
  let component: RadioGroupsComponent;
  let fixture: ComponentFixture<RadioGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
