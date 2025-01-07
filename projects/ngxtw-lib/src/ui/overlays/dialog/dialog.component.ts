import { ChangeDetectionStrategy, Component, contentChild, ViewEncapsulation } from '@angular/core';
import { PopupDirective } from '../../../core/directives/popup.directive';
import { Dialog } from './dialog.interface';
import { DialogScrim } from './dialog-scrim.directive';
import { DialogContainer } from './dialog-container.directive';

/** Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  imports: [DialogScrim],
  template: `
    <div> <!-- Added so that host element only have one direct child to deal with -->
      <ng-content select='tw-dialog-backdrop, [tw-dialog-backdrop], [twDialogBackdrop]' />
      <div tw-dialog-scrim [class]="className">
        <ng-content select='tw-dialog-container, [tw-dialog-container], [twDialogContainer]' />
      </div>
    </div>
  `,
  host: {
    '[attr.class]': 'null',
  },
  inputs: ['animationDuration', 'displayDuration', 'autoClose', 'autoFocus'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent extends PopupDirective implements Dialog {
  protected clonedChild!: Element;
  container = contentChild.required(DialogContainer);
  displayDuration!: number;
  animationDuration = 500;
  autoClose = false;
  autoFocus = true;

  protected override onInit(): void {
    if (this.autoClose) {
      this.opened.subscribe(() => {
        this.closeAfter(this.displayDuration);
      });
      if (this.isOpened) {
        this.closeAfter(this.displayDuration);
      }
    }
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
    this.initEventListeners();

    if (this.clonedChild) {
      this.nativeElement.appendChild(this.clonedChild);
    }
    if (this.autoFocus) {
      this.focusPrimaryActionOrDefault();
    }
  }

  private focusPrimaryActionOrDefault() {
    const id = setTimeout(() => {
      const action = this.container().nativeElement.querySelector('button[variant=primary]') as HTMLElement;
      if (action) {
        action.focus();
      } else {
        const icon = this.container().nativeElement.querySelector('tw-icon') as HTMLElement;
        if (icon) {
          icon.tabIndex = 0;
          icon.focus();
        }
      }
      clearTimeout(id);
    }, this.animationDuration);
  }

  protected onClose() {
    this.removeEventListeners();

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

  protected initEventListeners(): void {
    this.container().nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.container().nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.container().nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), true);
  }

  protected removeEventListeners(): void {
    this.container().nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), true);
    this.container().nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), true);
    this.container().nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), true);
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        this.close();
        break;
      case ' ':
      case 'Enter':
        const icon = this.container().nativeElement.querySelector('tw-icon') as HTMLElement;
        if (icon && icon === document.activeElement) {
          event.preventDefault();
          icon.tabIndex = 0;
          icon.click();
        }
        break;
    }
  }

  protected onPointerEvent(event: UIEvent) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    switch (event.type) {
      case 'pointerover':
        if (this.isHovered) return;
        this.isHovered = true;
        break;
      case 'pointerleave':
        if (!this.isHovered) return;
        this.isHovered = false;
        break;
    }
  }
}
