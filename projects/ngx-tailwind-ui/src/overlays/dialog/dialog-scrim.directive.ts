import { Directive } from '@angular/core';
import { DialogConfig } from './dialog.config';
import { BaseDirective } from '@ngx-tailwind/core';

/** Dialog scrim */
@Directive({
  selector: 'tw-dialog-scrim, [tw-dialog-scrim], [twDialogScrim]',
  exportAs: 'twDialogScrim'
}) // eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogScrim extends BaseDirective {
  protected override onInit(): void {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.scrim!);
    });
  }
}
