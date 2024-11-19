import { booleanAttribute, Directive, EventEmitter, Input, Output } from '@angular/core';
import { ElementBaseDirective } from './element-base.directive';
import { PopupBase } from './popup-base.interface';

@Directive({
  host: {
    '[attr.aria-expanded]': 'opened || null',
    '(mouseenter)': 'onHover($event)',
    '(mouseleave)': 'onHover($event)',
  },
})
export abstract class PopupBaseDirective extends ElementBaseDirective<HTMLElement> implements PopupBase {
  /**
   * Whether the component is opened.
   */
  @Input({ transform: booleanAttribute }) opened: boolean = false;
  /**
   * Event emitted when the component is opened.
   */
  @Output('open') onOpen: EventEmitter<void> = new EventEmitter();
  /**
   * Event emitted when the component is closed.
   */
  @Output('close') onClose: EventEmitter<void> = new EventEmitter();
  /**
   * Event emitted when the component is toggled.
   */
  @Output('toggle') onToggle: EventEmitter<boolean> = new EventEmitter();

  /**
   * Toggles the component.
   */
  toggle(): void {
    this.opened ? this.close() : this.open();
    this.onToggle.emit(this.opened);
  }

  /**
   * Opens the component.
   */
  open(): void {
    this.opened = true;
    this.onOpen.emit();
  }

  /**
   * Closes the component.
   */
  close(): void {
    this.opened = false;
    this.hovered = false;
    this.onClose.emit();
  }

  /**
   * Closes the component after the specified delay.
   * @param delay The delay in milliseconds.
   */
  closeAfter(delay: number): void {
    const interval = setInterval(() => {
      if (!this.hovered) {
        this.close();
        clearInterval(interval);
      }
    }, delay);
  }

  protected hovered = false;
  protected onHover(event: MouseEvent): void {
    this.hovered = event.type === 'mouseenter';
  }
}
