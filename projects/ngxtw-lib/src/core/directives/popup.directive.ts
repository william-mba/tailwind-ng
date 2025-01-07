import { Directive, OutputEmitterRef } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Popup } from './popup.interface';

@Directive({
  host: {
    '[attr.id]': 'id',
    '[attr.open]': 'isOpened ? "" : null',
    '[attr.aria-expanded]': 'isOpened',
  },
  inputs: ['isOpened', 'id'],
  outputs: ['toggled', 'opened', 'closed']
})
export abstract class PopupDirective extends BaseDirective implements Popup {
  isOpened = false;
  id = this.randomId('popup');
  toggled = new OutputEmitterRef<boolean>();
  opened = new OutputEmitterRef<void>();
  closed = new OutputEmitterRef<void>();
  protected top?: number;
  protected scrolling?: boolean;

  toggle(): void {
    this.isOpened ? this.close() : this.open();
    this.toggled.emit(this.isOpened);
  }

  open(): void {
    this.isOpened = true;
    this.opened.emit();
  }

  close(): void {
    this.isOpened = false;
    this.closed.emit();
  }

  closeAfter(delay: number): void {
    delay = (delay >= 1000 && delay <= 10000) ? delay : 5000;
    const id = setInterval(() => {
      if (!this.isHovered) {
        this.close();
        clearInterval(id);
      }
    }, delay);
  }

  updatePositionIfNeeded(): void {
    if (!this.isOpened) return;
    if (!this.top) {
      this.top = this.nativeElement.offsetTop;
    }
    this.nativeElement.style.top = `${this.top}px`;
    const offsetHeight = this.nativeElement.offsetHeight;
    const boundingTop = this.nativeElement.getBoundingClientRect().top;
    if (window.innerHeight < offsetHeight + boundingTop) {
      this.nativeElement.style.top = `-${offsetHeight + 45}px`;
    }
    this.scrolling = false;
  }
}
