import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggle } from './toggle.component';
import { provideToggleConfig } from './toggle.config';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('Toggle Component', () => {
  let component: Toggle;
  let fixture: ComponentFixture<Toggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toggle],
      providers: [
        provideToggleConfig(),
        provideAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Toggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
