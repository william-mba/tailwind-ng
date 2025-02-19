import { Directive, Input, inject, model } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Popup, PopupExtraOptons } from '../interfaces/popup';
import { ZIndexer } from '../injectables/z-index.service';

@Directive({
  host: {
    '[attr.id]': 'id',
    '[attr.open]': 'opened() || null',
    '[attr.aria-expanded]': 'opened()',
    '[style.zIndex]': 'zIndex',
  }
})
export abstract class PopupDirective<T extends HTMLElement = HTMLElement> extends BaseDirective<T> implements Popup<T> {
  @Input() zIndex = inject(ZIndexer).next;
  @Input() id = this.randomId('popup');
  @Input() options?: PopupExtraOptons;
  opened = model(false);

  toggle(): void {
    if (this.opened()) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    if (!this.opened()) {
      this.opened.set(true);
    }
  }

  close(): void {
    if (this.opened()) {
      this.opened.set(false);
      if (this.options) {
        const { trigger } = this.options;
        const { focusTriggerOnClose } = this.options;
        if (trigger && focusTriggerOnClose) trigger.focus();
      }
    }
  }

  private timer: number | null = null;

  closeAfter(delay?: number): void {
    if (!isAcceptableDelay(delay || 0)) {
      delay = 2000;
    };
    if (this.timer) return;
    this.timer = setInterval(() => {
      if (!this.isHovered) {
        this.close();
        clearInterval(this.timer!);
        this.timer = null;
      }
    }, delay);
  }
}

function isAcceptableDelay(delay: number): boolean {
  return delay >= 1000 && delay <= (1000 * 10);
}
