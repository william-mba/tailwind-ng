/*
 * Public API for ngxtw
 */

// Core
// -----
/// Utilities
export { toggleTheme } from './core/utils/theme.util';
export { mergeConfig } from './core/utils/config.util';
export { objectToArray } from './core/utils/object.util';
/// Configs
export { ReactiveConfigManager } from './core/configs/reactive-config-manager';
/// Types
export { ClassName } from './core/types/class-name.type';

// Elements
// --------
/// Avatar
export * from './elements/avatar/avatar.interface';
export { AvatarComponent } from './elements/avatar/avatar.component';
export { AvatarConfig, provideAvatarConfig } from './elements/avatar/avatar.config';
/// Badge
export * from './elements/badge/badge.interface';
export { BadgeComponent } from './elements/badge/badge.component';
export { BadgeConfig, provideBadgeConfig } from './elements/badge/badge.config';
/// Button
export * from './elements/button/button.interface';
export { ButtonComponent } from './elements/button/button.component';
export { ButtonConfig, provideButtonConfig, } from './elements/button/button.config';
/// Button Group
export * from './elements/button-group/button-group.interface';
export { ButtonGroupComponent } from './elements/button-group/button-group.component';
export { ButtonGroupConfig, provideButtonGroupConfig, } from './elements/button-group/button-group.config';
/// Dropdown
export * from './elements/dropdown/dropdown.interface';
export { DropdownComponent } from './elements/dropdown/dropdown.component';
export { DropdownConfig, provideDropdownConfig } from './elements/dropdown/dropdown.config';
/// Icon
export * from './elements/icon/icon.interface';
export { IconDirective } from './elements/icon/icon.component';
export { IconConfig, provideIconConfig } from './elements/icon/icon.config';

// Overlays
// --------
/// Modal Dialog
export * from './overlays/modal-dialog/modal-dialog.interface';
export { DialogActionsComponent } from './overlays/modal-dialog/actions/dialog-actions.component';
export { DialogContentComponent } from './overlays/modal-dialog/panel/content/dialog-content.component';
export { DialogIconComponent } from './overlays/modal-dialog/panel/icon/dialog-icon.component';
export { DialogPanelComponent } from './overlays/modal-dialog/panel/dialog-panel.component';
export { ModalDialogComponent } from './overlays/modal-dialog/modal-dialog.component';
export { ModalDialogConfig, provideModalDialogConfig } from './overlays/modal-dialog/modal-dialog.config';
export { ModalDialogModule } from './overlays/modal-dialog/modal-dialog.module';

// Forms
// -----
/// Combobox
export { ComboboxModule } from './forms/combobox/combobox.module';
export * from './forms/combobox/combobox.interface';
export { ComboboxComponent } from './forms/combobox/combobox.component';
export * from './forms/combobox/combobox-item/combobox-item.interface';
export { ComboboxItemComponent } from './forms/combobox/combobox-item/combobox-item.component';
export { ComboboxItemConfig, provideComboboxItemConfig } from './forms/combobox/combobox-item/combobox-item.config';
/// Toggle
export * from './forms/toggle/toggle.interface';
export { ToggleComponent } from './forms/toggle/toggle.component';
export { ToggleConfig, provideToggleConfig } from './forms/toggle/toggle.config';
/// Input
export * from './forms/input/input.interface';
export { InputComponent } from './forms/input/input.component';
export { InputConfig, provideInputConfig } from './forms/input/input.config';

// Typography
export * from './typography/typography.module';
export * from './typography/h1/h1.directive';
export * from './typography/h2/h2.directive';
export * from './typography/h3/h3.directive';
export * from './typography/h4/h4.directive';
