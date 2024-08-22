import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogContainer } from './modal-dialog.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ModalDialogConfig, provideModalDialogConfig } from './modal-dialog.config';
import { toClassNames } from '../../core/helpers/config.helper';

describe('Modal Dialog Component', () => {
  let component: DialogContainer;
  let fixture: ComponentFixture<DialogContainer>;
  const CLASS_NAMES = 'divide-y divide-gray-200 dark:divide-neutral-900';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContainer],
      providers: [
        provideAnimations(),
        provideModalDialogConfig(CustomModalDialogConfig)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class names', () => {
    component.class = CLASS_NAMES;
    expect(component.class).toBe(CLASS_NAMES);
  })

  it('should contains custom configs', async () => {
    expect(component.class).toContain(toClassNames(CustomModalDialogConfig.container!));
  });
});
