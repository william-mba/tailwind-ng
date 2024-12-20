import { Directive } from "@angular/core";
import { ElementBaseDirective } from "../../../core/directives/element-base.directive";
import { DialogConfig } from "./dialog.config";

@Directive({
  selector: 'tw-dialog-backdrop, [tw-dialog-backdrop], [twDialogBackdrop]',
  exportAs: 'twDialogBackdrop',
})
export class DialogBackdrop extends ElementBaseDirective {
  override onInit() {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.backdrop);
    });
  }
}
