import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Combobox } from './combobox.component';
import { ConfigService } from '../../core/services/config.service';

describe('Combobox Component', () => {
  let component: Combobox;
  let fixture: ComponentFixture<Combobox>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Combobox]
    }).compileComponents();

    configService = TestBed.inject(ConfigService);
    configService.setButton();
    configService.setDropdown();

    fixture = TestBed.createComponent(Combobox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
