import { AlignItem } from "../types/flex-n-grid/align-item";
import { JustifyContent } from "../types/flex-n-grid/justify-content";
import { Display } from "../types/layout/display";
import { FontWeight } from "../types/typography/font-weight";
import { ThemeSettings } from "./theme.settings";

export interface BaseSettings {
  display?: Display,
  /**Horizontal alignment */
  hAlign?: JustifyContent,
  /**Vertical alignment */
  vAlign?: AlignItem,
  fontWeight?: FontWeight,
  theme?: ThemeSettings | {
    light?: ThemeSettings,
    dark?: ThemeSettings,
  }
}

export const BaseSettings: BaseSettings = {}
