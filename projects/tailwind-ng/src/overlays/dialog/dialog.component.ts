import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { classlist, Dialog, DialogBase, TwIf, OverlayPosition } from '@tailwind-ng/core';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  imports: [TwIf],
  host: {
    role: 'dialog',
    '[class]': 'classList.value()',
    '[attr.aria-modal]': 'isModal',
  },
  template: `<ng-container *twIf="opened()"><ng-content /></ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DialogBase, useExisting: DialogComponent }]
})
export class DialogComponent extends DialogBase implements Dialog {
  @Input() position?: OverlayPosition;
  @Input() isModal = true;
  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set({
      ...this.config.scrim, ...this.isModal ? this.config.backdrop : {}
    })
    if (this.position) {
      this.classList.update({ i: 'inset-', ...this.position });
    }
  }
}
