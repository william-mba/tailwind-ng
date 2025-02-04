import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle.component';
import { GetToggleConfig, provideToggle } from './toggle.component.config';
import { ClassList } from '@tailwind-ng/core';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
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

  it('should get config', () => {
    expect(component.config).toEqual(GetToggleConfig());
  });

  it('should set classlist', async () => {
    const expected = await new ClassList().set(GetToggleConfig());
    expect(component.classList.value()).toEqual(expected.value());
  });
});
