import { IconSourceConfig } from "./icon-source.config";

/**
 * Icon config key
 */
export const IconConfigKey = 'IconConfigKey';

/** Icon size config */
export type IconSizeOptions = Record<string, string>;
export const IconSizeConfig: IconSizeOptions = {
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

export const IconConfig: IconConfig = {
  size: IconSizeConfig,
  source: IconSourceConfig,
}
