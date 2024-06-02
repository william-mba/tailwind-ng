import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftButton } from './soft-button.component';

describe('SoftButton', () => {
  let component: SoftButton;
  let fixture: ComponentFixture<SoftButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
