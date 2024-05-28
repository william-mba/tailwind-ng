import { BaseButtonSettings } from "../button.settings";

export interface PrimaryButtonSettings extends BaseButtonSettings {
  base?: BaseButtonSettings
}

export const PrimaryButtonSettings: PrimaryButtonSettings = {
  base: BaseButtonSettings,
  theme: {
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    modifier: {
      hover: {
        bgOpacity: 'hover:bg-opacity-90'
      }
    }
  }
}
