import { ModifierConfig } from "./modifier.config";
import { BackgroundColor } from "../types/backgrounds/background-color";
import { BorderColor } from "../types/borders/border-color";
import { BorderOpacity } from "../types/borders/border-opacity";
import { TextColor } from "../types/typography/text-color";
import { PointerEvents } from "../types/interactivity/pointer-events";
import { OpacityOnDisabled } from "../types/effects/opacity";
import { BackgroundOpacity } from "../types/backgrounds/background-opacity";

export interface ThemeConfig {
  textColor: TextColor,
  bgColor: BackgroundColor,
  bgOpacity: BackgroundOpacity,
  bgGradient: BackgroundGradientConfig,
  borderColor: BorderColor,
  borderOpacity: BorderOpacity,
  modifier: ModifierConfig
}

export type BackgroundGradientConfig = {
  direction: 'bg-gradient-to-r' | 'bg-gradient-to-l',
  from: string,
  to: string,
  modifier: Record<string, object>
}

export type OnDisabledConfig = {
  opacity: OpacityOnDisabled,
  pointerEvents: PointerEvents,
}

export const ThemeConfig: Partial<ThemeConfig> = {}
export const BackgroundGradientConfig: Partial<BackgroundGradientConfig> = {}

export const OnDisabledConfig: OnDisabledConfig = {
  opacity: 'opacity-20',
  pointerEvents: 'pointer-events-none'
}
