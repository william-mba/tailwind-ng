import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownItem } from './dropdown-item.component';

describe('DropdownItemComponent', () => {
  let component: DropdownItem;
  let fixture: ComponentFixture<DropdownItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownItem]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DropdownItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
