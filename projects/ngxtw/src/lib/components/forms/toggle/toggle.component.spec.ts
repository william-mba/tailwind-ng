import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';
import { provideToggleConfig } from './toggle.config';
import { Toggle } from './toggle';

describe('Toggle Component', () => {
  let component: Toggle;
  let fixture: ComponentFixture<Toggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleComponent],
      providers: [
        provideToggleConfig(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
