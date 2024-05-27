import { FocusSettings } from "./modifiers/focus.settings";
import { HoverSettings } from "./modifiers/hover.settings";

/**Modifier type @namespace settings */
export interface ModifierSettings {
  hover?: HoverSettings,
  focus?: FocusSettings,
}

export const ModifierSettings: ModifierSettings = {}
