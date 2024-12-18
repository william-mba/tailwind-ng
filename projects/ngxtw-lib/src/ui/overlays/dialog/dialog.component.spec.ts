import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogConfig, provideDialogConfig } from './dialog.config';
import { Dialog } from './dialog.interface';
import { DialogComponent } from './dialog.component';

describe('Modal Dialog Component', () => {
  let component: Dialog;
  let fixture: ComponentFixture<Dialog>;
  const CLASS_NAMES = 'divide-y divide-gray-200 dark:divide-neutral-900';
  const CustomDialogConfig: Partial<DialogConfig> = {
    container: {
      bgColor: 'bg-blue-100',
      dark: {
        bgColor: 'dark:bg-blue-800'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
      providers: [
        provideDialogConfig(CustomDialogConfig)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
