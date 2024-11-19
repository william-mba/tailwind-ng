import { Injectable, inject } from "@angular/core";
import { BUTTON_CONFIG } from "../../elements/button/button.config";
import { BUTTON_GROUP_CONFIG } from "../../elements/button-group/button-group.config";
import { DROPDOWN_CONFIG } from "../../elements/dropdown/dropdown.config";
import { AVATAR_CONFIG } from "../../elements/avatar/avatar.config";
import { BADGE_CONFIG } from "../../elements/badge/badge.config";
import { INPUT_CONFIG } from "../../forms/input/input.config";
import { ICON_CONFIG } from "../../elements/icon/icon.config";
import { MODAL_DIALOG_CONFIG } from "../../overlays/modal-dialog/modal-dialog.config";
import { TOGGLE_CONFIG } from "../../forms/toggle/toggle.config";
import { COMBOBOX_ITEM_CONFIG } from "../../forms/combobox/combobox-item/combobox-item.config";

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
  readonly modalDialog = inject(MODAL_DIALOG_CONFIG);
  readonly toggle = inject(TOGGLE_CONFIG);
  readonly comboboxItem = inject(COMBOBOX_ITEM_CONFIG);
}
