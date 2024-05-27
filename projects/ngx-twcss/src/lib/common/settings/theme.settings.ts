import { ModifierSettings } from "./modifier.settings";
import { BackgroundColor } from "../types/backgrounds/background-color";
import { BorderColor } from "../types/borders/border-color";
import { BorderOpacity } from "../types/borders/border-opacity";
import { TextColor } from "../types/typography/text-color";
import { PointerEvents } from "../types/interactivity/pointer-events";
import { OpacityOnDisabled } from "../types/effects/opacity";

/**Theme type @namespace settings */
export interface ThemeSettings {
  textColor?: TextColor,
  bgColor?: BackgroundColor,
  bgGradient?: BackgroundGradientSettings,
  borderColor?: BorderColor,
  borderOpacity?: BorderOpacity,
  modifier?: ModifierSettings
}

/**BackgroundGradient type @namespace settings */
export type BackgroundGradientSettings = {
  direction: 'bg-gradient-to-r' | 'bg-gradient-to-l',
  from: string,
  to: string,
  modifier?: Record<string, object>
}

export type OnDisabledSettings = {
  opacity?: OpacityOnDisabled,
  pointerEvents?: PointerEvents,
}

export const ThemeSettings: ThemeSettings = {}
export const BackgroundGradientSettings: Partial<BackgroundGradientSettings> = {}
export const OnDisabledSettings: OnDisabledSettings = {
  opacity: 'opacity-20',
  pointerEvents: 'pointer-events-none'
}
