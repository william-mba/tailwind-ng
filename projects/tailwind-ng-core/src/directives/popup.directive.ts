import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Popup } from './popup.interface';

@Directive({
  host: {
    '[attr.id]': 'id',
    '[attr.open]': 'isOpened ? "" : null',
    '[attr.aria-expanded]': 'isOpened',
  }
})
export abstract class PopupDirective<T extends HTMLElement = HTMLElement> extends BaseDirective<T> implements Popup<T> {
  protected top?: number;
  protected scrolling?: boolean;
  @Input() isOpened = false;
  @Input() id = this.randomId('popup');
  @Output() toggled = new EventEmitter<boolean>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  toggle(): void {
    if (this.isOpened) {
      this.close();
    } else {
      this.open();
    }
    this.toggled.emit(!!this.isOpened);
  }

  open(): void {
    if (this.isOpened) return;
    this.isOpened = true;
    this.opened.emit();
  }

  close(): void {
    if (!this.isOpened) return;
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
