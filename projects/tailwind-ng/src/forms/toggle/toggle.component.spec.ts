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

  it('should set checked()', () => {
    component.checked.set(true);
    expect(component.checked()).toBeTrue();
  });

  it('should toggle', () => {
    expect(component.checked()).toBeFalse();
    component.toggle();
    expect(component.checked()).toBeTrue();
  });

  it('should set classlist', () => {
    const expected = classlist(GetToggleConfig());
    expect(component.classList.value).toEqual(expected.value);
  });
});
