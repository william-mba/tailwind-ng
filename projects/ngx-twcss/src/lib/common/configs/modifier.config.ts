import { FocusConfig } from "./modifiers/focus.config";
import { HoverConfig } from "./modifiers/hover.config";

/**Modifier type @namespace Config */
export interface ModifierConfig {
  hover?: HoverConfig,
  focus?: FocusConfig,
}

export const ModifierConfig: ModifierConfig = {}
