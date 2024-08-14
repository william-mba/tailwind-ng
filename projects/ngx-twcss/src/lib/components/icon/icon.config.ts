import { SizeOptions } from "../../core/types/size-options";
import { IconSourceConfig } from "./icon-source.config";

/**
 * Icon config key
 */
export const IconConfigKey = 'IconConfigKey';

/** Icon size config */
export type IconSizeOptions = Partial<SizeOptions>;
export const IconSizeConfig: IconSizeOptions = {
  xs: {
    size: 'size-3'
  },
  sm: {
    size: 'size-4'
  },
  md: {
    size: 'size-5'
  },
  lg: {
    size: 'size-6'
  },
  xl: {
    size: 'size-7'
  }
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
