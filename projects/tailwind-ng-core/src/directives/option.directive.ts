import { DestroyRef, Directive, inject } from "@angular/core";
import { BaseDirective } from "./base.directive";

@Directive({
  selector: 'tw-option, [tw-option], [twOption]',
  exportAs: 'twOption',
  host: {
    role: 'option',
    '[tabindex]': 'isDisabled ? null : 0',
  }
})
export class OptionDirective extends BaseDirective {
  private readonly _destroyRef = inject(DestroyRef);

  protected override onInit(): void {
    this.nativeElement.addEventListener('keydown', this.onKeyboardEvent.bind(this), false);
    this.classList.set('focus:bg-black/5 focus:dark:bg-white/5 focus:outline-0');
    this._destroyRef.onDestroy(() => {
      this.nativeElement.removeEventListener('keydown', this.onKeyboardEvent.bind(this), false);
    });
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if ([' ', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }
    switch (event.key) {
      case ' ':
      case 'Enter':
        this.nativeElement.click();
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        if (!this.focus({ behavior: 'nextSibling' })) {
          this.focus({ behavior: 'nextSibling', target: this.nativeElement.parentElement! });
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        if (!this.focus({ behavior: 'previousSibling' })) {
          this.focus({ behavior: 'previousSibling', target: this.nativeElement.parentElement! });
        }
        break;
    }
  }
}
