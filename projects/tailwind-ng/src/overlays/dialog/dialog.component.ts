import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { classlist, DIALOG_CONFIG, DialogBase, TwIf } from '@tailwind-ng/core';

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
export class DialogComponent extends DialogBase {
  protected override buildStyle(): void {
    const config = inject(DIALOG_CONFIG);
    let className = `${config.scrim || ''}`;
    if (this.isModal && config.backdrop) {
      className += ` ${config.backdrop}`;
    };
    classlist(this.nativeElement).set(className, this.class);
  }
}
