import { Directive } from '@angular/core';
import { DialogConfig } from './dialog.config';
import { BaseDirective } from '../../../core/directives/base.directive';

/** Dialog scrim */
@Directive({
  selector: 'tw-dialog-scrim, [tw-dialog-scrim], [twDialogScrim]',
  exportAs: 'twDialogScrim'
})
export class DialogScrim extends BaseDirective {
  protected override onInit(): void {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.scrim);
    });
  }
}
