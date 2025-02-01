import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Dialog, DialogBase, OverlayPosition } from '@tailwind-ng/core';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  host: {
    role: 'dialog',
    '[attr.aria-modal]': 'isModal',
  },
  template: `<ng-content select='tw-dialog-container, [tw-dialog-container], [twDialogContainer]'/>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DialogBase, useExisting: DialogComponent }]
})
export class DialogComponent extends DialogBase implements Dialog {
  @Input() position?: OverlayPosition;
  @Input() displayDuration!: number;
  @Input() autoClose = false;
  @Input() autoFocus = true;
  @Input() isModal = true;

  protected override onInit(): void {
    if (this.position) {
      this.classList.init(this.position);
    }
    this.config.subscribe(config => {
      this.classList.set({
        s: config.scrim, b: this.isModal && !this.position ? config.backdrop : {}
      });
      if (this.position) {
        this.classList.update('inset-');
      }
    });
  }
  private lastFocusedElement?: HTMLElement;
  override open() {
    if (!this.isOpened) {
      this.lastFocusedElement = this._document.activeElement as HTMLElement;
      super.open();
    }
  }

  override close() {
    if (this.isOpened) {
      super.close();
      this.lastFocusedElement?.focus({ preventScroll: true });
    }
  }
}
