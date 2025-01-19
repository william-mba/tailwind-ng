import { Provider } from '@angular/core';
import { DIALOG_CONFIG, DialogConfig, BackdropConfig, ComponentConfig, mergeConfig, ContainerConfig } from '@tailwind-ng/core';

const BaseConfig = (): ComponentConfig => {
  return {
    transition: {
      property: 'transition-all',
      behavior: 'transition-discrete',
      duration: 'duration-200',
    }
  }
};

const DefaultBackdropConfig = (): BackdropConfig => {
  return {
    ...BaseConfig(),
    opacity: 'opacity-0',
    backdropOpacity: 'backdrop-opacity-0',
    inOpen: {
      opacity: 'in-open:opacity-100',
      backdropOpacity: 'in-open:backdrop-opacity-100',
    },
    starting: {
      opacity: 'starting:opacity-0',
      backdropOpacity: 'starting:backdrop-opacity-0',
    },
    zIndex: 'z-50',
    inset: 'inset-0',
    position: 'fixed',
    bgColor: 'bg-black/10',
    backdropBlur: 'backdrop-blur-xs',
  }
}

const DefaultScrimConfig = (): ComponentConfig => {
  return {
    ...BaseConfig(),
    display: 'grid',
    padding: 'p-4',
    zIndex: 'z-50',
    inset: 'inset-0',
    position: 'fixed',
    size: 'size-fit',
    placeSelf: 'place-self-center',
  }
}

const DefaultContainerConfig = (): ContainerConfig => {
  return {
    ...BaseConfig(),
    gap: 'gap-9',
    width: 'w-full',
    height: 'h-fit',
    position: 'relative',
    radius: 'rounded-lg',
    overflow: 'overflow-hidden',
    textAlign: 'text-left',
    boxShadow: 'shadow-lg',
    bgColor: 'bg-white',
    opacity: 'opacity-0',
    placeSelf: 'place-self-center',
    dark: {
      bgColor: 'dark:bg-gray-900',
    },
    starting: {
      opacity: 'starting:opacity-0'
    },
    inOpen: {
      opacity: 'in-open:opacity-100',
    },
    display: 'grid',
    padding: 'p-5',
    sm: {
      maxWidth: 'sm:max-w-md'
    }
  }
}

const DefaultConfig = (): DialogConfig => {
  return {
    scrim: DefaultScrimConfig(),
    backdrop: DefaultBackdropConfig(),
    container: DefaultContainerConfig(),
  }
}

/** Dialog config
 * @returns  The Popover configuration
 */
export const GetDialogConfig = (customization?: Partial<DialogConfig>): DialogConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 *  Dialog component config provider
 * @returns The configured provider
 */
export function provideDialogConfig(customization?: Partial<DialogConfig>): Provider {
  return {
    provide: DIALOG_CONFIG,
    useValue: GetDialogConfig(customization)
  }
};
