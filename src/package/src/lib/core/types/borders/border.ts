import { BorderColor } from "./border-color"
import { BorderOpacity } from "./border-opacity"
import { BorderRadius } from "./border-radius"
import { BorderStyle } from "./border-style"
import { BorderWidth } from "./border-width"

export type Border = {
  color: BorderColor,
  opacity: BorderOpacity,
  radius?: BorderRadius,
  style: BorderStyle,
  width: BorderWidth
}

