import { Injectable, inject } from "@angular/core";
import { AVATAR_CONFIG, BADGE_CONFIG, BUTTON_CONFIG, BUTTON_GROUP_CONFIG, ICON_CONFIG, DROPDOWN_CONFIG, TOGGLE_CONFIG, INPUT_TEXT_CONFIG, COMBOBOX_ITEM_CONFIG, DIALOG_CONFIG, INPUT_RADIO_CONFIG, CHECKBOX_CONFIG } from "../injectables/config.token";

/** @TailwindNG configuration store */
@Injectable({ providedIn: 'root' })
export class ConfigStore {
  readonly Avatar = inject(AVATAR_CONFIG);
  readonly Badge = inject(BADGE_CONFIG);
  readonly Button = inject(BUTTON_CONFIG);
  readonly ButtonGroup = inject(BUTTON_GROUP_CONFIG);
  readonly Dropdown = inject(DROPDOWN_CONFIG);
  readonly InputText = inject(INPUT_TEXT_CONFIG);
  readonly InputRadio = inject(INPUT_RADIO_CONFIG);
  readonly Icon = inject(ICON_CONFIG);
  readonly Dialog = inject(DIALOG_CONFIG);
  readonly Toggle = inject(TOGGLE_CONFIG);
  readonly ComboboxItem = inject(COMBOBOX_ITEM_CONFIG);
  readonly Checkbox = inject(CHECKBOX_CONFIG);
}
