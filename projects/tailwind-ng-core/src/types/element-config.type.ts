import { Appearance, PointerEvents, UserSelect } from './interactivity';
import { LayoutConfig } from './layout-config.type';
import { ThemeConfig } from './theme-config.type';
import { Config } from './config.type';

export interface ElementConfig extends LayoutConfig, ThemeConfig {
  userSelect: UserSelect;
  pointerEvents: PointerEvents;
  appearance: Appearance;
  is: 'peer' | 'group' | `peer/${string}` | `group/${string}`;
  /**
   * Defines element's children configuration.
   */
  child: Variant<'*', ElementConfig & DarkThemeConfig>;
  // State modifiers
  sm: Variant<'sm', LayoutConfig>;
  md: Variant<'md', LayoutConfig>;
  lg: Variant<'lg', LayoutConfig>;
  // State modifiers
  focus: Variant<'focus', StateConfig>;
  hover: Variant<'hover', StateConfig>;
  active: Variant<'active', StateConfig>;
  disabled: Variant<'disabled', StateConfig>;
  /** Applied when the element has visual focus.*/
  dataActive: Variant<'data-active', StateConfig>;
  focusVisible: Variant<'focus-visible', StateConfig>;
};

export interface DarkThemeConfig {
  dark: Variant<'dark', ThemeConfig>;
}

export interface StateConfig extends LayoutConfig, ThemeConfig, DarkThemeConfig { };

/**
 * Defines a config's variant that will be applied conditionally when the element will be in the matching state.
 * @param Tag - The variant's tag. Example: `"hover"`, `"focus"`, `"active"`, etc.
 * @param Type - The config type to apply the variant on. Default: `ElementConfig`.
 */
export type Variant<Tag extends string, Type extends Config = ElementConfig> = {
  [K in keyof Type]?: `${Type[K] & {}}` extends `${infer X}` ? `${Tag}:${X}` : Variant<Tag, Type[K]>
};
