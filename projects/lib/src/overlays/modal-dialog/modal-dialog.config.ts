import { Provider } from '@angular/core';
import { DialogActionsConfig } from './actions/dialog-actions.config';
import { DialogPanelConfig } from './panel/dialog-panel.config';
import { StyleConfig } from '../../core/types/style-config.type';
import { mergeConfig } from '../../core/utils/config.util';
import { InjectionTokenFactory } from '../../core/tokens/injection-token-factory';
import { ValueObject } from '../../core/utils/object.util';
import { DialogIconConfig } from './panel/icon/dialog-icon.config';
import { DialogContentConfig } from './panel/content/dialog-content.config';

/**Backdrop config */
export interface BackdropConfig extends Partial<StyleConfig> { };
const BackdropConfig: BackdropConfig = {
  position: {
    type: 'fixed',
    inset: 'inset-0',
  },
  zIndex: 'z-50',
  backdrop: 'backdrop-blur-sm',
  bgColor: 'bg-black',
  bgOpacity: 'bg-opacity-15',
};

/**Scrim/Canva config */
export interface ScrimConfig extends Partial<StyleConfig> { };
const ScrimConfig: ScrimConfig = {
  position: {
    type: 'fixed',
    inset: 'inset-0',
  },
  zIndex: 'z-50',
  padding: 'p-4',
  width: 'w-screen',
  overflow: 'overflow-y-auto',
  display: 'grid',
  placeContent: 'place-content-center'
};


/**Modal Dialog container config */
export interface DialogContainerConfig extends Partial<StyleConfig> { };
const DialogContainerConfig: DialogContainerConfig = {
  display: 'grid',
  borderRadius: 'rounded-lg',
  overflow: 'overflow-hidden',
  textAlign: 'text-left',
  boxShadow: 'shadow-lg',
  sm: {
    width: 'sm:w-full',
    maxWidth: 'sm:max-w-lg'
  },
  bgColor: 'bg-white',
  dark: {
    bgColor: 'dark:bg-neutral-800'
  }
}

/**@ngxtw Modal Dialog config */
export interface ModalDialogConfig extends ValueObject {
  container: Partial<DialogContainerConfig>,
  icon: Partial<DialogIconConfig>,
  panel: Partial<DialogPanelConfig>,
  content: Partial<DialogContentConfig>,
  actions: Partial<DialogActionsConfig>,
  scrim: Partial<ScrimConfig>,
  backdrop: Partial<BackdropConfig>,
}

const ModalDialogConfig: ModalDialogConfig = {
  container: DialogContainerConfig,
  icon: DialogIconConfig,
  panel: DialogPanelConfig,
  content: DialogContentConfig,
  actions: DialogActionsConfig,
  scrim: ScrimConfig,
  backdrop: BackdropConfig,
}

/**
 * Modal Dialog component config
 */
export const MODAL_DIALOG_CONFIG = InjectionTokenFactory.create(ModalDialogConfig, 'MODAL_DIALOG_CONFIG');

/**
 *  Modal Dialog component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideModalDialogConfig(config: Partial<ModalDialogConfig> = {}): Provider {
  return {
    provide: MODAL_DIALOG_CONFIG,
    useValue: mergeConfig({ target: ModalDialogConfig, source: [config] })
  }
};
