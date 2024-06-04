import { RoundedSize } from "../types/borders/border-radius";
import { AlignItem } from "../types/flex-n-grid/align-item";
import { JustifyContent } from "../types/flex-n-grid/justify-content";
import { Display } from "../types/layout/display";
import { FontWeight } from "../types/typography/font-weight";
import { Typography } from "../types/typography";
import { RoundedConfig } from "./rounded.config";
import { ThemeConfig } from "./theme.config";
import { Layout } from "../types/layout";

export interface BaseConfig {
  /** Utilities for controlling the display box type of an element.
   * @see https://tailwindcss.com/docs/display
   * */
  display: Display,
  /**Utilities for controlling the vertical alignment of an inline or table-cell box.
   * @see https://tailwindcss.com/docs/vertical-align
  */
  verticalAlign: AlignItem,
  /**Horizontal align
   * @type {JustifyContent} Utilities for controlling the alignment of flex items along the main axis.
   * @see  https://tailwindcss.com/docs/justify-content
  */
  horizontalAlign: JustifyContent,
  fontWeight: FontWeight,
  rounded: RoundedConfig | RoundedSize,
  theme: Partial<ThemeConfig> | {
    light: Partial<ThemeConfig>,
    dark: Partial<ThemeConfig>,
  }
}

export interface BaseConfig2 {
  layout: Layout,
  typography: Typography,
  verticalAlign: AlignItem,
  horizontalAlign: JustifyContent,
  fontWeight: FontWeight,
  rounded: RoundedConfig | RoundedSize,
  theme: Partial<ThemeConfig> | {
    light: Partial<ThemeConfig>,
    dark: Partial<ThemeConfig>,
  }
}
