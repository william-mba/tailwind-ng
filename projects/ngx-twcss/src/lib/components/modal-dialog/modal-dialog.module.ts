import { NgModule } from '@angular/core';
import { DialogContent, DialogActions, DialogIcon, DialogContainer, DialogPanel } from './modal-dialog.component';
import { provideModalDialogConfig } from './modal-dialog.config';

/**
 * Modal Dialog Module
 */
@NgModule({
  imports: [
    DialogIcon,
    DialogContent,
    DialogActions,
    DialogContainer,
    DialogPanel
  ],
  exports: [
    DialogIcon,
    DialogContent,
    DialogActions,
    DialogContainer,
    DialogPanel
  ],
  providers: [
    provideModalDialogConfig()
  ]
})
export class ModalDialog { }
