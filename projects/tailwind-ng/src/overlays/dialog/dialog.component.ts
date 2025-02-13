import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { classlist, Dialog, DialogBase, OverlayPosition, TwIf } from '@tailwind-ng/core';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  host: {
    role: 'dialog',
    '[class]': 'classList.value()',
    '[attr.aria-modal]': 'isModal',
  },
  imports: [TwIf],
  template: `
  <ng-container *twIf="isOpened()">
      <ng-content select='tw-dialog-container, [tw-dialog-container], [twDialogContainer]'/>
  </ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DialogBase, useExisting: DialogComponent }]
})
export class DialogComponent extends DialogBase implements Dialog {
  @Input() position?: OverlayPosition;
  @Input() displayDelay?: number;
  @Input() autoClose = false;
  @Input() autoFocus = true;
  @Input() isModal = true;

  protected override buildStyle(): void {
    this.classList = classlist(this.class).set({
      s: this.config.scrim, b: this.isModal && !this.position ? this.config.backdrop : {}
    })
    if (this.position) {
      this.classList.update({ i: 'inset-', ...this.position });
    }
  }
}
