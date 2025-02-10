import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsComponent } from './dropdowns.component';

describe('DropdownsComponent', () => {
  let component: DropdownsComponent;
  let fixture: ComponentFixture<DropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
