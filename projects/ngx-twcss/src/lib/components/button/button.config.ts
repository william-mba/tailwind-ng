import { Config } from "../../core/types/config";
import { SizeOptions } from "../../core/types/size-options";

/** Button variant */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tonal'
  | 'text'

/** Button size config */
export type ButtonSizeOptions = Partial<SizeOptions>;
export const ButtonSizeConfig: ButtonSizeOptions = {
  xs: {
    padding: {
      x: 'px-2',
      y: 'py-1'
    },
    gap: 'gap-0.5',
    fontSize: 'text-[9px]',
    borderRadius: 'rounded',
    fontWeight: 'font-semibold',
    extend: {
      iconSize: '*:size-3'
    }
  },
  sm: {
    padding: {
      x: 'px-3',
      y: 'py-1.5'
    },
    gap: 'gap-0.5',
    fontSize: 'text-xs',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold',
    extend: {
      iconSize: '*:size-3.5'
    }
  },
  md: {
    padding: {
      x: 'px-4',
      y: 'py-2'
    },
    gap: 'gap-1',
    fontSize: 'text-sm',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold',
    extend: {
      iconSize: '*:size-4'
    }
  },
  lg: {
    padding: {
      x: 'px-5',
      y: 'py-2.5'
    },
    gap: 'gap-1',
    fontSize: 'text-base',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold',
    extend: {
      iconSize: '*:size-5'
    }
  },
  xl: {
    padding: {
      x: 'px-7',
      y: 'py-3.5'
    },
    gap: 'gap-1.5',
    fontSize: 'text-base',
    borderRadius: 'rounded-md',
    fontWeight: 'font-semibold',
    extend: {
      iconSize: '*:size-5'
    }
  }
}

/** Button Icon size config */
export type ButtonIconSizeOptions = Partial<SizeOptions>;
export const ButtonIconSizeConfig: ButtonIconSizeOptions = {
  xs: {
    padding: 'p-1',
    size: '*:size-3'
  },
  sm: {
    padding: 'p-1.5',
    size: '*:size-4'
  },
  md: {
    padding: 'p-2',
    size: '*:size-5'
  },
  lg: {
    padding: 'p-2.5',
    size: '*:size-6'
  },
  xl: {
    padding: 'p-3.5',
    size: '*:size-7'
  }
}

/** Base button config */
export type ButtonBaseConfig = Partial<Config>
export const ButtonBaseConfig: ButtonBaseConfig = {
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  height: 'h-fit',
  shadow: 'shadow-sm',
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  cursor: 'cursor-pointer'
}

/** Primary button config */
export type PrimaryButtonConfig = Partial<ButtonBaseConfig>;
export const PrimaryButtonConfig: PrimaryButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    hover: {
      bgOpacity: 'hover:bg-opacity-90'
    }
  }
}

/** Secondary button config */
export type SecondaryButtonConfig = Partial<ButtonBaseConfig>;
export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...ButtonBaseConfig,
  borderWidth: 'ring-1',
  extend: 'ring-inset',
  theme: {
    light: {
      bgColor: 'bg-black',
      bgOpacity: 'bg-opacity-0',
      textColor: 'text-gray-900',
      borderColor: 'ring-black',
      borderOpacity: 'ring-opacity-10',
      hover: {
        bgOpacity: 'hover:bg-opacity-5'
      },
      focus: {
        borderOpacity: 'focus:ring-opacity-20'
      }
    },
    dark: {
      bgColor: 'dark:bg-white',
      bgOpacity: 'dark:bg-opacity-0',
      textColor: 'dark:text-gray-100',
      borderColor: 'dark:ring-white',
      borderOpacity: 'dark:ring-opacity-10',
      hover: {
        bgOpacity: 'dark:hover:bg-opacity-5'
      },
      focus: {
        borderOpacity: 'dark:focus:ring-opacity-20'
      }
    }
  }
}

/** Tonal button config */
export type TonalButtonConfig = Partial<ButtonBaseConfig>;
export const TonalButtonConfig: TonalButtonConfig = {
  ...ButtonBaseConfig,
  theme: {
    textColor: 'text-indigo-500',
    bgOpacity: 'bg-opacity-10',
    bgColor: 'bg-indigo-600',
    hover: {
      bgOpacity: 'hover:bg-opacity-15'
    }
  },
  filters: {
    backdrop: 'backdrop-blur'
  }
}

/** Text button config */
export type TextButtonConfig = Partial<ButtonBaseConfig>;
export const TextButtonConfig: TonalButtonConfig = {
  ...ButtonBaseConfig,
  shadow: 'shadow-none',
  theme: {
    light: {
      textColor: 'text-black',
      textOpacity: 'text-opacity-70',
      hover: {
        textOpacity: 'hover:text-opacity-100'
      }
    },
    dark: {
      textColor: 'dark:text-white',
      textOpacity: 'dark:text-opacity-70',
      hover: {
        textOpacity: 'dark:hover:text-opacity-100'
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
  size: Partial<ButtonSizeOptions>
}

export const ButtonConfig: ButtonConfig = {
  primary: PrimaryButtonConfig,
  secondary: SecondaryButtonConfig,
  tonal: TonalButtonConfig,
  text: TextButtonConfig,
  size: ButtonSizeConfig
}
