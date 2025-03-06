import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Dialog, DialogBase, TwIf, OverlayPosition } from '@tailwind-ng/core';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  imports: [TwIf],
  host: {
    role: 'dialog',
    '[attr.aria-modal]': 'isModal',
    '[class]': 'classList.value',
  },
  template: `<ng-container *twIf="isOpened()"><ng-content /></ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DialogBase, useExisting: DialogComponent }]
})
export class DialogComponent extends DialogBase implements Dialog {
  @Input() position?: OverlayPosition;
  @Input() isModal = true;

  protected override buildStyle(): void {
    this.classList.set({ ...this.config.scrim, ...this.isModal ? this.config.backdrop : {} })
    if (this.position) {
      this.classList.update({ i: 'inset-', ...this.position });
    }
  }
}
