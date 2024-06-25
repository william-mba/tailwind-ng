import { ButtonBaseConfig } from "./button-base.config"

export const SoftButtonConfigKey = 'SoftButtonConfigKey';

export type SoftButtonConfig = Partial<ButtonBaseConfig>;

export const SoftButtonConfig: SoftButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    textColor: 'text-indigo-600',
    bgOpacity: 'bg-opacity-10',
    bgColor: 'bg-indigo-600',
    hover: {
      bgOpacity: 'hover:bg-opacity-20'
    }
  }
}
