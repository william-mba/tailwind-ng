import { NgModule } from '@angular/core';
import { provideModalDialogConfig } from './modal-dialog.config';
import { DialogActionsComponent } from './actions/dialog-actions.component';
import { DialogContentComponent } from './content/dialog-content.component';
import { DialogIconComponent } from './icon/dialog-icon.component';
import { ModalDialogComponent } from './modal-dialog.component';
import { DialogPanelComponent } from './panel/dialog-panel.component';

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
    provideModalDialogConfig()
  ]
})
export class ModalDialogModule { }
