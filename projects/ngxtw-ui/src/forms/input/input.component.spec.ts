import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { InputConfig, provideInputConfig } from './input.config';
import { ClassList } from '@ngxtw/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideInputConfig()
      ]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should get config', () => {
    expect(component.config.get('Input').value).toEqual(InputConfig());
  });

  it('should set classlist', () => {
    expect(component.classList.value).toEqual(new ClassList().setFrom(InputConfig()).value);
  });
});
