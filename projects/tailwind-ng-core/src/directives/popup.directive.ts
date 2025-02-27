import { Directive, Input, inject, model } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Popup, PopupTrigger } from '../interfaces/popup';
import { ZIndexer } from '../injectables/z-index.service';
import { isObject } from '../helpers';

@Directive({
  host: {
    '[attr.id]': 'id',
    '[attr.open]': 'opened() || null',
    '[attr.aria-expanded]': 'opened()'
  }
})
export abstract class PopupDirective<T extends HTMLElement = HTMLElement> extends BaseDirective<T> implements Popup<T> {
  private readonly _zIndex = inject(ZIndexer);
  @Input() id = this.randomId('popup');
  @Input() restoreFocus: boolean | PopupTrigger = false;
  opened = model(false);

  protected get zIndex(): string {
    return `${this._zIndex.next}`;
  }

  toggle(): void {
    if (this.opened()) {
      this.close();
    } else {
      this.open();
    }
  }

  private trigger: unknown = null;

  open(): void {
    if (!this.opened()) {
      if (this.restoreFocus && !this.trigger) {
        if (isObject(this.restoreFocus) && 'focus' in this.restoreFocus) {
          this.trigger = this.restoreFocus;
        } else {
          this.trigger = this._document.activeElement as HTMLElement;
        }
      }
      requestAnimationFrame(() => {
        this.opened.set(true);
        this.nativeElement.style.zIndex = this.zIndex;
      });
    }
  }

  close(): void {
    if (this.opened()) {
      if (this.restoreFocus && this.trigger) {
        (this.trigger as PopupTrigger).focus();
      }
      requestAnimationFrame(() => {
        this.opened.set(false);
        this.nativeElement.style.zIndex = '';
      });
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
