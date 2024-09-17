import { InjectionToken, Provider } from "@angular/core";
import { IconSourceConfig } from "./icon-source.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";

/** Icon size config */
export type IconSizeOptions = Record<string, string>;
const IconSizeConfig: IconSizeOptions = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7'
}

/**
 * Icon config
 */
export type IconConfig = {
  size: IconSizeOptions,
  source: IconSourceConfig,
}

const IconConfig: IconConfig = {
  size: IconSizeConfig,
  source: IconSourceConfig,
}

export const ICON_CONFIG = new InjectionToken<IconConfig>('Icon config token');

export function provideIconConfig(config?: Partial<IconConfig>): Provider {
  return {
    provide: ICON_CONFIG,
    useFactory: () => mergeConfigs(IconConfig, config)
  }
}
