import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesComponent } from './themes.component';

describe('ThemesComponent', () => {
  let component: ThemesComponent;
  let fixture: ComponentFixture<ThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
