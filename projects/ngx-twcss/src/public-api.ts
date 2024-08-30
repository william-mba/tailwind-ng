/*
 * Public API Surface of ngx-twcss
 */

export * from './lib/core/helpers/theme.helper';

// Elements
export * from './lib/components/elements/button/button.component';
export { ButtonConfig, BUTTON_CONFIG, provideButtonConfig as provideButtonConfig } from './lib/components/elements/button/button.config';
export * from './lib/components/elements/button-group/button-group.component';
export { ButtonGroupConfig, BUTTON_GROUP_CONFIG, provideButtonGroupConfig } from './lib/components/elements/button-group/button-group.config';
export { Dropdown } from './lib/components/elements/dropdown/dropdown.component';
export { DropdownAPI } from './lib/components/elements/dropdown/dropdown.api';
export { DropdownConfig, DROPDOWN_CONFIG, provideDropdownConfig } from './lib/components/elements/dropdown/dropdown.config';
export * from './lib/components/elements/badge/badge.component';
export { BadgeConfig, BADGE_CONFIG, provideBadgeConfig } from './lib/components/elements/badge/badge.config';
export * from './lib/components/elements/avatar/avatar.directive';
export { AvatarConfig, AVATAR_CONFIG, provideAvatarConfig } from './lib/components/elements/avatar/avatar.config';
export * from './lib/components/elements/icon/icon.directive';

// Overlays
export * from './lib/components/modal-dialog/modal-dialog.component';
export { ModalDialogConfig, MODAL_DIALOG_CONFIG, provideModalDialogConfig } from './lib/components/modal-dialog/modal-dialog.config';
export { ModalDialog } from './lib/components/modal-dialog/modal-dialog.module';
export * from './lib/components/modal-dialog/actions/dialog-actions.component';
export * from './lib/components/modal-dialog/content/dialog-content.component';
export * from './lib/components/modal-dialog/icon/dialog-icon.component';
export * from './lib/components/modal-dialog/panel/dialog-panel.component';

// Forms
export * from './lib/components/forms/combobox/combobox.component';
export { ComboboxConfig, COMBOBOX_CONFIG, provideComboboxConfig } from './lib/components/forms/combobox/combobox.config';
export * from './lib/components/forms/combobox/combobox-item/combobox-item.component';
export { ComboboxItemConfig, COMBOBOX_ITEM_CONFIG, provideComboboxItemConfig } from './lib/components/forms/combobox/combobox-item/combobox-item.config';
export * from './lib/components/forms/toggle/toggle.component';

// Typography
export * from './lib/components/typography/typography.module';
export * from './lib/components/typography/h1/h1.directive';
export * from './lib/components/typography/h2/h2.directive';
export * from './lib/components/typography/h3/h3.directive';
export * from './lib/components/typography/h4/h4.directive';

// Configs
export { TOGGLE_CONFIG, ToggleConfig, provideToggleConfig } from './lib/components/forms/toggle/toggle.config';
