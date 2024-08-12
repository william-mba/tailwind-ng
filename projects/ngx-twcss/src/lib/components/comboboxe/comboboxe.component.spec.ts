import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comboboxe } from './comboboxe.component';
import { ConfigService } from '../../core/services/config.service';

describe('Comboboxe Component', () => {
  let component: Comboboxe;
  let fixture: ComponentFixture<Comboboxe>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comboboxe]
    }).compileComponents();

    configService = TestBed.inject(ConfigService);
    configService.setButton();
    configService.setDropdown();

    fixture = TestBed.createComponent(Comboboxe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
