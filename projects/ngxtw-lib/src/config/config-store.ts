import { Injectable, inject } from "@angular/core";
import { AVATAR_CONFIG } from "../ui/elements/avatar/avatar.config";
import { BADGE_CONFIG } from "../ui/elements/badge/badge.config";
import { BUTTON_CONFIG } from "../ui/elements/button/button.config";
import { BUTTON_GROUP_CONFIG } from "../ui/elements/button-group/button-group.config";
import { ICON_CONFIG } from "../ui/elements/icon/icon.config";
import { DROPDOWN_CONFIG } from "../ui/elements/dropdown/dropdown.config";
import { TOGGLE_CONFIG } from "../ui/forms/toggle/toggle.config";
import { INPUT_CONFIG } from "../ui/forms/input/input.config";
import { COMBOBOX_ITEM_CONFIG } from "../ui/forms/combobox/combobox-item/combobox-item.config";
import { MODAL_DIALOG_CONFIG } from "../ui/overlays/modal-dialog/modal-dialog.config";

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
