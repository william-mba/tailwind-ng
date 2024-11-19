import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDialogComponent } from './modal-dialog.component';
import { ModalDialogConfig, provideModalDialogConfig } from './modal-dialog.config';
import { ModalDialog } from './modal-dialog.interface';
import { objectToString } from '../../core/utils/object.util';

describe('Modal Dialog Component', () => {
  let component: ModalDialog;
  let fixture: ComponentFixture<ModalDialog>;
  const CLASS_NAMES = 'divide-y divide-gray-200 dark:divide-neutral-900';
  const CustomModalDialogConfig: Partial<ModalDialogConfig> = {
    container: {
      bgColor: 'bg-blue-100',
      dark: {
        bgColor: 'dark:bg-blue-800'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDialogComponent],
      providers: [
        provideModalDialogConfig(CustomModalDialogConfig)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDialogComponent);
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
    expect(component.class).toContain(objectToString(CustomModalDialogConfig.container!));
  });
});
