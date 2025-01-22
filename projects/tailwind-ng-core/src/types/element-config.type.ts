import { Appearance, PointerEvents, UserSelect } from './interactivity';
import { LayoutConfig } from './layout-config.type';
import { ThemeConfig } from './theme-config.type';
import { Config } from './config.type';

export interface ElementConfig extends LayoutConfig, ThemeConfig {
  userSelect: UserSelect;
  pointerEvents: PointerEvents;
  appearance: Appearance;
  /**
   * Defines element's children configuration.
   */
  child: Modifier<'*'>;
  // State modifiers
  sm: Modifier<'sm', LayoutConfig>;
  md: Modifier<'md', LayoutConfig>;
  lg: Modifier<'lg', LayoutConfig>;
  // State modifiers
  focus: Modifier<'focus', StateConfig>;
  hover: Modifier<'hover', StateConfig>;
  active: Modifier<'active', StateConfig>;
  disabled: Modifier<'disabled', StateConfig>;
  /** Applied when the element has visual focus.*/
  dataActive: Modifier<'data-active', StateConfig>;
  focusVisible: Modifier<'focus-visible', StateConfig>;
};

export interface DarkThemeConfig {
  dark: Modifier<'dark', ThemeConfig>;
}

export interface StateConfig extends LayoutConfig, ThemeConfig, DarkThemeConfig { };


/**
 * Define config for a special state of an element using the given pseudo-class.
 * @param PseudoClass - The pseudo-class to add on the config. Example: `"hover"`, `"focus"`, `"active"`, etc.
 */
export type Modifier<PseudoClass extends string, Type extends Config = ElementConfig> = {
  [K in keyof Type]?: `${Type[K] & {}}` extends `${infer X}` ? `${PseudoClass}:${X}` : Modifier<PseudoClass, Type[K]>
};
