import { BaseConfig } from '../../configs/base.config';

/**Modal Dialog container config */
export type DialogContainerConfig = Partial<BaseConfig>;
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

/**Dialog icon config */
export type DialogIconConfig = Partial<BaseConfig>
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

/**Dialog panel config */
export type DialogPanelConfig = Partial<BaseConfig>
export const DialogPanelConfig: DialogPanelConfig = {
  display: {
    type: 'grid',
    gap: 'gap-4'
  },
  padding: {
    size: 'p-6'
  },
  sm: {
    display: 'sm:flex',
    alignItems: 'sm:items-start'
  }
}

/**Dialog content config */
export type DialogContentConfig = Partial<BaseConfig>
export const DialogContentConfig: DialogContentConfig = {
  display: {
    type: 'grid',
    gap: 'gap-2',
  },
  sm: "sm:text-left",
  textAlign: 'text-center',
  theme: {
    textColor: 'text-gray-900',
    dark: {
      textColor: 'dark:text-gray-100'
    }
  }
}

/**Dialog actions config */
export type DialogActionsConfig = Partial<BaseConfig>
export const DialogActionsConfig: DialogActionsConfig = {
  display: {
    type: 'grid',
    gap: 'gap-4',
  },
  padding: {
    size: 'p-6',
    y: 'py-4',
  },
  sm: {
    display: 'sm:flex',
    justifyContent: 'sm:justify-end',
  }
}

/**Modal Dialog config key */
export const ModalDialogConfigKey = 'ModalDialogConfigKey';
/**Modal Dialog config */
export type ModalDialogConfig = {
  container: Partial<DialogContainerConfig>,
  icon: Partial<DialogIconConfig>,
  panel: Partial<DialogPanelConfig>,
  content: Partial<DialogContentConfig>,
  actions: Partial<DialogActionsConfig>
}
export const ModalDialogConfig: ModalDialogConfig = {
  container: DialogContainerConfig,
  icon: DialogIconConfig,
  panel: DialogPanelConfig,
  content: DialogContentConfig,
  actions: DialogActionsConfig
}
