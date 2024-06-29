import { NgModule } from '@angular/core';
import { DialogBody, DialogContent, DialogFooter, DialogIcon, ModalDialog } from './modal-dialog.component';

@NgModule({
  imports: [
    DialogBody,
    DialogIcon,
    DialogContent,
    DialogFooter,
    ModalDialog
  ],
  exports: [
    DialogBody,
    DialogIcon,
    DialogContent,
    DialogFooter,
    ModalDialog
  ]
})
export class ModalDialogModule { }
