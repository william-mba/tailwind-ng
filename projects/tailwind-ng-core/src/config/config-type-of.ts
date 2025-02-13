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
 * Returns the config type of `K`.
 * @param K The config key.
 * @param X The type of config to return. Default is `'Partial<InferredType>'`.
 * @returns The config type of `K`.
 * @example
 * ```ts
 * // using type alias
 * type AvatarConfig = ConfigTypeOf<'Avatar'>;
 *
 * // using interface
 * interface AvatarConfig extends ConfigTypeOf<'Avatar'> {};
 * ```
 */
export type ConfigTypeOf<K extends ConfigKey = ConfigKey, X extends 'Full' | 'Partial' = 'Partial'> =
  K extends 'Avatar' ? X extends 'Full' ? AvatarConfig : Partial<AvatarConfig> :
  K extends 'Badge' ? X extends 'Full' ? BadgeConfig : Partial<BadgeConfig> :
  K extends 'Button' ? X extends 'Full' ? ButtonConfig : Partial<ButtonConfig> :
  K extends 'ButtonGroup' ? X extends 'Full' ? ComponentConfig : Partial<ComponentConfig> :
  K extends 'ComboboxItem' ? X extends 'Full' ? ComboboxItemConfig : Partial<ComboboxItemConfig> :
  K extends 'Dropdown' ? X extends 'Full' ? DropdownConfig : Partial<DropdownConfig> :
  K extends 'Icon' ? X extends 'Full' ? IconConfig : Partial<IconConfig> :
  K extends 'InputText' ? X extends 'Full' ? InputTextConfig : Partial<InputTextConfig> :
  K extends 'InputRadio' ? X extends 'Full' ? InputRadioConfig : Partial<InputRadioConfig> :
  K extends 'Dialog' ? X extends 'Full' ? DialogConfig : Partial<DialogConfig> :
  K extends 'Toggle' ? X extends 'Full' ? ToggleConfig : Partial<ToggleConfig> :
  K extends 'Checkbox' ? X extends 'Full' ? CheckboxConfig : Partial<CheckboxConfig> : never;
