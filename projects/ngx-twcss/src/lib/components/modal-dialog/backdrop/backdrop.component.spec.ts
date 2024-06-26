import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backdrop } from './backdrop.component';

describe('BackdropComponent', () => {
  let component: Backdrop;
  let fixture: ComponentFixture<Backdrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Backdrop]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Backdrop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
