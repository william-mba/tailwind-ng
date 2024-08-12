import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogContainer } from './modal-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDialogConfig } from './modal-dialog.config';
import { toClassNames } from '../../core/helpers/config.helper';
import { ConfigService } from '../../core/services/config.service';

describe('Modal Dialog Component', () => {
  let component: DialogContainer;
  let fixture: ComponentFixture<DialogContainer>;
  let configService: ConfigService;
  const CONTAINER_CONFIG = toClassNames(ModalDialogConfig.container);
  const CLASS_NAMES = 'divide-y divide-gray-200 dark:divide-neutral-900';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContainer, BrowserAnimationsModule]
    }).compileComponents();

    configService = TestBed.inject(ConfigService);
    configService.setModalDialog();

    fixture = TestBed.createComponent(DialogContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class', () => {
    component.class = CLASS_NAMES;
    expect(component.class).toBe(CLASS_NAMES);
  })

  it('should set default config', () => {
    component.config = CONTAINER_CONFIG;
    expect(component.config).toBe(CONTAINER_CONFIG);
  });

  it('should set config', () => {
    spyOn(component, 'setConfig');
    spyOn(component, 'ngOnInit');

    component.config = CLASS_NAMES;
    component.ngOnInit();

    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.setConfig).not.toHaveBeenCalled();
    expect(component.config).toBe(CLASS_NAMES);
  });

  it('should contains custom configs', () => {
    const CustomModalDialogConfig: Partial<ModalDialogConfig> = {
      container: {
        theme: {
          bgColor: 'bg-blue-100',
          dark: {
            bgColor: 'dark:bg-blue-800'
          }
        }
      }
    };

    configService.setModalDialog(CustomModalDialogConfig);

    expect(component.config).toContain(toClassNames(CustomModalDialogConfig.container!));
  });
});
