import { NgModule } from '@angular/core';
import { DialogActionsComponent } from './actions/dialog-actions.component';
import { DialogContentComponent } from './panel/content/dialog-content.component';
import { DialogIconComponent } from './panel/icon/dialog-icon.component';
import { ModalDialogComponent } from './modal-dialog.component';
import { DialogPanelComponent } from './panel/dialog-panel.component';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    DialogIconComponent,
    DialogContentComponent,
    DialogActionsComponent,
    ModalDialogComponent,
    DialogPanelComponent
  ],
  exports: [
    ModalDialogComponent,
    DialogIconComponent,
    DialogContentComponent,
    DialogActionsComponent,
    DialogPanelComponent
  ],
  providers: [
    provideAnimations()
  ]
})
export class ModalDialogModule { }
