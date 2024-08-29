import { Badge, IBadge } from './badge.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideBadgeConfig } from './badge.config';

describe('Badge Component', () => {
  let component: IBadge;
  let fixture: ComponentFixture<IBadge>;
  const CUSTOM_CLASSNAMES = 'text-gray-500 bg-gray-500/10 text-xs';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge],
      providers: [provideBadgeConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(Badge);
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
