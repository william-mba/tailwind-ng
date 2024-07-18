import { NgModule } from '@angular/core';
import { DialogContent, DialogActions, DialogIcon, DialogContainer, DialogPanel } from './modal-dialog.component';

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
  ]
})
export class ModalDialog { }
