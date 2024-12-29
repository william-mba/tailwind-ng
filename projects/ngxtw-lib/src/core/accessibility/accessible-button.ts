import { Directive } from "@angular/core";

@Directive({
  host: {
    role: 'button',
    tabindex: '0',
    '(pointerdown)': 'onPointerDown($event)',
    '(pointerup)': 'onPointerUp($event)',
    '(pointerleave)': 'onPointerLeave($event)',
  }
})
export class AccessibleButton {


  protected onPointerDown(event: PointerEvent) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    this.nativeElement.ariaPressed = 'true';
  }
  protected onPointerUp(event: PointerEvent) {
    this.nativeElement.ariaPressed = 'false';
  }

  protected onKeyDown(event: KeyboardEvent) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
  }
}
