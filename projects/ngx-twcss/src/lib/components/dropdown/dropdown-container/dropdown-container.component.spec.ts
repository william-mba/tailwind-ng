import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownContainer } from './dropdown-container.component';

describe('DropdownContainerComponent', () => {
  let component: DropdownContainer;
  let fixture: ComponentFixture<DropdownContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownContainer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DropdownContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
