import { RoundedSize } from "../types/borders/border-radius";
import { PaddingSize } from "../types/spacing/padding";
import { FontSize } from "../types/typography/font-size";
import { PaddingConfig } from "./padding.config";
import { RoundedConfig } from "./rounded.config";

export interface ScaleConfig {
  textSize?: FontSize,
  padding?: PaddingConfig | PaddingSize,
  rounded?: RoundedConfig | RoundedSize
}

export interface SizeConfig {
  sm?: ScaleConfig,
  md?: ScaleConfig,
  lg?: ScaleConfig
}

export const SizeConfig: SizeConfig = {
  sm: {
    padding: {
      x: 'px-2',
      y: 'py-1'
    },
    textSize: 'text-sm',
    rounded: 'rounded-md'
  },
  md: {
    padding: {
      x: 'px-4',
      y: 'py-2'
    },
    textSize: 'text-base',
    rounded: 'rounded-md'
  },
  lg: {
    padding: {
      x: 'px-5',
      y: 'py-2.5'
    },
    textSize: 'text-xl',
    rounded: 'rounded-md'
  }
}
