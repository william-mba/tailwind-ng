import { BaseConfig } from "../../configs/base.config";

// Base config
export type ButtonBaseConfig = Partial<BaseConfig>

export const ButtonBaseConfig: ButtonBaseConfig = {
  ...BaseConfig,
  textWrap: 'text-nowrap',
  overflow: 'overflow-hidden',
  userSelect: 'select-none'
}

// Primary config
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

// Secondary config
export type SecondaryButtonConfig = Partial<ButtonBaseConfig>;

export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...ButtonBaseConfig,
  borderWidth: 'border',
  userSelect: "select-text",
  theme: {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-neutral-100',
      borderColor: 'border-neutral-200',
      hover: {
        bgColor: 'hover:bg-neutral-200'
      },
      focus: {
        borderColor: 'focus:border-neutral-400'
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700',
      hover: {
        bgColor: 'dark:hover:bg-neutral-700'
      },
      focus: {
        borderColor: 'dark:focus:border-neutral-500'
      }
    }
  }
}

// Soft config
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


/**Button config key
 * @package ngx-twcss
 */
export const ButtonConfigKey = 'ButtonConfigKey';

/**Button config
 * @package ngx-twcss
 */
export type ButtonConfig = {
  primary: Partial<PrimaryButtonConfig>,
  secondary: Partial<SecondaryButtonConfig>,
  soft: Partial<SoftButtonConfig>
}

export const ButtonConfig: ButtonConfig = {
  primary: PrimaryButtonConfig,
  secondary: SecondaryButtonConfig,
  soft: SoftButtonConfig
}
