import { Provider } from "@angular/core";
import { TOGGLE_CONFIG, mergeConfig, ToggleConfig } from "@tailwind-ng/core";

const DefaultConfig = (): ToggleConfig => {
  return {
    position: 'relative',
    cursor: 'cursor-pointer',
    userSelect: 'select-none',
    borderWidth: 'border-2',
    radius: 'rounded-full',
    borderColor: 'border-transparent',
    display: 'inline-flex',
    alignItems: 'items-center',
    width: 'w-12',
    height: 'h-6',
    bgColor: 'bg-gray-200',
    overflow: 'overflow-hidden',
    transition: {
      property: 'transition-colors',
      duration: 'duration-200',
    },
    dark: {
      bgColor: 'dark:bg-gray-900',
    },
    outlineWidth: 'outline-0',
    outlineColor: 'outline-blue-600',
    focus: {
      outlineWidth: 'focus:outline-2',
      outlineOffsetWidth: 'focus:outline-offset-2',
    },
    dataChecked: {
      bgColor: 'data-checked:bg-blue-600',
      before: {
        translate: 'data-checked:before:translate-x-full',
      }
    },
    before: {
      position: 'before:absolute',
      insetY: 'before:inset-y-0',
      height: 'before:h-full',
      width: 'before:w-1/2',
      pointerEvents: 'before:pointer-events-none',
      alignItems: 'before:items-center',
      justifyContent: 'before:justify-center',
      bgColor: 'before:bg-white',
      radius: 'before:rounded-full',
      left: 'before:left-0',
      boxShadow: 'before:shadow-sm',
      transition: {
        duration: 'before:duration-100',
        timing: 'before:ease-in-out',
      }
    }
  }
};

export const GetToggleConfig = (customization?: Partial<ToggleConfig>): ToggleConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 * Toggle component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideToggleConfig(customization?: Partial<ToggleConfig>): Provider {
  return {
    provide: TOGGLE_CONFIG,
    useValue: GetToggleConfig(customization)
  }
}
