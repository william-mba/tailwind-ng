import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle.component';
import { provideToggle } from './toggle.component.config';
import { ClassName, TOGGLE_CONFIG } from '@tailwind-ng/core';

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
    let className = ''
    TestBed.runInInjectionContext(() => {
      className = TestBed.inject(TOGGLE_CONFIG) || '';
    });

    ClassName.toArray(className).forEach(c => {
      expect(component.nativeElement.classList.contains(c)).toBeTrue();
    });
  });
});
