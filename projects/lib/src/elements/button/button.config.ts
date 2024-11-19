import { Provider } from "@angular/core";
import { SizeOptions } from "../../core/types/size-options.type";
import { StyleConfig } from "../../core/types/style-config.type";
import { mergeConfig } from "../../core/utils/config.util";
import { BoxShadow } from "../../core/types/effects/box-shadow.type";
import { BoxShadowColor } from "../../core/types/effects/box-shadow-color.type";
import { InjectionTokenFactory } from "../../core/tokens/injection-token-factory";
import { ValueObject } from "../../core/utils/object.util";

/** Button variant */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tonal'
  | 'text'

/** Button size config */
type ButtonSizeOptions = Partial<SizeOptions>;
const ButtonSizeConfig: ButtonSizeOptions = {
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
    fontSize: 'text-sm',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold'
  },
  md: {
    padding: {
      x: 'px-4',
      y: 'py-2.5'
    },
    gap: 'gap-2',
    fontSize: 'text-base',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold'
  },
  lg: {
    padding: {
      x: 'px-5',
      y: 'py-3'
    },
    gap: 'gap-2.5',
    fontSize: 'text-lg',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold'
  },
  xl: {
    padding: {
      x: 'px-6',
      y: 'py-3.5'
    },
    gap: 'gap-3',
    fontSize: 'text-xl',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold'
  }
}

/** Base button config */
type ButtonBaseConfig = Partial<StyleConfig>
const ButtonBaseConfig: ButtonBaseConfig = {
  display: 'inline-flex',
  alignItem: 'items-center',
  justifyContent: 'justify-center',
  boxShadow: 'shadow-sm',
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  cursor: 'cursor-pointer',
  width: 'w-fit',
  lineHeight: 'leading-none',
  disabled: {
    opacity: 'disabled:opacity-50',
    cursor: 'disabled:cursor-not-allowed'
  }
}

/** Primary button config */
type PrimaryButtonConfig = Partial<ButtonBaseConfig>;
const PrimaryButtonConfig: PrimaryButtonConfig = {
  ...ButtonBaseConfig,
  textColor: 'text-white',
  bgColor: 'bg-blue-600',
  hover: {
    bgOpacity: 'hover:bg-opacity-90'
  },
  focusVisible: {
    borderType: 'focus-visible:outline',
    outlineWidth: 'focus-visible:outline-2',
    outlineColor: 'focus-visible:outline-blue-600',
    outlineOffset: 'focus-visible:outline-offset-2',
  }
}

/** Secondary button config */
type SecondaryButtonConfig = Partial<ButtonBaseConfig>;
const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...ButtonBaseConfig,
  ringWidth: 'ring-1',
  borderType: 'ring-inset',
  bgColor: 'bg-inherit',
  textColor: 'text-gray-800',
  ringColor: 'ring-gray-300',
  backdrop: 'backdrop-blur',
  hover: {
    bgColor: 'hover:bg-gray-300',
    bgOpacity: 'hover:bg-opacity-30'
  },
  focus: {
    ringColor: 'focus:ring-gray-400'
  },
  dark: {
    bgColor: 'dark:bg-inherit',
    textColor: 'dark:text-gray-200',
    ringColor: 'dark:ring-gray-700',
    hover: {
      bgColor: 'dark:hover:bg-gray-700',
      bgOpacity: 'dark:hover:bg-opacity-30'
    },
    focus: {
      ringColor: 'dark:focus:ring-gray-600',
    }
  }
}

/** Tonal button config */
type TonalButtonConfig = Partial<ButtonBaseConfig>;
const TonalButtonConfig: TonalButtonConfig = {
  ...ButtonBaseConfig,
  textColor: 'text-blue-500',
  bgOpacity: 'bg-opacity-10',
  bgColor: 'bg-blue-600',
  hover: {
    bgOpacity: 'hover:bg-opacity-15'
  },
  backdrop: 'backdrop-blur'
}

/** Text button config */
type TextButtonConfig = Partial<ButtonBaseConfig>;
const TextButtonConfig: TonalButtonConfig = {
  ...ButtonBaseConfig,
  boxShadow: 'shadow-none',
  textColor: 'text-gray-700',
  hover: {
    textColor: 'hover:text-gray-900'
  },
  dark: {
    textColor: 'dark:text-gray-300',
    hover: {
      textColor: 'dark:hover:text-gray-100'
    }
  }
}

/** Button config */
export interface ButtonConfig extends ValueObject {
  primary: Partial<PrimaryButtonConfig>,
  secondary: Partial<SecondaryButtonConfig>,
  tonal: Partial<TonalButtonConfig>,
  text: Partial<TextButtonConfig>,
  size: Partial<ButtonSizeOptions>,
  fab: {
    boxShadow?: BoxShadow
    boxShadowColor?: BoxShadowColor
  }
}

const ButtonConfig: ButtonConfig = {
  primary: PrimaryButtonConfig,
  secondary: SecondaryButtonConfig,
  tonal: TonalButtonConfig,
  text: TextButtonConfig,
  size: ButtonSizeConfig,
  fab: {
    boxShadow: 'shadow-lg'
  }
}

/**
 * Button config token
 */
export const BUTTON_CONFIG = InjectionTokenFactory.create(ButtonConfig, 'BUTTON_CONFIG');

/**
 * Button config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonConfig(config: Partial<ButtonConfig> = {}): Provider {
  return {
    provide: BUTTON_CONFIG,
    useValue: mergeConfig({ target: ButtonConfig, source: [config] })
  }
};
