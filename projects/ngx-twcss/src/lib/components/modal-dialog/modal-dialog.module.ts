import { NgModule } from '@angular/core';
import { DialogContent, DialogActions, DialogIcon, ModalDialog } from './modal-dialog.component';

@NgModule({
  imports: [
    DialogIcon,
    DialogContent,
    DialogActions,
    ModalDialog
  ],
  exports: [
    DialogIcon,
    DialogContent,
    DialogActions,
    ModalDialog
  ]
})
export class ModalDialogModule { }
