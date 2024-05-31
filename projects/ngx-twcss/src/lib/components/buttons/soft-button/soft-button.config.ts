import { BaseButtonConfig } from "../base-button.config"

export const SoftButtonConfigKey = 'SoftButtonConfigKey';

export interface SoftButtonConfig extends Partial<BaseButtonConfig> { };

export const SoftButtonConfig: SoftButtonConfig = {
  ...BaseButtonConfig,
  theme: {
    textColor: 'text-indigo-600',
    bgColor: 'bg-indigo-600',
    bgOpacity: 'bg-opacity-10',
    modifier: {
      hover: {
        bgOpacity: 'hover:bg-opacity-20'
      }
    }
  }
}

