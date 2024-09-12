/*
 * Public API Surface of ngxtw
 */

export * from './lib/core/helpers/theme.helper';

// Elements
export { Avatar } from './lib/components/elements/avatar/avatar';
export { AvatarDirective } from './lib/components/elements/avatar/avatar.directive';
export { AvatarConfig, AVATAR_CONFIG, provideAvatarConfig } from './lib/components/elements/avatar/avatar.config';
export { Badge } from './lib/components/elements/badge/badge';
export { BadgeComponent } from './lib/components/elements/badge/badge.component';
export { BadgeActionDirective } from './lib/components/elements/badge/badge-action.directive';
export { BadgeConfig, BADGE_CONFIG, provideBadgeConfig } from './lib/components/elements/badge/badge.config';
export { Button } from './lib/components/elements/button/button';
export { ButtonComponent } from './lib/components/elements/button/button.component';
export { ButtonConfig, BUTTON_CONFIG, provideButtonConfig } from './lib/components/elements/button/button.config';
export { ButtonGroup } from './lib/components/elements/button-group/button-group';
export { ButtonGroupComponent } from './lib/components/elements/button-group/button-group.component';
export { ButtonGroupConfig, BUTTON_GROUP_CONFIG, provideButtonGroupConfig } from './lib/components/elements/button-group/button-group.config';
export { Dropdown } from './lib/components/elements/dropdown/dropdown';
export { DropdownComponent } from './lib/components/elements/dropdown/dropdown.component';
export { DropdownConfig, DROPDOWN_CONFIG, provideDropdownConfig } from './lib/components/elements/dropdown/dropdown.config';
export { Icon } from './lib/components/elements/icon/icon';
export { IconDirective } from './lib/components/elements/icon/icon.directive';
export { IconConfig, ICON_CONFIG, provideIconConfig } from './lib/components/elements/icon/icon.config';

// Overlays
export { ModalDialog } from './lib/components/overlays/modal-dialog/modal-dialog';
export { DialogActionsComponent } from './lib/components/overlays/modal-dialog/actions/dialog-actions.component';
export { DialogContentComponent } from './lib/components/overlays/modal-dialog/content/dialog-content.component';
export { DialogIconComponent } from './lib/components/overlays/modal-dialog/icon/dialog-icon.component';
export { DialogPanelComponent } from './lib/components/overlays/modal-dialog/panel/dialog-panel.component';
export { ModalDialogComponent } from './lib/components/overlays/modal-dialog/modal-dialog.component';
export { ModalDialogConfig, MODAL_DIALOG_CONFIG, provideModalDialogConfig } from './lib/components/overlays/modal-dialog/modal-dialog.config';
export { ModalDialogModule } from './lib/components/overlays/modal-dialog/modal-dialog.module';

// Forms
export { ComboboxModule } from './lib/components/forms/combobox/combobox.module';
export { Combobox } from './lib/components/forms/combobox/combobox';
export { ComboboxComponent } from './lib/components/forms/combobox/combobox.component';
export { ComboboxConfig, COMBOBOX_CONFIG, provideComboboxConfig } from './lib/components/forms/combobox/combobox.config';
export { ComboboxItem } from './lib/components/forms/combobox/combobox-item/combobox-item';
export { ComboboxItemComponent } from './lib/components/forms/combobox/combobox-item/combobox-item.component';
export { ComboboxItemConfig, COMBOBOX_ITEM_CONFIG, provideComboboxItemConfig } from './lib/components/forms/combobox/combobox-item/combobox-item.config';
export { Toggle } from './lib/components/forms/toggle/toggle';
export { ToggleComponent } from './lib/components/forms/toggle/toggle.component';
export { ToggleConfig, TOGGLE_CONFIG, provideToggleConfig } from './lib/components/forms/toggle/toggle.config';
export { InputModel } from './lib/components/forms/input/input.model';
export { InputComponent } from './lib/components/forms/input/input.component';
export { InputConfig, INPUT_CONFIG, provideInputConfig } from './lib/components/forms/input/input.config';

// Typography
export * from './lib/components/typography/typography.module';
export * from './lib/components/typography/h1/h1.directive';
export * from './lib/components/typography/h2/h2.directive';
export * from './lib/components/typography/h3/h3.directive';
export * from './lib/components/typography/h4/h4.directive';
