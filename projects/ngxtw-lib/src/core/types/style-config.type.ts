import { BorderRadius } from './borders/border-radius.type';
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
import { Display } from './layout/display.type';
import { Overflow } from './layout/overflow.type';
import { Position } from './layout/position.type';
import { ZIndex } from './layout/z-index.type';
import { Height } from './sizing/height.type';
import { Size } from './sizing/size.type';
import { Width } from './sizing/width.type';
import { Margin } from './spacing/margin.type';
import { Padding } from './spacing/padding.type';
import { TransformOrigin } from './transforms/transform-origin.type';
import { FontSize } from './typography/font-size.type';
import { FontWeight } from './typography/font-weight.type';
import { LineHeight } from './typography/line-height.type';
import { TextAlign } from './typography/text-align.type';
import { TextWrap } from './typography/text-wrap.type';
import { BackgroundColor } from './backgrounds/background-color.type';
import { BackgroundGradient } from './backgrounds/background-gradient.type';
import { BorderColor } from './borders/border-color.type';
import { DivideColor } from './borders/divide-color.type';
import { RingColor } from './borders/ring-color.type';
import { BoxShadowColor } from './effects/box-shadow-color.type';
import { TextColor } from './typography/text-color.type';
import { MaxWidth } from './sizing/max-width.type';
import { MaxHeight } from './sizing/max-height.type';
import { VerticalAlign } from './typography/vertical-align.type';
import { RingOffsetWidth } from './borders/ring-offset-width.type';
import { OutlineColor } from './borders/outline-color.type';
import { OutlineOffset } from './borders/outline-offset.type';
import { OutlineWidth } from './borders/outline-width.type';
import { BorderType } from './borders/border.type';
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
import { TransitionProperty } from './transitions-animations/transition-property.type';
import { TwAnimation } from './transitions-animations/animation.type';
import { TransitionDuration } from './transitions-animations/transition-duration.type';
import { TransitionTimingFunction } from './transitions-animations/transition-timing-function.type';
import { TwTranslate } from './transforms/translate.type';
import { ValueObject } from '../helpers/object.helper';

export type StyleConfig = {
  /**Utilities for controlling how flex and grid items are positioned along a container's cross axis.
     * @see https://tailwindcss.com/docs/align-items
     */
  alignItem: AlignItem;
  /**Utilities for controlling the direction of flex items.
   * @see https://tailwindcss.com/docs/flex-direction
   */
  flexDirection: FlexDirection;
  /**Utilities for controlling how flex items grow.
   * @see https://tailwindcss.com/docs/flex-grow
   */
  flexGrow: FlexGrow;
  /**Utilities for controlling how flex items shrink.
   * @see https://tailwindcss.com/docs/flex-shrink
   */
  flexShrink: FlexShrink;
  /**Utilities for controlling how flex items wrap.
   * @see https://tailwindcss.com/docs/flex-wrap
   */
  flexWrap: FlexWrap;
  /**Utilities for controlling gutters between grid and flexbox items.
   * @see https://tailwindcss.com/docs/gap
   */
  gap: Gap;
  /**Utilities for specifying the columns in a grid layout.
   * @see https://tailwindcss.com/docs/grid-template-columns
   */
  gridCols: GridColumns;
  /**Utilities for controlling how flex and grid items are positioned along a container's main axis.
   * @see https://tailwindcss.com/docs/justify-content
   */
  justifyContent: JustifyContent;
  /**Utilities for controlling how content is justified and aligned at the same time.
   * @see https://tailwindcss.com/docs/place-content
   */
  placeContent: PlaceContent;
  /**Utilities for controlling how items are justified and aligned at the same time.
   * @see https://tailwindcss.com/docs/place-items
   */
  placeItems: PlaceItems;
  /**Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.
   * @see https://tailwindcss.com/docs/align-self
   */
  alignSelf: AlignSelf;
  /**Utilities for controlling how rows are positioned in multi-row flex and grid containers.
   * @see https://tailwindcss.com/docs/align-content
   */
  alignContent: AlignContent;
  animation: TwAnimation;
  transitionDuration: TransitionDuration;
  transitionProperty: TransitionProperty;
  transitionTimingFunction: TransitionTimingFunction;
  ringColor: RingColor;
  ringOffsetWidth: RingOffsetWidth;
  borderType: BorderType;
  outlineWidth: OutlineWidth;
  outlineOffset: OutlineOffset;
  outlineColor: OutlineColor;
  divideColor: DivideColor;
  divideWidth: DivideWidth;
  textColor: TextColor;
  bgColor: BackgroundColor;
  bgGradient: BackgroundGradient;
  borderColor: BorderColor;
  shadowColor: BoxShadowColor;
  display: Display;
  position: Position;
  borderRadius: BorderRadius;
  ringWidth: RingWidth;
  borderWidth: BorderWidth;
  fontWeight: FontWeight;
  fontSize: FontSize;
  overflow: Overflow;
  padding: Padding;
  margin: Margin;
  size: Size;
  width: Width;
  maxWidth: MaxWidth;
  height: Height;
  maxHeight: MaxHeight;
  textWrap: TextWrap;
  userSelect: UserSelect;
  textAlign: TextAlign;
  zIndex: ZIndex;
  cursor: Cursor;
  lineHeight: LineHeight;
  blur: Blur;
  isolation: 'isolate' | 'isolation-auto';
  backdrop: Backdrop;
  dropShadow: DropShadow;
  boxShadow: BoxShadow;
  opacity: Opacity;
  pointerEvents: PointerEvents;
  transformOrigin: TransformOrigin;
  translate: TwTranslate;
  verticalAlign: VerticalAlign;
  // Media queries modifiers
  sm: Partial<ModifiedStyle<'sm', Omit<StyleConfig, MediaQueryModifier>>>;
  md: Partial<ModifiedStyle<'md', Omit<StyleConfig, MediaQueryModifier>>>;
  lg: Partial<ModifiedStyle<'lg', Omit<StyleConfig, MediaQueryModifier>>>;
  // State modifiers
  focus: Partial<ModifiedStyle<'focus'>>;
  hover: Partial<ModifiedStyle<'hover'>>;
  active: Partial<ModifiedStyle<'active'>>;
  disabled: Partial<ModifiedStyle<'disabled'>>;
  // Style modifiers
  child: Partial<ModifiedStyle<'*'>>;
  first: Partial<ModifiedStyle<'first'>>;
  last: Partial<ModifiedStyle<'last'>>;
  dark: Partial<ModifiedStyle<'dark'>>;
};

/**A type to define styles that apply on modifiers. Ex.: sm: - focus: - click: - dark: etc.*/
export type ModifiedStyle<Modifier extends string, Type extends ValueObject = StyleConfig> = {
  [p1 in keyof Type]: `${Modifier}:${Extract<Type[p1], string>}` | {
    [p2 in keyof Type[p1]]: `${Modifier}:${string}:${string}`
  }
};

export type MediaQueryModifier = 'sm' | 'md' | 'lg';
export type StateModifier = 'focus' | 'click' | 'hover' | 'active';
export type StyleModifier =
  | MediaQueryModifier
  | StateModifier
  | 'child'
  | 'dark';
