import { BackgroundColor } from "../../core/types/backgrounds/background-color"
import { BackgroundOpacity } from "../../core/types/backgrounds/background-opacity"
import { BorderColor } from "../../core/types/borders/border-color"
import { BorderOpacity } from "../../core/types/borders/border-opacity"

export interface HoverConfig {
  bgColor?: BackgroundColor,
  bgOpacity?: BackgroundOpacity,
  borderColor?: BorderColor,
  borderOpacity?: BorderOpacity
}

export const HoverConfig: HoverConfig = {}
