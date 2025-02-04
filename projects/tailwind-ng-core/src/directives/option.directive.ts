import { Directive, Input } from "@angular/core";
import { BaseDirective } from "./base.directive";
import { KBKey } from "../guards";
import { PopupControl } from "../interfaces";
import { ClassList } from "../config";

@Directive({
  selector: 'tw-option, [tw-option], [twOption]',
  exportAs: 'twOption',
  host: {
    role: 'option',
    '[class]': 'classList.value()',
    '[tabindex]': 'isDisabled ? null : 0',
  }
})
export class OptionDirective extends BaseDirective {
  @Input() popup?: PopupControl;

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set('focus:bg-black/5 focus:dark:bg-white/5 focus:outline-0');
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
    if (this.popup) {
      this.nativeElement.addEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
  }
  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
    if (this.popup) {
      this.nativeElement.removeEventListener('pointerup', this.onPointerUp.bind(this), false);
    }
  }
  private onPointerUp(event: PointerEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    } else {
      event.stopPropagation();
      if (this.popup && this.popup?.ref.isOpened && this.popup.action !== 'ignore') {
        this.popup.ref[this.popup.action]();
        if (!this.isFocused) {
          this.nativeElement.click();
        }
      }
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    } else {
      if (KBKey.isArrowUpOrDown(event.key) || KBKey.isSpace(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (KBKey.isEnterOrSpace(event.key)) {
        this.nativeElement.click();
        if (this.popup && this.popup.action !== 'ignore') {
          this.popup.ref[this.popup.action]();
        }
      }
      if (KBKey.isArrowDownOrRight(event.key)) {
        if (!this.focus({ behavior: 'nextSibling' })) {
          this.focus({ behavior: 'nextSibling', target: this.nativeElement.parentElement! });
        }
      }
      if (KBKey.isArrowUpOrLeft(event.key)) {
        if (!this.focus({ behavior: 'previousSibling' })) {
          this.focus({ behavior: 'previousSibling', target: this.nativeElement.parentElement! });
        }
      }
    }
  }
}
