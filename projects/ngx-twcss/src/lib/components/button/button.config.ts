import { BaseConfig } from "../../configs/base.config";

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'soft'
  | 'text'

// Base config
export type ButtonBaseConfig = Partial<BaseConfig>

export const ButtonBaseConfig: ButtonBaseConfig = {
  ...BaseConfig,
  textWrap: 'text-nowrap',
  overflow: 'overflow-hidden',
  userSelect: 'select-none'
}

// Primary button config
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

// Secondary button config
export type SecondaryButtonConfig = Partial<ButtonBaseConfig>;

export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...ButtonBaseConfig,
  borderWidth: 'border',
  userSelect: "select-text",
  theme: {
    light: {
      textColor: 'text-gray-800',
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
      textColor: 'dark:text-gray-300',
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

// Soft button config
export type SoftButtonConfig = Partial<ButtonBaseConfig>;

export const SoftButtonConfig: SoftButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    textColor: 'text-indigo-500',
    bgOpacity: 'bg-opacity-10',
    bgColor: 'bg-indigo-600',
    hover: {
      bgOpacity: 'hover:bg-opacity-20'
    }
  }
}


// Text button config
export type TextButtonConfig = Partial<ButtonBaseConfig>;

export const TextButtonConfig: SoftButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    light: {
      textColor: 'text-gray-800',
      hover: {
        textColor: 'hover:text-gray-600'
      }
    },
    dark: {
      textColor: 'dark:text-gray-100',
      hover: {
        textColor: 'dark:hover:text-gray-300'
      }
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
  soft: Partial<SoftButtonConfig>,
  text: Partial<TextButtonConfig>
}

export const ButtonConfig: ButtonConfig = {
  primary: PrimaryButtonConfig,
  secondary: SecondaryButtonConfig,
  soft: SoftButtonConfig,
  text: TextButtonConfig
}
