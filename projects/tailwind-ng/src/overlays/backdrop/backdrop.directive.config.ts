import { Provider } from "@angular/core";
import { BACKDROP_CONFIG, BackdropConfig, ConfigTypeOf, mergeConfig } from "@tailwind-ng/core";

const DefaultConfig = (): BackdropConfig => {
  return {
    bgColor: 'bg-neutral-500/50',
    dark: {
      bgColor: 'dark:bg-gray-500/50',
    },
    position: 'fixed',
    inset: 'inset-0',
    backdropBlur: 'backdrop-blur-xs',
    backdropOpacity: 'backdrop-opacity-0',
    open: {
      backdropOpacity: 'open:backdrop-opacity-100',
    },
  }
}

/**
 * @TailwindNG Backdrop config
 * @returns  The Popover configuration
 */
export const GetBackdropConfig = (customization?: ConfigTypeOf<'Backdrop'>): BackdropConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * @TailwindNG Backdrop config provider
 * @returns The configured provider
 */
export function provideBackdrop(customization?: ConfigTypeOf<'Backdrop'>): Provider {
  return {
    provide: BACKDROP_CONFIG,
    useValue: GetBackdropConfig(customization)
  }
};
