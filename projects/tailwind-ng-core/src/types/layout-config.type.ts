import { Border, BorderStyle, BorderWidth, DivideStyle, DivideWidth, OutlineOffsetWidth, OutlineStyle, OutlineWidth, RadiusBottom, RadiusLeft, RadiusRight, RadiusSize, RadiusTop, Ring, RingOffsetWidth, RingWidth } from './borders';
import { AlignContent, AlignItems, AlignSelf, FlexDirection, FlexGrow, FlexShrink, FlexWrap, Gap, GridColumns, JustifyContent, PlaceContent, PlaceItems, PlaceSelf } from './flex-grid';
import { MarginBottom, MarginLeft, MarginRight, MarginSize, MarginTop, MarginX, MarginY, PaddingBottom, PaddingRight, PaddingSize, PaddingTop, PaddingX, PaddingY } from './spacing';
import { Bottom, Display, Inset, InsetX, InsetY, Left, Overflow, Overscroll, Position, Right, Top, ZIndex } from './layout';
import { FontSize, FontWeight, LineHeight, TextAlign, TextWrap, VerticalAlign } from './typography';
import { Height, Width, Size, MinHeight, MaxHeight, MinWidth, MaxWidth } from './sizing';
import { Transition, TwAnimation } from './transitions-animations';
import { Scale, TransformOrigin, TwTranslate } from './transforms';
import { Cursor, WillChange } from './interactivity';

export interface TypographyLayout {
  // Typography
  fontSize: FontSize;
  fontWeight: FontWeight;
  textAlign: TextAlign;
  lineHeight: LineHeight;
  textWrap: TextWrap;
  verticalAlign: VerticalAlign;
}

export interface SizingLayout {
  // Sizing
  size: Size;
  width: Width;
  height: Height;
  minHeight: MinHeight;
  maxHeight: MaxHeight;
  minWidth: MinWidth;
  maxWidth: MaxWidth;
}

export interface SpacingLayout {
  // Margin
  margin: MarginSize;
  marginX: MarginX;
  marginY: MarginY;
  marginTop: MarginTop;
  marginRight: MarginRight;
  marginBottom: MarginBottom;
  marginLeft: MarginLeft;
  // Padding
  padding: PaddingSize;
  paddingX: PaddingX;
  paddingY: PaddingY;
  paddingTop: PaddingTop;
  paddingRight: PaddingRight;
  paddingBottom: PaddingBottom;
}

export interface DisplayLayout {
  display: Display;
  zIndex: ZIndex;
  overflow: Overflow;
  overscroll: Overscroll;
  // Positioning
  position: Position;
  top: Top;
  right: Right;
  bottom: Bottom;
  left: Left;
  inset: Inset,
  insetX: InsetX,
  insetY: InsetY,
}

export interface BorderLayout {
  border: Border;
  borderStyle: BorderStyle;
  borderWidth: BorderWidth;
  // Border radius
  radius: RadiusSize;
  radiusTop: RadiusTop;
  radiusRight: RadiusRight;
  radiusBottom: RadiusBottom;
  radiusLeft: RadiusLeft;
  // Divide
  divideStyle: DivideStyle;
  divideWidth: DivideWidth;
  // Outline
  outlineStyle: OutlineStyle;
  outlineWidth: OutlineWidth;
  outlineOffsetWidth: OutlineOffsetWidth;
  // Ring
  ring: Ring;
  ringWidth: RingWidth;
  ringOffsetWidth: RingOffsetWidth;
}

export interface FlexAndGridLayout {
  alignItems: AlignItems;
  flexDirection: FlexDirection;
  flexGrow: FlexGrow;
  flexShrink: FlexShrink;
  flexWrap: FlexWrap;
  gap: Gap;
  gridCols: GridColumns;
  justifyContent: JustifyContent;
  placeContent: PlaceContent;
  placeItems: PlaceItems;
  placeSelf: PlaceSelf;
  alignSelf: AlignSelf;
  alignContent: AlignContent;
}

export interface LayoutConfig extends TypographyLayout, SizingLayout, SpacingLayout, DisplayLayout, BorderLayout, FlexAndGridLayout {
  // Interactivity
  cursor: Cursor;
  /**
   * Utilities for optimizing upcoming animations of elements that are expected to change.
   * @see https://tailwindcss.com/docs/will-change#optimizing-with-will-change
   */
  willChange: WillChange;
  // Transforms
  scale: Scale;
  translate: TwTranslate;
  transformOrigin: TransformOrigin;
  visibility: 'visible' | 'invisible';
  isolation: 'isolate' | 'isolation-auto';
  // Transitions and animations
  transition: Transition;
  animation: TwAnimation;
};
