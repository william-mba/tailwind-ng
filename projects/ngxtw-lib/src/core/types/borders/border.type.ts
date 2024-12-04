import { BorderColor } from './border-color.type';
import { BorderRadius } from './border-radius.type';
import { BorderStyle } from './border-style.type';
import { BorderWidth } from './border-width.type';

export type Border = {
  color: BorderColor;
  radius?: BorderRadius;
  style: BorderStyle;
  width: BorderWidth;
};

export type BorderType = 'outline' | 'focus-visible:outline' | 'ring-inset' | 'focus:ring-inset';
