import { BaseButtonConfig } from "../button.config";

export interface PrimaryButtonConfig extends BaseButtonConfig {
  base?: BaseButtonConfig
}

export const PrimaryButtonConfig: PrimaryButtonConfig = {
  base: BaseButtonConfig,
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
