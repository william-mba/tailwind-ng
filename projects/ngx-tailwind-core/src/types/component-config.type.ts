import { ElementConfig, DarkThemeConfig } from "./element-config.type";

/**
 * An interface for defining the component style's config.
 */
export interface ComponentConfig extends Partial<ElementConfig>, Partial<DarkThemeConfig> { };
