import { Directive } from "@angular/core";
import { ElementBaseDirective } from "../../../core/directives/element-base.directive";
import { DialogConfig } from "./dialog.config";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
})
export class DialogContainer extends ElementBaseDirective {
  override onInit() {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.container);
    });
  }
}
