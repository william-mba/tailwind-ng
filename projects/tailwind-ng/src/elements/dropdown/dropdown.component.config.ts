import { Provider } from "@angular/core";
import { DROPDOWN_CONFIG, mergeConfig, DropdownConfig } from "@tailwind-ng/core";

const DefaultConfig = (): DropdownConfig => {
  return {
    display: 'hidden',
    textAlign: 'text-start',
    paddingY: 'py-1',
    zIndex: 'z-10',
    minWidth: 'min-w-56',
    userSelect: 'select-none',
    overflow: 'overflow-y-auto',
    overscroll: 'overscroll-contain',
    fontSize: 'text-sm',
    position: 'absolute',
    borderWidth: 'border',
    radius: 'rounded-md',
    borderColor: 'border-gray-200',
    bgColor: 'bg-white',
    boxShadow: 'shadow-lg',
    cursor: 'cursor-pointer',
    dark: {
      bgColor: 'dark:bg-gray-950',
      textColor: 'dark:text-gray-100',
      borderColor: 'dark:border-gray-800',
    },
    open: {
      display: 'open:grid',
      opacity: 'open:opacity-100',
      translate: 'open:translate-0',
      scale: 'open:scale-100',
    },
    opacity: 'opacity-0',
    translate: '-translate-y-1',
    starting: {
      open: {
        opacity: 'starting:open:opacity-0',
        scale: 'starting:open:scale-y-90',
        translate: 'starting:open:-translate-y-3'
      }
    },
    transformOrigin: 'origin-top',
    willChange: 'will-change-auto',
    transition: {
      timing: 'ease-out',
      duration: 'duration-25',
      property: 'transition-all',
      behavior: 'transition-discrete'
    },
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
export function provideDropdown(customization?: Partial<DropdownConfig>): Provider {
  return {
    provide: DROPDOWN_CONFIG,
    useValue: GetDropdownConfig(customization)
  }
};

