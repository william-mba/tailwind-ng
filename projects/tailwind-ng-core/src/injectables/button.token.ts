import { Directive, inject, Input, OnInit } from "@angular/core";
import { BaseDirective } from "../directives";
import { Popup } from "../interfaces/popup";
import { ButtonImmutableStates } from "../interfaces";
import { isCombobox } from "../guards/is-combobox";
import { BUTTON_CONFIG } from "./configs/button-config.token";
import { ConfigOf } from "../config/config-of";
import { isDropdown } from "./dropdown.token";
import { isDialog } from "./dialog.token";

@Directive()
export abstract class ButtonBase extends BaseDirective<HTMLButtonElement> implements ConfigOf<'Button'>, ButtonImmutableStates, OnInit {
  @Input() config = inject(BUTTON_CONFIG);
  @Input() popup?: Popup;

  override async ngOnInit(): Promise<void> {
    super.ngOnInit()
      .then(() => {
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
          const { options } = this.popup;
          if (options) {
            options.trigger = this;
            options.afterClosing.focusTrigger = true;
          }
        }
      });
  }
}
