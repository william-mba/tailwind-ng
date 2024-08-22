import { InjectionToken, Provider } from '@angular/core';
import { ElementConfig } from '../../core/types/element.config';
import { mergeConfigs } from '../../core/helpers/config.helper';

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

/**Dialog panel config */
export type DialogPanelConfig = Partial<ElementConfig>
export const DialogPanelConfig: DialogPanelConfig = {
  display: {
    type: 'flex',
    gap: 'gap-4',
    flexDirection: 'flex-col',
  },
  padding: {
    size: 'p-6'
  },
  sm: {
    flexDirection: 'sm:flex-row',
    alignItems: 'sm:items-start'
  }
}

/**Dialog icon config */
export type DialogIconConfig = Partial<ElementConfig>
export const DialogIconConfig: DialogIconConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  size: 'size-12',
  margin: 'mx-auto',
  borderRadius: 'rounded-full',
  sm: {
    shrink: 'shrink-0',
    size: 'sm:size-10',
  },
  theme: {
    bgColor: 'bg-red-100',
    dark: {
      bgColor: 'dark:bg-red-700',
      bgOpacity: 'dark:bg-opacity-50'
    }
  }
}

/**Dialog content config */
export type DialogContentConfig = Partial<ElementConfig>
export const DialogContentConfig: DialogContentConfig = {
  display: {
    type: 'flex',
    gap: 'gap-2',
    flexDirection: 'flex-col',
  },
  textAlign: 'text-center',
  sm: "sm:text-left",
  theme: {
    textColor: 'text-gray-900',
    dark: {
      textColor: 'dark:text-gray-100'
    }
  }
}

/**Dialog actions config */
export type DialogActionsConfig = Partial<ElementConfig>
export const DialogActionsConfig: DialogActionsConfig = {
  display: {
    type: 'flex',
    gap: 'gap-4',
    flexDirection: 'flex-col',
  },
  padding: {
    size: 'p-6',
    y: 'py-4',
  },
  sm: {
    flexDirection: 'sm:flex-row-reverse'
  }
}

/**Modal Dialog config key */
export const ModalDialogConfigKey = 'ModalDialogConfig';
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
 * Modal Dialog config token
 */
export const MODAL_DIALOG_CONFIG = new InjectionToken<ModalDialogConfig>('Modal Dialog config token');
/**
 *  Modal Dialog config provider
 * @param config The custom config
 * @returns The config provider
 */
export const provideModalDialogConfig = (config?: Partial<ModalDialogConfig>): Provider => {
  return {
    provide: MODAL_DIALOG_CONFIG,
    useValue: mergeConfigs(ModalDialogConfig, config)
  }
};
