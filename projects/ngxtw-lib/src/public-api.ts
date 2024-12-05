/*
 * Public API for ngxtw
 */

// Core
// -----
/// Utilities
export { toggleTheme } from './core/helpers/theme.helper';
export { mergeConfig } from './config/config.helper';
export { objectToArray } from './core/helpers/object.helper';
/// Configs
export { ReactiveConfig } from './config/reactive-config';
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

// // Overlays
// // --------
// /// Modal Dialog
// export * from './overlays/modal-dialog/modal-dialog.interface';
// export { DialogActionsComponent } from './overlays/modal-dialog/actions/dialog-actions.component';
// export { DialogContentComponent } from './overlays/modal-dialog/panel/content/dialog-content.component';
// export { DialogIconComponent } from './overlays/modal-dialog/panel/icon/dialog-icon.component';
// export { DialogPanelComponent } from './overlays/modal-dialog/panel/dialog-panel.component';
// export { ModalDialogComponent } from './overlays/modal-dialog/modal-dialog.component';
// export { ModalDialogConfig, provideModalDialogConfig } from './overlays/modal-dialog/modal-dialog.config';
// export { ModalDialogModule } from './overlays/modal-dialog/modal-dialog.module';

// // Forms
// // -----
// /// Combobox
// export { ComboboxModule } from './forms/combobox/combobox.module';
// export * from './forms/combobox/combobox.interface';
// export { ComboboxComponent } from './forms/combobox/combobox.component';
// export * from './forms/combobox/combobox-item/combobox-item.interface';
// export { ComboboxItemComponent } from './forms/combobox/combobox-item/combobox-item.component';
// export { ComboboxItemConfig, provideComboboxItemConfig } from './forms/combobox/combobox-item/combobox-item.config';
/// Toggle
export { ToggleComponent } from './ui/forms/toggle/toggle.component';
export { type ToggleConfig, provideToggleConfig } from './ui/forms/toggle/toggle.config';
// /// Input
// export * from './forms/input/input.interface';
// export { InputComponent } from './forms/input/input.component';
// export { InputConfig, provideInputConfig } from './forms/input/input.config';

// // Typography
// export * from './typography/typography.module';
// export * from './typography/h1/h1.directive';
// export * from './typography/h2/h2.directive';
// export * from './typography/h3/h3.directive';
// export * from './typography/h4/h4.directive';
