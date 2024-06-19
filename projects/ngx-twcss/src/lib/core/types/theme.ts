import { BackgroundColor } from "./backgrounds/background-color"
import { BackgroundGradient } from "./backgrounds/background-gradient"
import { BackgroundOpacity } from "./backgrounds/background-opacity"
import { BorderColor } from "./borders/border-color"
import { BorderOpacity } from "./borders/border-opacity"
import { DivideColor } from "./borders/divide-color"
import { RingColor } from "./borders/ring-color"
import { RingOpacity } from "./borders/ring-opacity"
import { Focus } from "./modifiers/focus"
import { Hover } from "./modifiers/hover"
import { TextColor } from "./typography/text-color"

export type Theme = {
  textColor: TextColor,
  bgColor: BackgroundColor,
  bgOpacity: BackgroundOpacity,
  bgGradient: BackgroundGradient,
  borderColor: BorderColor | RingColor,
  borderOpacity: BorderOpacity | RingOpacity,
  divideColor: DivideColor,
  focus: Focus,
  hover: Hover
}
