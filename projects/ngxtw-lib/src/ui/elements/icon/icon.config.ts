import { Provider } from "@angular/core";
import { SizeOption } from "../../../core/types/size-options.type";
import { mergeConfig } from "../../../config/config.helper";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { FullyOptional } from "../../../core/types/fully-optional.type";
import { ConfigType } from "../../../core/types/config.type";

/**
 * Icon config
 */
export type IconConfig = {
  source: { [p1: string]: string }
  size: { [key in SizeOption]: string },
  theme: ConfigType
}

const DefaultConfig = (): IconConfig => {
  return {
    source: {},
    size: {
      xs: '*:size-3',
      sm: '*:size-4',
      md: '*:size-5',
      lg: '*:size-6',
      xl: '*:size-7'
    },
    theme: {
      focus: {
        border: 'focus:outline',
        outlineWidth: 'focus:outline-2',
        outlineColor: 'focus:outline-gray-500/80',
      }
    }
  }
};

export const IconConfig = (customization?: FullyOptional<IconConfig>): IconConfig => {
  return !customization ? DefaultConfig() : mergeConfig({ target: DefaultConfig(), source: [customization] });
}

export const ICON_CONFIG = InjectionTokenFactory.create(IconConfig(), 'ICON_CONFIG');

export function provideIconConfig(customization?: FullyOptional<IconConfig>): Provider {
  return {
    provide: ICON_CONFIG,
    useValue: IconConfig(customization)
  }
}
