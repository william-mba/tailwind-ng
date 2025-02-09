import { Directive, Input, inject, output } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Popup, PopupExtraOptons } from '../interfaces/popup';
import { ZIndexer } from '../injectables/z-index.service';

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
  @Input() options?: PopupExtraOptons;
  toggled = output<boolean>();
  opened = output<void>();
  closed = output<void>();

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
    }
  }

  close(): void {
    if (this.isOpened) {
      this.isOpened = false;
      this.closed.emit();
      if (this.options) {
        const { trigger } = this.options;
        const { focusTrigger } = this.options.afterClosing;
        if (trigger && focusTrigger) trigger.focus();
      }
    }
  }

  closeAfter(delay?: number): void {
    if (!isAcceptableDelay(delay || 0)) {
      delay = 2000;
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
