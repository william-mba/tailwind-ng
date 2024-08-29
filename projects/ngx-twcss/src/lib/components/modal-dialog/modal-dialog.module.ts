import { NgModule } from '@angular/core';
import { provideModalDialogConfig } from './modal-dialog.config';
import { DialogActions } from './actions/dialog-actions.component';
import { DialogContent } from './content/dialog-content.component';
import { DialogIcon } from './icon/dialog-icon.component';
import { DialogContainer } from './modal-dialog.component';
import { DialogPanel } from './panel/dialog-panel.component';

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
