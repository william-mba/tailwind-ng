import { Directive, inject, Input, OnInit } from "@angular/core";
import { BaseDirective } from "../directives";
import { Popup } from "../interfaces/popup";
import { ButtonImmutableStates, isDialog, isDropdown } from "../interfaces";
import { isCombobox } from "../guards/is-combobox";
import { BUTTON_CONFIG } from "./configs/button-config.token";
import { ConfigOf } from "../config/config-of";

@Directive()
export abstract class ButtonBase extends BaseDirective<HTMLButtonElement> implements ConfigOf<'Button'>, ButtonImmutableStates, OnInit {
  @Input() config = inject(BUTTON_CONFIG);
  @Input() popup?: Popup;

  override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    if (this.popup) {
      requestIdleCallback(() => {
        if (isDropdown(this.popup)) {
          this.nativeElement.setAttribute('aria-haspopup', 'menu');
        } else if (isDialog(this.popup)) {
          this.nativeElement.setAttribute('aria-haspopup', 'dialog');
        } else if (isCombobox(this.popup)) {
          this.nativeElement.setAttribute('aria-haspopup', 'listbox');
        } else {
          this.nativeElement.setAttribute('aria-haspopup', 'true');
        }
      });
      this.popup.options.trigger = this;
      this.popup.options.afterClosing.focusTrigger = true;
    }
  }
}
