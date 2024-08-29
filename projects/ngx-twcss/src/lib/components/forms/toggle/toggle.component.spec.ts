import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IToggle, Toggle } from './toggle.component';
import { provideToggleConfig } from './toggle.config';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('Toggle Component', () => {
  let component: IToggle;
  let fixture: ComponentFixture<IToggle>;

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
