import { ComponentConfig } from "../types/component-config.type";
import { ConfigKey } from "./config-key";
import { AvatarConfig, BadgeConfig, ButtonConfig, ComboboxItemConfig, DialogConfig, DropdownConfig, IconConfig, InputConfig, ToggleConfig } from "./interfaces";

export type ConfigFrom<T extends ConfigKey> =
  T extends 'Avatar' ? AvatarConfig :
  T extends 'Badge' ? BadgeConfig :
  T extends 'Button' ? ButtonConfig :
  T extends 'ButtonGroup' ? ComponentConfig :
  T extends 'ComboboxItem' ? ComboboxItemConfig :
  T extends 'Dropdown' ? DropdownConfig :
  T extends 'Icon' ? IconConfig :
  T extends 'Input' ? InputConfig :
  T extends 'Dialog' ? DialogConfig :
  T extends 'Toggle' ? ToggleConfig :
  T extends '' ? unknown : never;
