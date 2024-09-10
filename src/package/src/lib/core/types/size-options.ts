import { FontWeight } from './typography/font-weight';
import { Margin } from './spacing/margin';
import { Padding } from './spacing/padding';
import { FontSize } from './typography/font-size';
import { BorderRadius } from './borders/border-radius';
import { Gap } from './flex-grid/gap';
import { Height } from './sizing/height';
import { Width } from './sizing/width';
import { Size } from './sizing/size';

export type Scale = {
  fontSize: FontSize,
  fontWeight: FontWeight,
  padding: Partial<Padding>,
  margin: Partial<Margin>,
  borderRadius: Partial<BorderRadius>,
  gap: Gap,
  size: Size,
  width: Width,
  height: Height,
  extend: Record<string, {}>
}

export type SizeOptions = {
  xs: Partial<Scale>,
  sm: Partial<Scale>,
  md: Partial<Scale>,
  lg: Partial<Scale>,
  xl: Partial<Scale>
}
