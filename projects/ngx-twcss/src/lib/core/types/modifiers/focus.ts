import { BackgroundColor } from "../backgrounds/background-color"
import { BackgroundGradient } from "../backgrounds/background-gradient"
import { BackgroundOpacity } from "../backgrounds/background-opacity"
import { BorderColor } from "../borders/border-color"
import { BorderOpacity } from "../borders/border-opacity"
import { BorderRadius } from "../borders/border-radius"
import { BorderStyle } from "../borders/border-style"
import { BorderWidth } from "../borders/border-width"
import { TextColor } from "../typography/text-color"

export type Focus = Partial<{
  textColor: TextColor,
  bgColor: BackgroundColor,
  bgOpacity: BackgroundOpacity,
  bgGradient: BackgroundGradient,
  borderColor: BorderColor,
  borderOpacity: BorderOpacity,
  borderRadius: BorderRadius,
  borderStyle: BorderStyle,
  borderWidth: BorderWidth
}>
