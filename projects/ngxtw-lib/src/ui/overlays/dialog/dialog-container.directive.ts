import { afterNextRender, Directive } from "@angular/core";
import { BaseDirective } from "../../../core/directives/base.directive";
import { DialogConfig } from "./dialog.config";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    role: 'dialog',
    '[attr.aria-modal]': 'isModal',
    '[tabindex]': 'isDisabled ? null : 0',
  },
  inputs: ['isModal'],
})
export class DialogContainer extends BaseDirective {
  readonly isModal: 'true' | 'false' = 'true';

  constructor() {
    super();
    afterNextRender({
      read: () => {
        this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
      },
    })
  }

  protected override onInit() {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.container);
    });
  }
}
