import { AfterContentInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DialogConfig } from './dialog.config';
import { PopoverBaseDirective } from '../../../core/directives/popover-base.directive';
import { Dialog } from './dialog.interface';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  template: `
    <div> <!-- Added so that the host element only have one direct child to deal with -->
      <ng-content select='tw-dialog-backdrop, [tw-dialog-backdrop], [twDialogBackdrop]' />
      <div [class]="classList.value" (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseLeave($event)">
        <ng-content select='tw-dialog-container, [tw-dialog-container], [twDialogContainer]' />
      </div>
    </div>
  `,
  host: {
    '[role]': 'dialog',
    '[attr.class]': 'null',
    '[attr.aria-modal]': 'isOpened',
  },
  inputs: ['transitionDuration', 'isAutoClose', 'displayDuration'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent extends PopoverBaseDirective implements Dialog, AfterContentInit {
  protected clonedChild!: Element;
  displayDuration!: number;
  transitionDuration = 500;
  isAutoClose = false;

  protected override onInit(): void {
    this.config.get<DialogConfig>('ModalDialog').subscribe(config => {
      this.classList.setFrom(config.scrim);
    });
  }

  ngAfterContentInit(): void {
    if (!this.isOpened) this.onClose();

    if (this.isAutoClose) {
      this.opened.subscribe(() => {
        this.closeAfter(this.displayDuration);
      });
      if (this.isOpened) {
        this.closeAfter(this.displayDuration);
      }
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
    }, this.transitionDuration);
  }
}
