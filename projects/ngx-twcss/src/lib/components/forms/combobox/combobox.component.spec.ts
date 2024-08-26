import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Combobox } from './combobox.component';
import { provideButtonConfig } from '../../elements/button/button.config';

describe('Combobox Component', () => {
  let component: Combobox;
  let fixture: ComponentFixture<Combobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Combobox],
      providers: [provideButtonConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(Combobox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
