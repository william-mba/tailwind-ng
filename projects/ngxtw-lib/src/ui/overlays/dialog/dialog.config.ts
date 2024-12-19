import { Provider } from '@angular/core';
import { InjectionTokenFactory } from '../../../core/shared/injection-token.factory';
import { ConfigType, Modifier } from '../../../core/types/config.type';
import { mergeConfig } from '../../../config/config.helper';

export interface BackdropConfig extends ConfigType {
  inOpen?: Modifier<'in-open'>;
  starting?: Modifier<'starting', BackdropConfig>;
}

export interface ScrimConfig extends ConfigType {
  open?: Modifier<'open'>;
  starting?: Modifier<'starting', ScrimConfig>;
}

export interface ContainerConfig extends ConfigType {
  inOpen?: Modifier<'in-open'>;
  starting?: Modifier<'starting', ContainerConfig>;
}

export interface DialogConfig {
  scrim: ScrimConfig,
  backdrop: BackdropConfig;
  container: ContainerConfig;
}

const BaseConfig = (): ConfigType => {
  return {
    transition: {
      property: 'transition-all',
      behavior: 'transition-discrete',
      duration: 'duration-200',
    }
  }
};

export const BackdropConfig = (): BackdropConfig => {
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

export const ScrimConfig = (): ScrimConfig => {
  return {
    ...BaseConfig(),
    display: 'grid',
    padding: 'p-4',
    zIndex: 'z-50',
    inset: 'inset-0',
    position: 'fixed',
    placeSelf: 'place-self-center',
  }
}

export const ContainerConfig = (): ContainerConfig => {
  return {
    ...BaseConfig(),
    gap: 'gap-9',
    size: 'size-fit',
    position: 'relative',
    borderRadius: 'rounded-lg',
    overflow: 'overflow-hidden',
    textAlign: 'text-left',
    boxShadow: 'shadow-lg',
    bgColor: 'bg-white',
    opacity: 'opacity-0',
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
  }
}

/** Dialog config
 * @param config - Custom configuration
 * @returns  The Popover configuration
 */
export const DialogConfig = (): DialogConfig => {
  return {
    scrim: ScrimConfig(),
    backdrop: BackdropConfig(),
    container: ContainerConfig(),
  }
}

/**
 * Dialog component config
 */
export const DIALOG_CONFIG = InjectionTokenFactory.create(DialogConfig(), 'DIALOG_CONFIG');

/**
 *  Dialog component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideDialogConfig(config: Partial<DialogConfig> = {}): Provider {
  return {
    provide: DIALOG_CONFIG,
    useValue: mergeConfig({ target: DialogConfig(), source: [config] })
  }
};
