import { Provider } from "@angular/core";
import { TOGGLE_CONFIG, mergeConfig, ToggleConfig } from "@ngx-tailwind/core";

const DefaultConfig = (): ToggleConfig => {
  return {
    position: 'relative',
    cursor: 'cursor-pointer',
    userSelect: 'select-none',
    borderWidth: 'border-2',
    radius: 'rounded-full',
    borderColor: 'border-transparent',
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
    hasChecked: {
      bgColor: 'has-checked:bg-blue-600',
    },
    child: {
      position: '*:absolute',
      insetY: '*:inset-y-0',
      height: '*:h-full',
      width: '*:w-1/2',
      padding: '*:p-1',
      userSelect: '*:select-none',
      pointerEvents: '*:pointer-events-none',
      alignItems: '*:items-center',
      justifyContent: '*:justify-center',
      display: '*:inline-flex',
      overflow: '*:overflow-hidden',
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
