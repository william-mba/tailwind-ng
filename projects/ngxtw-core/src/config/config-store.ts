import { Injectable, inject } from "@angular/core";
import {
  AVATAR_CONFIG,
  BADGE_CONFIG,
  BUTTON_CONFIG,
  BUTTON_GROUP_CONFIG,
  ICON_CONFIG,
  DROPDOWN_CONFIG,
  TOGGLE_CONFIG,
  INPUT_CONFIG,
  COMBOBOX_ITEM_CONFIG,
  DIALOG_CONFIG
} from "../tokens/config.token";

/** @ngxtw configuration store */
@Injectable({ providedIn: 'root' })
export class ConfigStore {
  readonly avatar = inject(AVATAR_CONFIG);
  readonly badge = inject(BADGE_CONFIG);
  readonly button = inject(BUTTON_CONFIG);
  readonly buttonGroup = inject(BUTTON_GROUP_CONFIG);
  readonly dropdown = inject(DROPDOWN_CONFIG);
  readonly input = inject(INPUT_CONFIG);
  readonly icon = inject(ICON_CONFIG);
  readonly modalDialog = inject(DIALOG_CONFIG);
  readonly toggle = inject(TOGGLE_CONFIG);
  readonly comboboxItem = inject(COMBOBOX_ITEM_CONFIG);
}
