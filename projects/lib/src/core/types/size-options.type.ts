import { FontWeight } from './typography/font-weight.type';
import { Margin } from './spacing/margin.type';
import { Padding } from './spacing/padding.type';
import { FontSize } from './typography/font-size.type';
import { BorderRadius } from './borders/border-radius.type';
import { Gap } from './flex-grid/gap.type';
import { Height } from './sizing/height.type';
import { Width } from './sizing/width.type';
import { Size } from './sizing/size.type';
import { ModifiedStyle } from './style-config.type';

export type Scale = {
  fontSize: FontSize;
  fontWeight: FontWeight;
  padding: Partial<Padding>;
  margin: Partial<Margin>;
  borderRadius: Partial<BorderRadius>;
  gap: Gap;
  size: Size;
  width: Width;
  height: Height
  // Style modifiers
  child: Partial<ModifiedStyle<'*', Scale>>;
  dark: Partial<ModifiedStyle<'dark', Scale>>;
};

export type SizeOptions = {
  xs: Partial<Scale>;
  sm: Partial<Scale>;
  md: Partial<Scale>;
  lg: Partial<Scale>;
  xl: Partial<Scale>;
};

export type SizeOption = keyof SizeOptions;
