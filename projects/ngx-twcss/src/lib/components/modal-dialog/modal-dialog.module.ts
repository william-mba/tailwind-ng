import { NgModule } from '@angular/core';
import { DialogContent, DialogActions, DialogIcon, ModalDialog, DialogPanel } from './modal-dialog.component';

@NgModule({
  imports: [
    DialogIcon,
    DialogContent,
    DialogActions,
    ModalDialog,
    DialogPanel
  ],
  exports: [
    DialogIcon,
    DialogContent,
    DialogActions,
    ModalDialog,
    DialogPanel
  ]
})
export class ModalDialogModule { }
