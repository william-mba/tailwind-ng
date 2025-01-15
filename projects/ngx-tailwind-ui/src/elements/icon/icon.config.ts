import { Provider } from "@angular/core";
import { ICON_CONFIG, SizeOption, mergeConfig, Modifier, SizingLayout, ComponentConfig } from "@ngx-tailwind/core";

/**
 * @ngx-tailwind Icon config
 */
export interface IconConfig extends Record<SizeOption, Modifier<'*', Pick<SizingLayout, 'size'>>> {
  base: ComponentConfig,
  source: Record<string, string>,
};

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
export const IconConfig = (customization?: Partial<IconConfig>): IconConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

export function provideIconConfig(customization?: Partial<IconConfig>): Provider {
  return {
    provide: ICON_CONFIG,
    useValue: IconConfig(customization)
  }
}
