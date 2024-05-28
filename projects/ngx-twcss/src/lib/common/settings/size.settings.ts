import { RoundedSize } from "../types/borders/border-radius";
import { PaddingSize } from "../types/spacing/padding";
import { FontSize } from "../types/typography/font-size";
import { PaddingSettings } from "./padding.settings";
import { RoundedSettings } from "./rounded.settings";

export interface ScaleSettings {
  textSize?: FontSize,
  padding?: PaddingSettings | PaddingSize,
  rounded?: RoundedSettings | RoundedSize
}

export interface SizeSettings {
  sm?: ScaleSettings,
  md?: ScaleSettings,
  lg?: ScaleSettings
}

export const SizeSettings: SizeSettings = {
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
