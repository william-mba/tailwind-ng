import { ButtonGroupComponent } from './button-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideButtonGroupConfig } from './button-group.config';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;
  const CUSTOM_CLASSNAMES = 'border border-inherit p-1.5 rounded-xl';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupComponent],
      providers: [provideButtonGroupConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
