import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { DialogBase, ZIndexer } from '@tailwind-ng/core';
import { Dialog } from './dialog.interface';

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
  private readonly zIndex = inject(ZIndexer);
  @Input() displayDuration!: number;
  @Input() animationDuration = 500;
  @Input() autoClose = false;
  @Input() autoFocus = true;
  @Input() isModal = true;
  protected clonedChild!: Element;

  protected override onInit(): void {
    this.config$.subscribe(config => this.classList.set({
      s: config.scrim, b: this.isModal ? config.backdrop : {}
    }));

    if (this.isOpened) {
      this.onOpen();
    } else {
      this.onClose();
    }
  }

  override open() {
    super.open();
    this.onOpen();
  }

  override close() {
    super.close();
    this.onClose();
  }

  protected onOpen() {
    if (this.clonedChild) {
      this.nativeElement.appendChild(this.clonedChild);
    }
    this.nativeElement.style.zIndex = `${this.zIndex.next}`;
  }

  protected onClose() {
    if (this.nativeElement.children.length === 1) {
      this.clonedChild = this.nativeElement.children[0];
    }
    // To ensure animations complete before removing the element
    const id = setTimeout(() => {
      if (!this.isOpened && this.clonedChild) {
        this.nativeElement.children[0]?.remove();
        clearTimeout(id);
      }
    }, this.animationDuration);
  }
}
