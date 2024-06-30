import { BorderRadius } from "../core/types/borders/border-radius"
import { BorderWidth } from "../core/types/borders/border-width"
import { RingWidth } from "../core/types/borders/ring-width"
import { BoxShadow } from "../core/types/effects/box-shadow"
import { DropShadow } from "../core/types/filters/drop-shadow"
import { UserSelect } from "../core/types/interactivity/user-select"
import { Display } from "../core/types/layout/display"
import { Overflow } from "../core/types/layout/overflow"
import { Position } from "../core/types/layout/position"
import { ZIndex } from "../core/types/layout/z-index"
import { Height } from "../core/types/sizing/height"
import { Size } from "../core/types/sizing/size"
import { Width } from "../core/types/sizing/width"
import { Margin } from "../core/types/spacing/margin"
import { Padding } from "../core/types/spacing/padding"
import { Theme } from "../core/types/theme"
import { FontSize } from "../core/types/typography/font-size"
import { FontWeight } from "../core/types/typography/font-weight"
import { TextAlign } from "../core/types/typography/text-align"
import { TextWrap } from "../core/types/typography/text-wrap"

export type BaseConfig = {
  display: Display,
  position: Position,
  borderRadius: BorderRadius,
  borderWidth: BorderWidth | RingWidth,
  fontWeight: FontWeight,
  fontSize: FontSize,
  theme: Partial<Theme> | Record<string, Partial<Theme>>,
  overflow: Overflow,
  padding: Padding,
  margin: Margin,
  size: Size,
  width: Width,
  height: Height,
  textWrap: TextWrap,
  userSelect: UserSelect,
  textAlign: TextAlign,
  zIndex: ZIndex,
  shadow: DropShadow | BoxShadow,
  /**A property to set class name starting with sm:* */
  sm: Record<string, {}> | string
  /**A property to set class name that does not have a defined type. */
  extend: Record<string, {}> | string
}

export const BaseConfig: Partial<BaseConfig> = {
  display: {
    gap: 'gap-1.5',
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
  },
  borderRadius: 'rounded-lg',
  fontWeight: 'font-semibold',
}
