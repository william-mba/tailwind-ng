import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdown } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdown]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
