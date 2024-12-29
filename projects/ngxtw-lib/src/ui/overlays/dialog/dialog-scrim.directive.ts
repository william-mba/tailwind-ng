import { Directive } from '@angular/core';
import { DialogConfig } from './dialog.config';
import { ElementDirective } from '../../../core/directives/element.directive';

/** Dialog scrim */
@Directive({
  selector: 'tw-dialog-scrim, [tw-dialog-scrim], [twDialogScrim]',
  exportAs: 'twDialogScrim'
})
export class DialogScrim extends ElementDirective {
  protected override onInit(): void {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.scrim);
    });
  }
}
