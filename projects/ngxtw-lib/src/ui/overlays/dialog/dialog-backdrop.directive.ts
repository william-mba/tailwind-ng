import { Directive } from "@angular/core";
import { BaseDirective } from "../../../core/directives/base.directive";
import { DialogConfig } from "./dialog.config";

@Directive({
  selector: 'tw-dialog-backdrop, [tw-dialog-backdrop], [twDialogBackdrop]',
  exportAs: 'twDialogBackdrop',
})
export class DialogBackdrop extends BaseDirective {
  override onInit() {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.backdrop);
    });
  }
}
