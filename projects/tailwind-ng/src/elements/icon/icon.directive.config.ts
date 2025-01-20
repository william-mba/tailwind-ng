import { Provider } from "@angular/core";
import { ICON_CONFIG, mergeConfig, IconConfig } from "@tailwind-ng/core";

const DefaultConfig = (): IconConfig => {
  return {
    source: {},
    base: {
      focus: {
        border: 'focus:outline',
        outlineWidth: 'focus:outline-2',
        outlineColor: 'focus:outline-gray-500/80',
      }
    },
    xs: {
      size: '*:size-3',
    },
    sm: {
      size: '*:size-4'
    },
    md: {
      size: '*:size-5'
    },
    lg: {
      size: '*:size-6'
    },
    xl: {
      size: '*:size-7'
    }
  }
};

/**
 * Returns the icon config. If customization is provided, it will be merged with the default config.
 */
export const GetIconConfig = (customization?: Partial<IconConfig>): IconConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

export function provideIconConfig(customization?: Partial<IconConfig>): Provider {
  return {
    provide: ICON_CONFIG,
    useValue: GetIconConfig(customization)
  }
}
