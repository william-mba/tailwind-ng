import { BackgroundColor } from "../../types/backgrounds/background-color";
import { BackgroundOpacity } from "../../types/backgrounds/background-opacity";
import { BorderColor } from "../../types/borders/border-color";
import { BorderOpacity } from "../../types/borders/border-opacity";

export interface FocusConfig {
  bgColor?: BackgroundColor,
  bgOpacity?: BackgroundOpacity,
  borderColor?: BorderColor,
  borderOpacity?: BorderOpacity
}

export const FocusConfig: FocusConfig = {}
