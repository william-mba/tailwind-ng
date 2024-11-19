import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDemoComponent } from './dropdown-demo.component';

describe('DropdownDemoComponent', () => {
  let component: DropdownDemoComponent;
  let fixture: ComponentFixture<DropdownDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
