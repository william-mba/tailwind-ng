import { InjectionToken, Provider } from '@angular/core';
import { ElementConfig } from '../../../core/types/element.config';
import { mergeConfigs } from '../../../core/helpers/config.helper';
import { DialogActionsConfig } from './actions/dialog-actions.config';
import { DialogContentConfig } from './content/dialog-content.config';
import { DialogIconConfig } from './icon/dialog-icon.config';
import { DialogPanelConfig } from './panel/dialog-panel.config';
import { provideAnimations } from '@angular/platform-browser/animations';

/**Scrim config */
export type ScrimConfig = Partial<ElementConfig>;
export const ScrimConfig: ScrimConfig = {
  position: {
    type: 'fixed',
    inset: 'inset-0',
  },
  zIndex: 'z-50',
  padding: 'p-4',
  width: 'w-screen',
  overflow: 'overflow-y-auto',
  display: {
    type: 'grid',
    placeContent: 'place-content-center'
  }
};

/**Backdrop config */
export type BackdropConfig = Partial<ElementConfig>;
export const BackdropConfig: BackdropConfig = {
  position: {
    type: 'fixed',
    inset: 'inset-0',
  },
  zIndex: 'z-50',
  filters: {
    backdrop: 'backdrop-blur',
  },
  theme: {
    bgColor: 'bg-black',
    bgOpacity: 'bg-opacity-35',
  }
};


/**Modal Dialog container config */
export type DialogContainerConfig = Partial<ElementConfig>;
export const DialogContainerConfig: DialogContainerConfig = {
  display: 'grid',
  position: 'relative',
  borderRadius: 'rounded-lg',
  overflow: 'overflow-hidden',
  textAlign: 'text-left',
  shadow: 'shadow-xl',
  sm: {
    w: 'sm:w-full',
    maxW: 'sm:max-w-lg'
  },
  theme: {
    bgColor: 'bg-white',
    dark: {
      bgColor: 'dark:bg-neutral-800'
    }
  }
}

/**Modal Dialog config */
export type ModalDialogConfig = {
  container: Partial<DialogContainerConfig>,
  icon: Partial<DialogIconConfig>,
  panel: Partial<DialogPanelConfig>,
  content: Partial<DialogContentConfig>,
  actions: Partial<DialogActionsConfig>,
  scrim: Partial<ScrimConfig>,
  backdrop: Partial<BackdropConfig>,
}
export const ModalDialogConfig: ModalDialogConfig = {
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
export const MODAL_DIALOG_CONFIG = new InjectionToken<ModalDialogConfig>('Modal Dialog component config');
/**
 *  Modal Dialog component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideModalDialogConfig(config?: Partial<ModalDialogConfig>): Provider[] {
  return [{
    provide: MODAL_DIALOG_CONFIG,
    useValue: mergeConfigs(ModalDialogConfig, config)
  },
  provideAnimations()
  ]
};
