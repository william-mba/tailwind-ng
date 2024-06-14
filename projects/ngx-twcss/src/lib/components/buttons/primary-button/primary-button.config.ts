import { ButtonBaseConfig } from "../button-base.config";

export const PrimaryButtonConfigKey = 'PrimaryButtonConfigKey';

export type PrimaryButtonConfig = Partial<ButtonBaseConfig>;

export const PrimaryButtonConfig: PrimaryButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    hover: {
      bgOpacity: 'hover:bg-opacity-80'
    }
  }
}
