import { Directive } from "@angular/core";
import { BaseDirective } from '@ngxtw/core';
import { DialogConfig } from "./dialog.config";

@Directive({
  selector: 'tw-dialog-backdrop, [tw-dialog-backdrop], [twDialogBackdrop]',
  exportAs: 'twDialogBackdrop',
})// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogBackdrop extends BaseDirective {
  override onInit() {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.backdrop!);
    });
  }
}
