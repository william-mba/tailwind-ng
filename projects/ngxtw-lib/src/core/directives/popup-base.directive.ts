import { Directive, model, output } from '@angular/core';
import { ElementBaseDirective } from './element-base.directive';
import { PopupBase } from './popup-base.interface';

@Directive({
  host: {
    '[attr.aria-expanded]': 'isOpened() ? "" : null',
    '[attr.aria-hidden]': 'isOpened() ? null : ""',
    '[attr.open]': 'isOpened() ? "" : null',
    '(mouseenter)': 'onHover($event)',
    '(mouseleave)': 'onHover($event)',
  }
})
export abstract class PopupBaseDirective extends ElementBaseDirective implements PopupBase {

  isOpened = model(false, { alias: 'opened' });
  isHovered = model(false, { alias: 'hovered' });
  toggled = output<boolean>({ alias: 'toggle' });
  opened = output<void>({ alias: 'open' });
  closed = output<void>({ alias: 'close' });

  toggle(): void {
    this.isOpened() ? this.close() : this.open();
    this.toggled.emit(this.isOpened());
  }

  open(): void {
    this.isOpened.set(true);
    this.opened.emit();
  }

  close(): void {
    this.isOpened.set(false);
    this.isHovered.set(false);
    this.closed.emit();
  }

  /**
   * Closes the component after the specified delay.
   * @param delay The delay in milliseconds.
   */
  closeAfter(delay: number): void {
    const interval = setInterval(() => {
      if (!this.isHovered()) {
        this.close();
        clearInterval(interval);
      }
    }, delay);
  }

  protected onHover(event: MouseEvent): void {
    this.isHovered.set(event.type === 'mouseenter');
  }
}
