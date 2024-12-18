import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { BoxShadowColor } from "../../../core/types/effects/box-shadow-color.type";
import { BoxShadow } from "../../../core/types/effects/box-shadow.type";
import { SizeOptions } from "../../../core/types/size-options.type";
import { Modifier, ConfigType } from "../../../core/types/config.type";
import { mergeConfig } from "../../../config/config.helper";

/** Button variant */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tonal'
  | 'text'

/** Button size config */
const ButtonSizeConfig = (): SizeOptions => {
  return {
    xs: {
      padding: {
        x: 'px-2',
        y: 'py-1.5'
      },
      gap: 'gap-1',
      fontSize: 'text-xs',
      borderRadius: 'rounded',
      fontWeight: 'font-semibold'
    },
    sm: {
      padding: {
        x: 'px-3',
        y: 'py-2'
      },
      gap: 'gap-1.5',
      fontSize: 'text-xs',
      borderRadius: 'rounded-md',
      fontWeight: 'font-semibold'
    },
    md: {
      padding: {
        x: 'px-4',
        y: 'py-2.5'
      },
      gap: 'gap-2',
      fontSize: 'text-sm',
      borderRadius: 'rounded-md',
      fontWeight: 'font-semibold'
    },
    lg: {
      padding: {
        x: 'px-5',
        y: 'py-3'
      },
      gap: 'gap-2.5',
      fontSize: 'text-sm',
      borderRadius: 'rounded-md',
      fontWeight: 'font-semibold'
    },
    xl: {
      padding: {
        x: 'px-6',
        y: 'py-3.5'
      },
      gap: 'gap-3',
      fontSize: 'text-base',
      borderRadius: 'rounded-md',
      fontWeight: 'font-semibold'
    }
  }
}

/** Base button config */
type ButtonBaseConfig = ConfigType
const ButtonBaseConfig = (): ButtonBaseConfig => {
  return {
    display: 'inline-flex',
    alignItems: 'items-center',
    justifyContent: 'justify-center',
    boxShadow: 'shadow-sm',
    textWrap: 'text-nowrap',
    userSelect: 'select-none',
    cursor: 'cursor-pointer',
    width: 'w-fit',
    height: 'h-fit',
    lineHeight: 'leading-none',
    disabled: {
      opacity: 'disabled:opacity-50',
      cursor: 'disabled:cursor-not-allowed'
    }
  }
}

/** Primary button config */
interface PrimaryButtonConfig extends Partial<ButtonBaseConfig> {
  focusVisible: Modifier<'focus-visible'>
};

const PrimaryButtonConfig = (): PrimaryButtonConfig => {
  return {
    ...ButtonBaseConfig(),
    textColor: 'text-white',
    bgColor: 'bg-blue-600',
    hover: {
      bgColor: 'hover:bg-blue-600/90'
    },
    focusVisible: {
      border: 'focus-visible:outline',
      outlineWidth: 'focus-visible:outline-2',
      outlineColor: 'focus-visible:outline-blue-600',
      outlineOffsetWidth: 'focus-visible:outline-offset-2'
    }
  }
}

/** Secondary button config */
type SecondaryButtonConfig = Partial<ButtonBaseConfig>;
const SecondaryButtonConfig = (): SecondaryButtonConfig => {
  return {
    ...ButtonBaseConfig(),
    ringWidth: 'ring-1',
    ringColor: 'ring-gray-300',
    ring: 'ring-inset',
    bgColor: 'bg-inherit',
    textColor: 'text-gray-800',
    backdropBlur: 'backdrop-blur-xs',
    hover: {
      bgColor: 'hover:bg-gray-300/30'
    },
    focus: {
      ringColor: 'focus:ring-gray-400'
    },
    dark: {
      bgColor: 'dark:bg-inherit',
      textColor: 'dark:text-gray-200',
      ringColor: 'dark:ring-gray-700',
      hover: {
        bgColor: 'dark:hover:bg-gray-700/30',
      },
      focus: {
        ringColor: 'dark:focus:ring-gray-600',
      }
    }
  }
}

/** Tonal button config */
type TonalButtonConfig = Partial<ButtonBaseConfig>;
const TonalButtonConfig = (): TonalButtonConfig => {
  return {
    ...ButtonBaseConfig(),
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-600/10',
    hover: {
      bgColor: 'hover:bg-blue-600/15'
    },
    backdropBlur: 'backdrop-blur-xs'
  }
}

/** Text button config */
type TextButtonConfig = Partial<ButtonBaseConfig>;
const TextButtonConfig = (): TonalButtonConfig => {
  return {
    ...ButtonBaseConfig(),
    boxShadow: 'shadow-none',
    textColor: 'text-gray-700',
    hover: {
      textColor: 'hover:text-gray-900'
    },
    dark: {
      textColor: 'dark:text-gray-300',
      hover: {
        textColor: 'dark:hover:text-gray-100',
      }
    }
  }
}

/** Button config */
export type ButtonConfig = {
  theme: {
    primary: Partial<PrimaryButtonConfig>,
    secondary: Partial<SecondaryButtonConfig>,
    tonal: Partial<TonalButtonConfig>,
    text: Partial<TextButtonConfig>,
    fab: {
      boxShadow?: BoxShadow
      boxShadowColor?: BoxShadowColor
    }
  },
  size: Partial<SizeOptions>
}

export const ButtonConfig = (): ButtonConfig => {
  return {
    theme: {
      primary: PrimaryButtonConfig(),
      secondary: SecondaryButtonConfig(),
      tonal: TonalButtonConfig(),
      text: TextButtonConfig(),
      fab: {
        boxShadow: 'shadow-lg'
      }
    },
    size: ButtonSizeConfig()
  }
}

/**
 * Button config token
 */
export const BUTTON_CONFIG = InjectionTokenFactory.create(ButtonConfig(), 'BUTTON_CONFIG');

/**
 * Button config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonConfig(config: Partial<ButtonConfig> = {}): Provider {
  return {
    provide: BUTTON_CONFIG,
    useValue: mergeConfig({ target: ButtonConfig(), source: [config] })
  }
};
