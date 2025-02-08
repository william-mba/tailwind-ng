import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ClassList, Dialog, DialogBase, isHTMLElement, OverlayPosition } from '@tailwind-ng/core';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  host: {
    role: 'dialog',
    '[class]': 'classList.value()',
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
  protected child!: Element;

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set({
        s: this.config.scrim, b: this.isModal && !this.position ? this.config.backdrop : {}
      }).then(() => {
        if (this.position) {
          this.classList.update('inset-');
        }
      });
    }
    if (!this.isOpened) {
      this.handleClose();
    }
  }

  override open() {
    this.handleOpen();
    super.open();
  }

  override close() {
    super.close();
    this.handleClose();
  }

  protected handleClose() {
    this.cloneChild();
    // Lets animations complete before removing the dialog in the DOM
    setTimeout(() => {
      this.removeChild();
    }, 300);
  }

  private cloneChild() {
    if (!this.child && isHTMLElement(this.nativeElement.firstElementChild)) {
      this.child = this.nativeElement.firstElementChild;
    }
  }

  private removeChild() {
    if (!this.isOpened && this.child) {
      this.child.remove();
    }
  }

  private handleOpen() {
    if (this.child) {
      this.nativeElement.appendChild(this.child);
    }
  }
}
