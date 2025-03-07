import { Directive } from "@angular/core";
import { BaseDirective } from "./base.directive";
import { isArrowDownOrRight, isArrowUpOrDown, isArrowUpOrLeft, isEnterOrSpace, isSpace } from "../guards";
import { classlist } from "../config/classlist";

@Directive({
  selector: 'tw-option, [tw-option], [twOption]',
  exportAs: 'twOption',
  host: {
    role: 'option',
    '[class]': 'classList.value',
    '[tabindex]': 'disabled ? null : 0',
  }
})
export class OptionDirective extends BaseDirective {
  protected override buildStyle(): void {
    this.classList = classlist(this.class).set('focus:bg-black/5 focus:dark:bg-white/5 focus:outline-0');
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }
  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (isArrowUpOrDown(event.key) || isSpace(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (isEnterOrSpace(event.key)) {
      this.nativeElement.click();
    } else if (isArrowDownOrRight(event.key)) {
      if (!this.focus({ behavior: 'nextSibling' })) {
        this.focus({ behavior: 'nextSibling', target: this.nativeElement.parentElement! });
      }
    } else if (isArrowUpOrLeft(event.key)) {
      if (!this.focus({ behavior: 'previousSibling' })) {
        this.focus({ behavior: 'previousSibling', target: this.nativeElement.parentElement! });
      }
    }
  }
}
