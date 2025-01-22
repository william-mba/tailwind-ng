import { BackdropBlur, BackdropOpacity, Blur, DropShadow } from './filters';
import { BorderColor, DivideColor, OutlineColor, RingColor } from './borders';
import { BoxShadow, BoxShadowColor, Opacity } from './effects';
import { BackgroundColor, BackgroundGradient } from './backgrounds';
import { TextColor } from './typography';

export interface BordersTheme {
  ringColor: RingColor;
  borderColor: BorderColor;
  outlineColor: OutlineColor;
  divideColor: DivideColor;
}

export interface FiltersTheme {
  backdropBlur: BackdropBlur;
  backdropOpacity: BackdropOpacity;
  dropShadow: DropShadow;
  blur: Blur;
}

export interface ThemeConfig extends BordersTheme, FiltersTheme {
  // Typography
  textColor: TextColor;
  // Background
  bgColor: BackgroundColor;
  bgGradient: BackgroundGradient;
  // Effects
  opacity: Opacity;
  boxShadow: BoxShadow;
  shadowColor: BoxShadowColor;
  colorScheme: 'scheme-light' | 'scheme-dark';
}
