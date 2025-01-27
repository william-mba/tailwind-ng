import { ComponentConfig } from "../types/component-config.type";
import { ConfigKey } from "./config-key.type";
import { AvatarConfig, BadgeConfig, ButtonConfig, CheckboxConfig, ComboboxItemConfig, DialogConfig, DropdownConfig, IconConfig, InputTextConfig, InputRadioConfig, ToggleConfig } from "./interfaces";

/**
 * Returns the config type associated to the specified key.
 * @example
 * ```ts
 * // using type alias
 * type AvatarConfig = ConfigTypeOf<'Avatar'>;
 *
 * // using interface
 * interface AvatarConfig extends ConfigTypeOf<'Avatar'> {};
 * ```
 */
export type ConfigTypeOf<K extends ConfigKey> =
  K extends 'Avatar' ? AvatarConfig :
  K extends 'Badge' ? BadgeConfig :
  K extends 'Button' ? ButtonConfig :
  K extends 'ButtonGroup' ? ComponentConfig :
  K extends 'ComboboxItem' ? ComboboxItemConfig :
  K extends 'Dropdown' ? DropdownConfig :
  K extends 'Icon' ? IconConfig :
  K extends 'Input' ? InputTextConfig :
  K extends 'InputRadio' ? InputRadioConfig :
  K extends 'Dialog' ? DialogConfig :
  K extends 'Toggle' ? ToggleConfig :
  K extends 'Checkbox' ? CheckboxConfig :
  K extends '' ? unknown : never;
