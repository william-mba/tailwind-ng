import { BadgeComponent } from './badge.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideBadgeConfig } from './badge.config';

describe('Badge Component', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;
  const CUSTOM_CLASSNAMES = 'text-gray-500 bg-gray-500/10 text-xs';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent],
      providers: [provideBadgeConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
