import { BoxShadow } from './effects/box-shadow.type';
import { Opacity } from './effects/opacity.type';
import { Backdrop } from './filters/backdrop.type';
import { Blur } from './filters/blur.type';
import { DropShadow } from './filters/drop-shadow.type';
import { Cursor } from './interactivity/cursor.type';
import { PointerEvents } from './interactivity/pointer-events.type';
import { UserSelect } from './interactivity/user-select.type';
import { Display } from './layout/display.type';
import { Overflow } from './layout/overflow.type';
import { Position } from './layout/position.type';
import { ZIndex } from './layout/z-index.type';
import { Height } from './sizing/height.type';
import { Size } from './sizing/size.type';
import { Width } from './sizing/width.type';
import { Margin, MarginX, MarginY } from './spacing/margin.type';
import { Padding, PaddingX, PaddingY } from './spacing/padding.type';
import { Scale, TransformOrigin } from './transforms/transforms.type';
import { FontSize } from './typography/font-size.type';
import { FontWeight } from './typography/font-weight.type';
import { LineHeight } from './typography/line-height.type';
import { TextAlign } from './typography/text-align.type';
import { TextWrap } from './typography/text-wrap.type';
import { BackgroundColor } from './backgrounds/background-color.type';
import { BackgroundGradient } from './backgrounds/background-gradient.type';
import { BoxShadowColor } from './effects/box-shadow-color.type';
import { TextColor } from './typography/text-color.type';
import { MaxWidth } from './sizing/max-width.type';
import { MaxHeight } from './sizing/max-height.type';
import { VerticalAlign } from './typography/vertical-align.type';
import { Border } from './borders/border.type';
import { AlignContent } from './flex-grid/align-content.type';
import { AlignItem } from './flex-grid/align-item.type';
import { AlignSelf } from './flex-grid/align-self.type';
import { FlexDirection } from './flex-grid/flex-direction.type';
import { FlexGrow } from './flex-grid/flex-grow.type';
import { FlexShrink } from './flex-grid/flex-shrink.type';
import { FlexWrap } from './flex-grid/flex-wrap.type';
import { Gap } from './flex-grid/gap.type';
import { GridColumns } from './flex-grid/grid-cols.type';
import { JustifyContent } from './flex-grid/justify-content.type';
import { PlaceContent } from './flex-grid/place-content.type';
import { PlaceItems } from './flex-grid/place-items.type';
import { Transition } from './transitions-animations/transition.type';
import { TwAnimation } from './transitions-animations/animation.type';
import { TwTranslate } from './transforms/translate.type';
import { Ring } from './borders/ring.type';
import { RingColor } from './borders/ring-color.type';
import { RingOffsetWidth } from './borders/ring-offset-width.type';
import { RingWidth } from './borders/ring-width.type';
import { BorderColor } from './borders/border-color.type';
import { BorderRadius, RadiusTop, RadiusRight, RadiusBottom, RadiusLeft } from './borders/border-radius.type';
import { BorderStyle } from './borders/border-style.type';
import { BorderWidth } from './borders/border-width.type';
import { OutlineColor } from './borders/outline-color.type';
import { OutlineOffsetWidth } from './borders/outline-offset-width.type';
import { OutlineWidth } from './borders/outline-width.type';
import { DivideColor } from './borders/divide-color.type';
import { DivideStyle } from './borders/divide-style.type';
import { DivideWidth } from './borders/divide-width.type';
import { Bottom } from './layout/position/bottom.type';
import { InsetX } from './layout/position/inset-x.type';
import { InsetY } from './layout/position/inset-y.type';
import { Inset } from './layout/position/inset.type';
import { Left } from './layout/position/left.type';
import { Right } from './layout/position/right.type';
import { Top } from './layout/position/top.type';
import { OutlineStyle } from './borders/outline-style.type';
import { MinWidth } from './sizing/min-width.type';
import { MinHeight } from './sizing/min-height.type';

