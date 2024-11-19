import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ModalDialogConfig } from '../modal-dialog.config';
import { ElementBaseDirective } from '../../../core/bases/element-base.directive';

/**Dialog panel element */
@Component({
  selector: 'tw-dialog-panel, [tw-dialog-panel], [twDialogPanel]',
  exportAs: 'twDialogPanel',
  standalone: true,
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogPanelComponent extends ElementBaseDirective<HTMLElement> {
  protected override buildStyle(): void {
    this._configManager.get<ModalDialogConfig>('ModalDialog')
      .subscribe(config => {
        this.classList.setFrom(config.panel);
      });
  }
}
