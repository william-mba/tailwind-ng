/*
 * Public API Surface of ngx-twcss
 */

export * from './lib/core/helpers/theme.helper';

// Elements
export * from './lib/components/elements/button/button.component';
export { ButtonConfig, BUTTON_CONFIG, provideButtonConfig } from './lib/components/elements/button/button.config';
export * from './lib/components/elements/button-group/button-group.component';
export * from './lib/components/elements/dropdown/dropdown.component';
export { DropdownConfig, DROPDOWN_CONFIG, provideDropdownConfig } from './lib/components/elements/dropdown/dropdown.config';
export * from './lib/components/elements/badge/badge.component';
export * from './lib/components/elements/avatar/avatar.directive';
export * from './lib/components/elements/icon/icon.directive';

// Overlays
export * from './lib/components/modal-dialog/modal-dialog.component';
export { ModalDialogConfig, MODAL_DIALOG_CONFIG, provideModalDialogConfig } from './lib/components/modal-dialog/modal-dialog.config';
export { ModalDialog } from './lib/components/modal-dialog/modal-dialog.module';

// Forms
export * from './lib/components/forms/combobox/combobox.component';
export * from './lib/components/forms/toggle/toggle.component';

// Typography
export * from './lib/components/typography/typography.module';
export * from './lib/components/typography/h1/h1.directive';
export * from './lib/components/typography/h2/h2.directive';
export * from './lib/components/typography/h3/h3.directive';
export * from './lib/components/typography/h4/h4.directive';

// Configs
export { TOGGLE_CONFIG, ToggleConfig, provideToggleConfig } from './lib/components/forms/toggle/toggle.config';
