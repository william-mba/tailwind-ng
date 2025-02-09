import { ComponentConfig } from "../types/component-config.type";
import { ConfigKey } from "./config.key";
import { AvatarConfig } from "./interfaces/avatar-config.interface";
import { BadgeConfig } from "./interfaces/badge-config.interface";
import { ButtonConfig } from "./interfaces/button-config.interface";
import { CheckboxConfig } from "./interfaces/checkbox-config.interface";
import { ComboboxItemConfig } from "./interfaces/combobox-item-config.interface";
import { DialogConfig } from "./interfaces/dialog-config.interface";
import { DropdownConfig } from "./interfaces/dropdown-config.interface";
import { IconConfig } from "./interfaces/icon-config.interface";
import { InputRadioConfig } from "./interfaces/input-radio-config.interface";
import { InputTextConfig } from "./interfaces/input-text-config.interface";
import { ToggleConfig } from "./interfaces/toggle-config.interface";

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
export type ConfigTypeOf<K extends ConfigKey = ConfigKey> =
  K extends 'Avatar' ? AvatarConfig :
  K extends 'Badge' ? BadgeConfig :
  K extends 'Button' ? ButtonConfig :
  K extends 'ButtonGroup' ? ComponentConfig :
  K extends 'ComboboxItem' ? ComboboxItemConfig :
  K extends 'Dropdown' ? DropdownConfig :
  K extends 'Icon' ? IconConfig :
  K extends 'InputText' ? InputTextConfig :
  K extends 'InputRadio' ? InputRadioConfig :
  K extends 'Dialog' ? DialogConfig :
  K extends 'Toggle' ? ToggleConfig :
  K extends 'Checkbox' ? CheckboxConfig : never;
