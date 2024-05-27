import { BaseButtonSettings } from "../button.settings";

export interface PrimaryButtonSettings extends BaseButtonSettings {}

export const PrimaryButtonSettings: PrimaryButtonSettings = {
  theme: {
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    modifier: {
      hover: {
        bgOpacity: 'hover:bg-opacity-85'
      }
    }
  }
}
