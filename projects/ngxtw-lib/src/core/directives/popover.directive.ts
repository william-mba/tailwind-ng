import { Directive, OutputEmitterRef } from '@angular/core';
import { ElementDirective } from './element.directive';
import { PopoverState, PopoverActions, PopoverEvents } from './popover.interface';

@Directive({
  host: {
    '[attr.open]': 'isOpened ? "" : null',
  },
  inputs: ['isOpened'],
  outputs: ['toggled', 'opened', 'closed']
})
export abstract class PopoverBaseDirective extends ElementDirective implements PopoverState, PopoverActions, PopoverEvents {
  isOpened = false;
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

  closeAfter(delay: number): void {
    delay = (delay >= 1000 && delay <= 10000) ? delay : 5000;
    const id = setInterval(() => {
      if (!this.isHovered) {
        this.close();
        clearInterval(id);
      }
    }, delay);
  }
}
