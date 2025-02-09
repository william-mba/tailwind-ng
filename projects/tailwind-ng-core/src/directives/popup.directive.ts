import { Directive, Input, inject, output } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Popup, PopupType } from '../interfaces/popup';
import { ZIndexer } from '../injectables/z-index.service';
import { BaseActions } from '../interfaces/base';

@Directive({
  host: {
    '[attr.id]': 'id',
    '[attr.open]': 'isOpened || null',
    '[attr.aria-expanded]': 'isOpened',
  }
})
export abstract class PopupDirective<T extends HTMLElement = HTMLElement> extends BaseDirective<T> implements Popup<T> {
  private readonly zIndex = inject(ZIndexer);
  @Input() isOpened = false;
  @Input() id = this.randomId('popup');
  @Input() trigger?: BaseActions;
  toggled = output<boolean>();
  opened = output<void>();
  closed = output<void>();

  abstract readonly type: PopupType;

  toggle(): void {
    if (this.isOpened) {
      this.close();
    } else {
      this.open();
    }
    this.toggled.emit(!!this.isOpened);
  }

  open(): void {
    if (!this.isOpened) {
      this.isOpened = true;
      this.nativeElement.style.zIndex = `${this.zIndex.next}`;
      this.opened.emit();
      this._changeDetector.markForCheck();
    }
  }

  close(): void {
    if (this.isOpened) {
      this.isOpened = false;
      if (this.trigger) {
        this.trigger.focus();
      }
      this.closed.emit();
      this._changeDetector.markForCheck();
    }
  }

  closeAfter(delay: number = 2000): void {
    if (isAcceptableDelay(delay)) {
      delay = delay;
    };
    setInterval(() => {
      if (!this.isHovered) {
        this.close();
      }
    }, delay);
  }
}

function isAcceptableDelay(delay: number): boolean {
  return delay >= 1000 && delay <= (1000 * 10);
}
