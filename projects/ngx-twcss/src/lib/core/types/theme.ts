import { BackgroundColor } from "./backgrounds/background-color"
import { BackgroundGradient } from "./backgrounds/background-gradient"
import { BackgroundOpacity } from "./backgrounds/background-opacity"
import { BorderColor } from "./borders/border-color"
import { BorderOpacity } from "./borders/border-opacity"
import { Focus } from "./modifiers/focus"
import { Hover } from "./modifiers/hover"
import { TextColor } from "./typography/text-color"

export type Theme = {
  textColor: TextColor,
  bgColor: BackgroundColor,
  bgOpacity: BackgroundOpacity,
  bgGradient: BackgroundGradient,
  borderColor: BorderColor,
  borderOpacity: BorderOpacity,
  focus: Focus,
  hover: Hover
}
