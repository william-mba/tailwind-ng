import { provideButtonConfig } from '../button/button.config';
import { ButtonGroup } from './button-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Button Group Component', () => {
  let component: ButtonGroup;
  let fixture: ComponentFixture<ButtonGroup>;
  const CUSTOM_CLASSNAMES = 'border border-inherit p-1.5 rounded-xl';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroup],
      providers: [provideButtonConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class names', () => {
    component.class = CUSTOM_CLASSNAMES;
    expect(component.class).toBe(CUSTOM_CLASSNAMES);
  })
});
