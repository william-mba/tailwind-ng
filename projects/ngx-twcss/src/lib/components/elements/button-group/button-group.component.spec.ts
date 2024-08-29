import { ButtonGroup, IButtonGroup } from './button-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideButtonGroupConfig } from './button-group.config';

describe('Button Group Component', () => {
  let component: IButtonGroup;
  let fixture: ComponentFixture<IButtonGroup>;
  const CUSTOM_CLASSNAMES = 'border border-inherit p-1.5 rounded-xl';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroup],
      providers: [provideButtonGroupConfig()]
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
