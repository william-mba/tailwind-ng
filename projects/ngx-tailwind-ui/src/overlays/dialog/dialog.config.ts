import { Provider } from '@angular/core';
import { DIALOG_CONFIG, Config, ComponentConfig, Modifier, mergeConfig } from '@ngx-tailwind/core';

export interface BackdropConfig extends ComponentConfig {
  inOpen: Modifier<'in-open'>;
  starting: Modifier<'starting', BackdropConfig>;
}

export interface ContainerConfig extends ComponentConfig {
  inOpen: Modifier<'in-open'>;
  starting: Modifier<'starting', ContainerConfig>;
}

export interface DialogConfig extends Config {
  scrim: ComponentConfig;
  backdrop: BackdropConfig;
  container: ContainerConfig;
}

const BaseConfig = (): ComponentConfig => {
  return {
    transition: {
      property: 'transition-all',
      behavior: 'transition-discrete',
      duration: 'duration-200',
    }
  }
};

const BackdropConfig = (): BackdropConfig => {
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

const ScrimConfig = (): ComponentConfig => {
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

const ContainerConfig = (): ContainerConfig => {
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
    scrim: ScrimConfig(),
    backdrop: BackdropConfig(),
    container: ContainerConfig(),
  }
}

/** Dialog config
 * @returns  The Popover configuration
 */
export const DialogConfig = (customization?: Partial<DialogConfig>): DialogConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 *  Dialog component config provider
 * @returns The configured provider
 */
export function provideDialogConfig(customization?: Partial<DialogConfig>): Provider {
  return {
    provide: DIALOG_CONFIG,
    useValue: DialogConfig(customization)
  }
};
