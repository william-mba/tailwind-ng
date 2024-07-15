import { FontWeight } from './typography/font-weight';
import { Margin } from './spacing/margin';
import { Padding } from './spacing/padding';
import { FontSize } from './typography/font-size';
import { BorderRadius } from './borders/border-radius';
import { Gap } from './flex-grid/gap';

export type Scale = {
  fontSize: FontSize,
  fontWeight: FontWeight,
  padding: Partial<Padding>,
  margin: Partial<Margin>,
  borderRadius: Partial<BorderRadius>,
  gap: Gap,
  extend: Record<string, {}>
}

export type Size = {
  xs: Partial<Scale>,
  sm: Partial<Scale>,
  md: Partial<Scale>,
  lg: Partial<Scale>,
  xl: Partial<Scale>
}
