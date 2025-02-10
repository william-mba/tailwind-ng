import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglesComponent } from './toggles.component';

describe('TogglesComponent', () => {
  let component: TogglesComponent;
  let fixture: ComponentFixture<TogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogglesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
