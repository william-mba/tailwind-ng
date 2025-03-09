import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DialogBase, TwIf } from '@tailwind-ng/core';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  imports: [TwIf],
  template: `<ng-container *twIf="isOpened()"><ng-content /></ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DialogBase, useExisting: DialogComponent }]
})
export class DialogComponent extends DialogBase { }