export interface BaseConfig {
  alignItem: AlignItem;
  flexDirection: FlexDirection;
  flexGrow: FlexGrow;
  flexShrink: FlexShrink;
  flexWrap: FlexWrap;
  gap: Gap;
  gridCols: GridColumns;
  justifyContent: JustifyContent;
  placeContent: PlaceContent;
  placeItems: PlaceItems;
  alignSelf: AlignSelf;
  alignContent: AlignContent;
  animation: TwAnimation;
  transition: Transition;
  ringColor: RingColor;
  ringOffsetWidth: RingOffsetWidth;
  ringWidth: RingWidth;
  ring: Ring;
  borderColor: BorderColor;
  borderRadius: BorderRadius;
  borderRadiusTop: RadiusTop;
  borderRadiusRight: RadiusRight;
  borderRadiusBottom: RadiusBottom;
  borderRadiusLeft: RadiusLeft;
  borderStyle: BorderStyle;
  borderWidth: BorderWidth;
  border: Border;
  outlineStyle: OutlineStyle;
  outlineColor: OutlineColor;
  outlineOffsetWidth: OutlineOffsetWidth;
  outlineWidth: OutlineWidth;
  divideColor: DivideColor;
  divideStyle: DivideStyle;
  divideWidth: DivideWidth;
  textColor: TextColor;
  bgColor: BackgroundColor;
  bgGradient: BackgroundGradient;
  shadowColor: BoxShadowColor;
  display: Display;
  top: Top;
  right: Right;
  bottom: Bottom;
  left: Left;
  inset: Inset | InsetX | InsetY,
  position: Position;
  fontWeight: FontWeight;
  fontSize: FontSize;
  overflow: Overflow;
  padding: Padding;
  paddingX: PaddingX;
  paddingY: PaddingY;
  margin: Margin;
  marginX: MarginX;
  marginY: MarginY;
  size: Size;
  width: Width;
  minWidth: MinWidth;
  maxWidth: MaxWidth;
  height: Height;
  minHeight: MinHeight;
  maxHeight: MaxHeight;
  textWrap: TextWrap;
  userSelect: UserSelect;
  textAlign: TextAlign;
  zIndex: ZIndex;
  cursor: Cursor;
  lineHeight: LineHeight;
  blur: Blur;
  isolation: 'isolate' | 'isolation-auto';
  visibility: 'visible' | 'invisible';
  backdrop: Backdrop;
  dropShadow: DropShadow;
  boxShadow: BoxShadow;
  opacity: Opacity;
  pointerEvents: PointerEvents;
  transformOrigin: TransformOrigin;
  scale: Scale;
  translate: TwTranslate;
  verticalAlign: VerticalAlign;
  colorScheme: 'scheme-light' | 'scheme-dark';
  // Media queries modifiers
  sm: Modifier<'sm', Omit<BaseConfig, MediaQueryModifier>>;
  md: Modifier<'md', Omit<BaseConfig, MediaQueryModifier>>;
  lg: Modifier<'lg', Omit<BaseConfig, MediaQueryModifier>>;
  // State modifiers
  focus: Modifier<'focus'>;
  hover: Modifier<'hover'>;
  active: Modifier<'active'>;
  disabled: Modifier<'disabled'>;
  // Style modifiers
  dark: Modifier<'dark'>;
};

export interface ConfigValue extends Record<string, any> { };
export interface ConfigType extends Partial<BaseConfig> { };

export type Modifier<Prefix extends string, Type extends ConfigValue = BaseConfig> = {
  [L1 in keyof Type]?: `${Type[L1] & {}}` extends `${infer X}` ? `${Prefix}:${X}` : {
    [L2 in keyof Type[L1]]?: `${Type[L1][L2] & {}}` extends `${infer X}:${infer Y}` ?
    `${Prefix}:${X}:${Y}` : Modifier<Prefix, Type[L1][L2]>
  } | Modifier<Prefix, Type[L1]>
};

export type MediaQueryModifier = 'sm' | 'md' | 'lg';
export type StateModifier = 'focus' | 'click' | 'hover' | 'active';
export type StyleModifier =
  | MediaQueryModifier
  | StateModifier
  | 'child'
  | 'dark';
