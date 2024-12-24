/*
 * NGXTW Public API
 */

// Core
// -----
/// Utilities
export { toggleTheme } from './core/helpers/theme.helper';
export { mergeConfig } from './config/config.helper';
export { StringHelper } from './core/helpers/string.helper';
export { ObjectHelper } from './core/helpers/object.helper';
/// Configs
export { ReactiveConfig } from './config/reactive-config';
export { ClassList } from './config/classlist';
/// Types
export { type ClassName } from './core/types/class-name.type';

// Elements
// --------
/// Avatar
export { AvatarComponent } from './ui/elements/avatar/avatar.component';
export { type AvatarConfig, provideAvatarConfig } from './ui/elements/avatar/avatar.config';
/// Badge
export { BadgeComponent } from './ui/elements/badge/badge.component';
export { type BadgeConfig, provideBadgeConfig } from './ui/elements/badge/badge.config';
/// Button
export { ButtonComponent } from './ui/elements/button/button.component';
export { type ButtonConfig, provideButtonConfig, } from './ui/elements/button/button.config';
/// Button Group
export { ButtonGroupComponent } from './ui/elements/button-group/button-group.component';
export { type ButtonGroupConfig, provideButtonGroupConfig, } from './ui/elements/button-group/button-group.config';
/// Dropdown
export { DropdownComponent } from './ui/elements/dropdown/dropdown.component';
export { type DropdownConfig, provideDropdownConfig } from './ui/elements/dropdown/dropdown.config';
/// Icon
export { IconDirective } from './ui/elements/icon/icon.directive';
export { type IconConfig, provideIconConfig } from './ui/elements/icon/icon.config';

// Overlays
// --------
/// Modal Dialog
export { type Dialog } from './ui/overlays/dialog/dialog.interface';
export { DialogComponent } from './ui/overlays/dialog/dialog.component';
export { DialogContainer } from './ui/overlays/dialog/dialog-container.directive';
export { DialogBackdrop } from './ui/overlays/dialog/dialog-backdrop.directive';
export { type DialogConfig, provideDialogConfig } from './ui/overlays/dialog/dialog.config';
export { DialogModule } from './ui/overlays/dialog/dialog.module';

// Forms
// -----
/// Combobox
export { ComboboxModule } from './ui/forms/combobox/combobox.module';
export * from './ui/forms/combobox/combobox.interface';
export { ComboboxComponent } from './ui/forms/combobox/combobox.component';
export * from './ui/forms/combobox/combobox-item/combobox-item.interface';
export { ComboboxItemComponent } from './ui/forms/combobox/combobox-item/combobox-item.component';
export { type ComboboxItemConfig, provideComboboxItemConfig } from './ui/forms/combobox/combobox-item/combobox-item.config';
/// Toggle
export { ToggleComponent } from './ui/forms/toggle/toggle.component';
export { type ToggleConfig, provideToggleConfig } from './ui/forms/toggle/toggle.config';
/// Input
export { InputComponent } from './ui/forms/input/input.component';
export { type InputConfig, provideInputConfig } from './ui/forms/input/input.config';
