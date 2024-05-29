import { BaseButtonConfig } from "../button.config";

export interface PrimaryButtonConfig extends BaseButtonConfig {}

export const PrimaryButtonConfig: Partial<PrimaryButtonConfig> = {
  ...BaseButtonConfig,
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
