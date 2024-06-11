import { FontWeight } from './typography/font-weight';
import { Margin } from './spacing/margin';
import { Padding } from './spacing/padding';
import { FontSize } from './typography/font-size';

export type Scaling = {
  fontSize: FontSize,
  fontWeight: FontWeight,
  padding: Partial<Padding>,
  margin: Partial<Margin>
}

export type Size = {
  sm: Partial<Scaling>,
  md: Partial<Scaling>,
  lg: Partial<Scaling>
}
