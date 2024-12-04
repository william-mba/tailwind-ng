import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ModalDialogConfig } from '../../modal-dialog.config';
import { ElementBaseDirective } from '../../../../core/bases/element-base.directive';

/**Dialog icon element */
@Component({
  selector: 'tw-dialog-icon, [tw-dialog-icon], [twDialogIcon]',
  exportAs: 'twDialogIcon',
  standalone: true,
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogIconComponent extends ElementBaseDirective<HTMLElement> {
  protected override buildStyle(): void {
    this._configManager.get<ModalDialogConfig>('ModalDialog')
      .subscribe(config => {
        this.classList.setFrom(config.icon);
      });
  }
}
