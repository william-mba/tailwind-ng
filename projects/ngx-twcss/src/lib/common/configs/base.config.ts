import { AlignItem } from "../types/flex-n-grid/align-item";
import { JustifyContent } from "../types/flex-n-grid/justify-content";
import { Display } from "../types/layout/display";
import { FontWeight } from "../types/typography/font-weight";
import { ThemeConfig } from "./theme.config";

export interface BaseConfig {
  display?: Display,
  /**Horizontal alignment */
  hAlign?: JustifyContent,
  /**Vertical alignment */
  vAlign?: AlignItem,
  fontWeight?: FontWeight,
  theme?: ThemeConfig | {
    light?: ThemeConfig,
    dark?: ThemeConfig,
  }
}

export const BaseConfig: BaseConfig = {}
