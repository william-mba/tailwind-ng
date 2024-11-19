import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ModalDialogConfig } from '../../modal-dialog.config';
import { objectToArray } from '../../../../core/utils/object.util';
import { ElementBaseDirective } from '../../../../core/bases/element-base.directive';

/**Dialog content element */
@Component({
  selector: 'tw-dialog-content, [tw-dialog-content], [twDialogContent]',
  exportAs: 'twDialogContent',
  standalone: true,
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogContentComponent extends ElementBaseDirective<HTMLElement> {
  protected override buildStyle(): void {
    this._configManager.get<ModalDialogConfig>('ModalDialog').subscribe(config => {
      this.classList.merge(objectToArray(config.content));
    });
  }
}
