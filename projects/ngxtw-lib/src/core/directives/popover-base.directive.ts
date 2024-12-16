import { Directive, OutputEmitterRef } from '@angular/core';
import { ElementBaseDirective } from './element-base.directive';
import { PopupBase } from './popup-base.interface';

@Directive({
  host: {
    '[attr.aria-expanded]': 'isOpened ? "" : null',
    '[attr.aria-hidden]': 'isOpened ? null : ""',
    '[attr.open]': 'isOpened ? "" : null',
    '(mouseenter)': 'onHover($event)',
    '(mouseleave)': 'onHover($event)',
  },
  inputs: ['isOpened', 'isHovered'],
  outputs: ['toggled', 'opened', 'closed',
  ]
})
export abstract class PopoverBaseDirective extends ElementBaseDirective implements PopupBase {

  isOpened = false;
  isHovered = false;
  toggled = new OutputEmitterRef<boolean>();
  opened = new OutputEmitterRef<void>();
  closed = new OutputEmitterRef<void>();

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
    this.isHovered = false;
    this.closed.emit();
  }

  /**
   * Closes the component after the specified delay.
   * @param delay The delay in milliseconds.
   */
  closeAfter(delay: number): void {
    const interval = setInterval(() => {
      if (!this.isHovered) {
        this.close();
        clearInterval(interval);
      }
    }, delay);
  }

  protected onHover(event: MouseEvent): void {
    this.isHovered = event.type === 'mouseenter';
  }
}
