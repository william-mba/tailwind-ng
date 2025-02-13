import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle.component';
import { GetToggleConfig, provideToggle } from './toggle.component.config';
import { classlist } from '@tailwind-ng/core';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideToggle()
      ]
    });
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set isChecked', () => {
    component.isChecked = true;
    expect(component.isChecked).toBeTrue();
  });

  it('should toggle', () => {
    expect(component.isChecked).toBeFalse();
    component.toggle();
    expect(component.isChecked).toBeTrue();
  });

  it('should set classlist', () => {
    const expected = classlist(GetToggleConfig());
    expect(component.classList.value()).toEqual(expected.value());
  });
});
