import { BackgroundColor } from "../core/types/backgrounds/background-color";
import { BackgroundOpacity } from "../core/types/backgrounds/background-opacity";
import { BorderColor } from "../core/types/borders/border-color";
import { BorderOpacity } from "../core/types/borders/border-opacity";
import { OpacityOnDisabled } from "../core/types/effects/opacity";
import { PointerEvents } from "../core/types/interactivity/pointer-events";
import { TextColor } from "../core/types/typography/text-color";
import { ModifierConfig } from "./modifier.config";

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
