import { RoundedSize } from "../types/borders/border-radius";
import { AlignItem } from "../types/flex-n-grid/align-item";
import { JustifyContent } from "../types/flex-n-grid/justify-content";
import { Display } from "../types/layout/display";
import { FontWeight } from "../types/typography/font-weight";
import { RoundedConfig } from "./rounded.config";
import { ThemeConfig } from "./theme.config";

export interface BaseConfig {
  display: Display,
  /**Vertical align*/
  vAlign: AlignItem,
  /**Horizontal align*/
  hAlign: JustifyContent,
  fontWeight: FontWeight,
  rounded: RoundedConfig | RoundedSize,
  theme: Partial<ThemeConfig> | {
    light: Partial<ThemeConfig>,
    dark: Partial<ThemeConfig>,
  }
}

export const BaseConfig: Partial<BaseConfig> = {
  rounded: 'rounded-lg',
  display: 'inline-flex',
  vAlign: 'items-center',
  hAlign: 'justify-center',
  fontWeight: 'font-semibold',
}
