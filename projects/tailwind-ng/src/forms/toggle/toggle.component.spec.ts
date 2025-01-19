import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle.component';
import { GetToggleConfig, provideToggleConfig } from './toggle.config';
import { ClassList } from '@tailwind-ng/core';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideToggleConfig()
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
    component.config$.subscribe(c => {
      expect(c).toEqual(GetToggleConfig());
    }).unsubscribe();
  });

  it('should set classlist', () => {
    expect(component.classList.value).toEqual(new ClassList().setFrom(GetToggleConfig()).value);
  });
});
