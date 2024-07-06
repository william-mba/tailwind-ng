import { BaseConfig } from "../../configs/base.config";

/** Button variant */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tonal'
  | 'text'

/** Base button config */
export type ButtonBaseConfig = Partial<BaseConfig>
export const ButtonBaseConfig: ButtonBaseConfig = {
  ...BaseConfig,
  textWrap: 'text-nowrap',
  overflow: 'overflow-hidden',
  userSelect: 'select-none'
}

/** Primary button config */
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

/** Secondary button config */
export type SecondaryButtonConfig = Partial<ButtonBaseConfig>;
export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...ButtonBaseConfig,
  borderWidth: 'border',
  theme: {
    light: {
      bgColor: 'bg-black',
      textColor: 'text-gray-700',
      borderColor: 'border-black',
      bgOpacity: 'bg-opacity-0',
      borderOpacity: 'border-opacity-15',
      hover: {
        bgOpacity: 'hover:bg-opacity-5'
      },
      focus: {
        borderOpacity: 'focus:border-opacity-30'
      }
    },
    dark: {
      bgColor: 'dark:bg-white',
      textColor: 'dark:text-gray-300',
      borderColor: 'dark:border-white',
      bgOpacity: 'dark:bg-opacity-0',
      borderOpacity: 'dark:border-opacity-15',
      hover: {
        bgOpacity: 'dark:hover:bg-opacity-5'
      },
      focus: {
        borderOpacity: 'dark:focus:border-opacity-30'
      }
    }
  }
}

/** Tonal button config */
export type TonalButtonConfig = Partial<ButtonBaseConfig>;
export const TonalButtonConfig: TonalButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    textColor: 'text-indigo-600',
    bgOpacity: 'bg-opacity-5',
    bgColor: 'bg-indigo-600',
    hover: {
      bgOpacity: 'hover:bg-opacity-10'
    }
  }
}


/** Text button config */
export type TextButtonConfig = Partial<ButtonBaseConfig>;
export const TextButtonConfig: TonalButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    light: {
      textColor: 'text-gray-700',
      hover: {
        textColor: 'hover:text-gray-950'
      }
    },
    dark: {
      textColor: 'dark:text-gray-300',
      hover: {
        textColor: 'dark:hover:text-gray-50'
      }
    }
  }
}


/** Button config key */
export const ButtonConfigKey = 'ButtonConfigKey';

/** Button config */
export type ButtonConfig = {
  primary: Partial<PrimaryButtonConfig>,
  secondary: Partial<SecondaryButtonConfig>,
  tonal: Partial<TonalButtonConfig>,
  text: Partial<TextButtonConfig>
}

export const ButtonConfig: ButtonConfig = {
  primary: PrimaryButtonConfig,
  secondary: SecondaryButtonConfig,
  tonal: TonalButtonConfig,
  text: TextButtonConfig
}
