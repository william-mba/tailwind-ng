import { NgModule } from '@angular/core';
import { ModalDialog } from './modal-dialog.component';
import { ModalIcon } from './modal-icon/modal-icon.directive';
import { ModalFooter } from './modal-footer/modal-footer.directive';
import { ModalTitle } from './modal-title/modal-title.directive';
import { ModalMessage } from './modal-message/modal-message.directive';

@NgModule({
  imports: [
    ModalDialog,
    ModalIcon,
    ModalFooter,
    ModalTitle,
    ModalMessage
  ],
  exports: [
    ModalDialog,
    ModalIcon,
    ModalFooter,
    ModalTitle,
    ModalMessage
  ]
})
export class ModalDialogModule { }
