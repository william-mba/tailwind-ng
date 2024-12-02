import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxtwLibComponent } from './ngxtw-lib.component';

describe('NgxtwLibComponent', () => {
  let component: NgxtwLibComponent;
  let fixture: ComponentFixture<NgxtwLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxtwLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxtwLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
