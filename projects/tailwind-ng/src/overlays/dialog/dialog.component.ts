import { AfterContentInit, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ClassList, Dialog, DialogBase, OverlayPosition } from '@tailwind-ng/core';

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
export class DialogComponent extends DialogBase implements Dialog, AfterContentInit {
  @Input() position?: OverlayPosition;
  @Input() displayDuration!: number;
  @Input() autoClose = false;
  @Input() autoFocus = true;
  @Input() isModal = true;
  protected clonedChild!: Element;

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
  }

  ngAfterContentInit(): void {
    if (!this.isOpened) {
      this.onClose();
    }
  }

  override open() {
    if (this.clonedChild) {
      this.nativeElement.appendChild(this.clonedChild);
    }
    super.open();
  }

  override close() {
    super.close();
    this.onClose();
  }

  protected onClose() {
    if (this.nativeElement.children.length === 1) {
      this.clonedChild = this.nativeElement.children[0];
    }
    // Lets animations complete before removing the dialog in the DOM
    setTimeout(() => {
      if (!this.isOpened && this.clonedChild) {
        this.nativeElement.children[0]?.remove();
      }
    }, 300);
  }
}
