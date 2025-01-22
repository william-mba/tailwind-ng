import { Provider } from "@angular/core";
import { DROPDOWN_CONFIG, mergeConfig, DropdownConfig } from "@tailwind-ng/core";

const DefaultConfig = (): DropdownConfig => {
  return {
    textAlign: 'text-start',
    paddingY: 'py-1',
    zIndex: 'z-10',
    minWidth: 'min-w-52',
    userSelect: 'select-none',
    overflow: 'overflow-hidden',
    overscroll: 'overscroll-contain',
    transformOrigin: 'origin-top',
    transition: {
      timing: 'ease-in',
      duration: 'duration-25',
      property: 'transition-all',
      behavior: 'transition-discrete'
    },
    fontSize: 'text-sm',
    position: 'absolute',
    borderWidth: 'border',
    radius: 'rounded-md',
    borderColor: 'border-gray-200',
    bgColor: 'bg-gray-50',
    boxShadow: 'shadow-lg',
    display: 'grid',
    colorScheme: 'scheme-light',
    dark: {
      bgColor: 'dark:bg-gray-900',
      textColor: 'dark:text-gray-100',
      borderColor: 'dark:border-gray-800',
      colorScheme: 'dark:scheme-dark'
    },
    open: {
      translate: 'open:translate-y-0',
      scale: 'open:scale-y-100',
      opacity: 'open:opacity-100',
      visibility: 'open:visible',
      cursor: 'open:cursor-pointer',
      transition: {
        duration: 'open:duration-100',
      },
    },
    notOpen: {
      translate: 'not-open:-translate-y-1',
      scale: 'not-open:scale-y-95',
      opacity: 'not-open:opacity-0',
      visibility: 'not-open:invisible'
    },
    starting: {
      open: {
        opacity: 'starting:open:opacity-0',
        scale: 'starting:open:scale-y-95'
      }
    }
  }
};

export const GetDropdownConfig = (customization?: Partial<DropdownConfig>): DropdownConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 *  Dropdown config provider
 * @param config The custom config
 * @returns The config provider
 */
export function provideDropdownConfig(customization?: Partial<DropdownConfig>): Provider {
  return {
    provide: DROPDOWN_CONFIG,
    useValue: GetDropdownConfig(customization)
  }
};

