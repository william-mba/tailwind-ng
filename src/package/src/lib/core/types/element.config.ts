import { BorderRadius } from "./borders/border-radius"
import { BorderWidth } from "./borders/border-width"
import { DivideWidth } from "./borders/divide-width"
import { RingInset } from "./borders/ring-inset"
import { RingWidth } from "./borders/ring-width"
import { BoxShadow } from "./effects/box-shadow"
import { Opacity } from "./effects/opacity"
import { DropShadow } from "./filters/drop-shadow"
import { Filters } from "./filters/filters"
import { Cursor } from "./interactivity/cursor"
import { PointerEvents } from "./interactivity/pointer-events"
import { UserSelect } from "./interactivity/user-select"
import { Display } from "./layout/display"
import { Overflow } from "./layout/overflow"
import { Position } from "./layout/position"
import { ZIndex } from "./layout/z-index"
import { Height } from "./sizing/height"
import { Size } from "./sizing/size"
import { Width } from "./sizing/width"
import { Margin } from "./spacing/margin"
import { Padding } from "./spacing/padding"
import { Theme } from "./theme"
import { FontSize } from "./typography/font-size"
import { FontWeight } from "./typography/font-weight"
import { LineHeight } from "./typography/line-height"
import { TextAlign } from "./typography/text-align"
import { TextWrap } from "./typography/text-wrap"

export type ElementConfig = {
  display: Display,
  position: Position,
  borderRadius: BorderRadius,
  ringWidth: RingWidth,
  divideWidth: DivideWidth,
  borderWidth: BorderWidth | RingWidth | DivideWidth,
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
  cursor: Cursor,
  lineHeight: LineHeight,
  filters: Partial<Filters>,
  shadow: DropShadow | BoxShadow,
  opacity: Opacity,
  inset: RingInset
  pointerEvents: PointerEvents,
  /**A property to set class name starting with sm:* */
  sm: Record<string, {}> | string
  /**A property to set class name that does not have a defined type. */
  extend: Record<string, {}> | string,
  /**
   * A property to set class name that apply to children
   * @example string: '*:bg-red-500'
   * @example object: {
   * 'bgColor': '*:bg-red-500',
   * 'textColor': '*:text-white'
   * }
   */
  children: Record<string, {}> | string
}
