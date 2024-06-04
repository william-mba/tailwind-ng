import { RoundedSize } from "../core/types/borders/border-radius"
import { AlignItem } from "../core/types/flex-n-grid/align-item"
import { JustifyContent } from "../core/types/flex-n-grid/justify-content"
import { Layout } from "../core/types/layout"
import { Display } from "../core/types/layout/display"
import { Typography } from "../core/types/typography"
import { FontWeight } from "../core/types/typography/font-weight"
import { RoundedConfig } from "./rounded.config"
import { ThemeConfig } from "./theme.config"

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
