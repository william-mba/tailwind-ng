import { RadiusBottom, RadiusLeft, RadiusRight, RadiusSize, RadiusTop } from './borders/border-radius.type';
import { BorderWidth } from './borders/border-width.type';
import { DivideWidth } from './borders/divide-width.type';
import { RingWidth } from './borders/ring-width.type';
import { BoxShadow } from './effects/box-shadow.type';
import { Opacity } from './effects/opacity.type';
import { Backdrop } from './filters/backdrop.type';
import { Blur } from './filters/blur.type';
import { DropShadow } from './filters/drop-shadow.type';
import { Cursor } from './interactivity/cursor.type';
import { PointerEvents } from './interactivity/pointer-events.type';
import { UserSelect } from './interactivity/user-select.type';
import { Overflow } from './layout/overflow.type';
import { PositionType } from './layout/position.type';
import { ZIndex } from './layout/z-index.type';
import { Height } from './sizing/height.type';
import { Size } from './sizing/size.type';
import { Width } from './sizing/width.type';
import { MarginBottom, MarginLeft, MarginRight, MarginSize, MarginTop, MarginX, MarginY } from './spacing/margin.type';
import { PaddingBottom, PaddingLeft, PaddingRight, PaddingSize, PaddingTop, PaddingX, PaddingY } from './spacing/padding.type';
import { TransformOrigin } from './transforms/transform-origin.type';
import { FontSize } from './typography/font-size.type';
import { FontWeight } from './typography/font-weight.type';
import { LineHeight } from './typography/line-height.type';
import { TextAlign } from './typography/text-align.type';
import { TextWrap } from './typography/text-wrap.type';
import { BackgroundColor } from './backgrounds/background-color.type';
import { BackgroundGradient } from './backgrounds/background-gradient.type';
import { BackgroundOpacity } from './backgrounds/background-opacity.type';
import { BorderColor } from './borders/border-color.type';
import { BorderOpacity } from './borders/border-opacity.type';
import { DivideColor } from './borders/divide-color.type';
import { RingColor } from './borders/ring-color.type';
import { RingOpacity } from './borders/ring-opacity.type';
import { BoxShadowColor } from './effects/box-shadow-color.type';
import { TextColor } from './typography/text-color.type';
import { TextOpacity } from './typography/text-opacity.type';
import { MaxWidth } from './sizing/max-width.type';
import { MaxHeight } from './sizing/max-height.type';
import { VerticalAlign } from './typography/vertical-align.type';
import { RingOffsetWidth } from './borders/ring-offset-width.type';
import { OutlineColor } from './borders/outline-color.type';
import { OutlineOffset } from './borders/outline-offset.type';
import { OutlineWidth } from './borders/outline-width.type';
import { BorderType } from './borders/border.type';
import { Bottom } from './layout/position/bottom.type';
import { InsetX } from './layout/position/inset-x.type';
import { InsetY } from './layout/position/inset-y.type';
import { Inset } from './layout/position/inset.type';
import { Left } from './layout/position/left.type';
import { Right } from './layout/position/right.type';
import { Top } from './layout/position/top.type';
import { AlignContent } from './flex-grid/align-content.type';
import { AlignItem } from './flex-grid/align-item.type';
import { AlignSelf } from './flex-grid/align-selft.type';
import { FlexDirection } from './flex-grid/flex-direction.type';
import { FlexGrow } from './flex-grid/flex-grow.type';
import { FlexShrink } from './flex-grid/flex-shrink.type';
import { FlexWrap } from './flex-grid/flex-wrap.type';
import { Gap } from './flex-grid/gap.type';
import { GridColumns } from './flex-grid/grid-cols.type';
import { JustifyContent } from './flex-grid/justify-content.type';
import { PlaceContent } from './flex-grid/place-content.type';
import { PlaceItems } from './flex-grid/place-items.type';
import { Display } from './layout/display.type';
import { MinWidth } from './sizing/min-width.type';
import { MinHeight } from './sizing/min-height.type';
import { TwAnimation } from './transitions-animations/animation.type';
import { BorderStyle } from './borders/border-style.type';
import { DivideStyle } from './borders/divide-style.type';
import { TransitionProperty } from './transitions-animations/transition-property.type';
import { TransitionDuration } from './transitions-animations/transition-duration.type';
import { TransitionTimingFunction } from './transitions-animations/transition-timing-function.type';
import { TwTranslate } from './transforms/translate.type';

export type ClassName =
  // Backgrounds
  | BackgroundColor
  | BackgroundGradient
  | BackgroundOpacity
  // Transitions & Animations
  | TwAnimation
  | TransitionDuration
  | TransitionProperty
  | TransitionTimingFunction
  // Borders
  | BorderColor
  | BorderOpacity
  | RadiusSize
  | RadiusTop
  | RadiusRight
  | RadiusBottom
  | RadiusLeft
  | BorderStyle
  | BorderWidth
  | BorderType
  | DivideColor
  | DivideStyle
  | DivideWidth
  | OutlineColor
  | OutlineWidth
  | OutlineOffset
  | RingColor
  | RingOffsetWidth
  | RingOpacity
  | RingWidth
  // Effects
  | BoxShadowColor
  | BoxShadow
  | Opacity
  // Filters
  | Backdrop
  | Blur
  | DropShadow
  // Flex & Grid
  | AlignContent
  | AlignItem
  | AlignSelf
  | FlexDirection
  | FlexGrow
  | FlexShrink
  | FlexWrap
  | Gap
  | GridColumns
  | JustifyContent
  | PlaceContent
  | PlaceItems
  // Interactivity
  | Cursor
  | PointerEvents
  | UserSelect
  // Layout > Position
  | Bottom
  | InsetX
  | InsetY
  | Inset
  | Left
  | Right
  | Top
  // Layout
  | Display
  | Overflow
  | PositionType
  | ZIndex
  // Sizing
  | Height
  | MaxHeight
  | MaxWidth
  | MinHeight
  | MinWidth
  | Size
  | Width
  // Spacing
  | MarginSize | MarginX | MarginY | MarginTop | MarginRight | MarginBottom | MarginLeft
  | PaddingSize | PaddingX | PaddingY | PaddingTop | PaddingRight | PaddingBottom | PaddingLeft
  // Transforms
  | TransformOrigin
  | TwTranslate
  // Typography
  | FontSize
  | FontWeight
  | LineHeight
  | TextAlign
  | TextColor
  | TextOpacity
  | TextWrap
  | VerticalAlign
  // Other
  | {};
