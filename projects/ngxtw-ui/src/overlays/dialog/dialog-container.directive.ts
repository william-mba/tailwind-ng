import { afterNextRender, Directive, Input } from "@angular/core";
import { BaseDirective } from '@ngxtw/core';
import { DialogConfig } from "./dialog.config";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    role: 'dialog',
    '[attr.aria-modal]': 'isModal',
    '[tabindex]': 'isDisabled ? null : 0',
  }
}) // eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogContainer extends BaseDirective {
  @Input() isModal: 'true' | 'false' = 'true';

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
      this.classList.setFrom(config.container!);
    });
  }
}
