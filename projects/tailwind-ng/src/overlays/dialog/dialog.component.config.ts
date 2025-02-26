import { Provider } from '@angular/core';
import { DIALOG_CONFIG, mergeConfig, ComponentConfig, DialogConfig } from '@tailwind-ng/core';

const BaseConfig = (): ComponentConfig => {
  return {
    transition: {
      property: 'transition-all',
      behavior: 'transition-discrete',
      duration: 'duration-200',
    }
  }
};

const DefaultConfig = (): DialogConfig => {
  return {
    backdrop: {
      backdropBlur: 'open:backdrop-blur-xs',
      bgColor: 'open:bg-neutral-500/50',
      dark: {
        bgColor: 'open:dark:bg-gray-500/50',
      }
    },
    scrim: {
      ...BaseConfig(),
      display: 'grid',
      opacity: 'opacity-0',
      visibility: 'invisible',
      open: {
        visibility: 'open:visible',
        opacity: 'open:opacity-100',
      },
      padding: 'p-4',
      inset: 'inset-0',
      position: 'fixed',
      alignContent: 'content-end',
      justifyContent: 'justify-center',
      sm: {
        alignContent: 'sm:content-center',
      }
    },
    container: {
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
}

/**
 * @TailwindNG Dialog config
 * @returns  The Popover configuration
 */
export const GetDialogConfig = (customization?: Partial<DialogConfig>): DialogConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * @TailwindNG Dialog config provider
 * @returns The configured provider
 */
export function provideDialog(customization?: Partial<DialogConfig>): Provider {
  return {
    provide: DIALOG_CONFIG,
    useValue: GetDialogConfig(customization)
  }
};
