import { Provider } from "@angular/core";
import { BUTTON_CONFIG, SizeOptions, mergeConfig, ComponentConfig, ButtonConfig } from "@tailwind-ng/core";

/** Button size config */
const ButtonSizeConfig = (): SizeOptions => {
  return {
    xs: {
      paddingX: 'px-2',
      paddingY: 'py-1.5',
      gap: 'gap-1',
      fontSize: 'text-xs',
      radius: 'rounded',
      fontWeight: 'font-semibold'
    },
    sm: {
      paddingX: 'px-3',
      paddingY: 'py-2',
      gap: 'gap-1.5',
      fontSize: 'text-xs',
      radius: 'rounded-md',
      fontWeight: 'font-semibold'
    },
    md: {
      paddingX: 'px-4',
      paddingY: 'py-2.5',
      gap: 'gap-2',
      fontSize: 'text-sm',
      radius: 'rounded-md',
      fontWeight: 'font-semibold'
    },
    lg: {
      paddingX: 'px-5',
      paddingY: 'py-3',
      gap: 'gap-2.5',
      fontSize: 'text-sm',
      radius: 'rounded-md',
      fontWeight: 'font-semibold'
    },
    xl: {
      paddingX: 'px-6',
      paddingY: 'py-3.5',
      gap: 'gap-3',
      fontSize: 'text-base',
      radius: 'rounded-md',
      fontWeight: 'font-semibold'
    }
  }
}

/** Base button config */
const ButtonBaseConfig = (): ComponentConfig => {
  return {
    display: 'inline-flex',
    alignItems: 'items-center',
    justifyContent: 'justify-center',
    boxShadow: 'shadow-xs',
    textWrap: 'text-nowrap',
    userSelect: 'select-none',
    cursor: 'cursor-pointer',
    width: 'w-fit',
    height: 'h-fit',
    lineHeight: 'leading-none',
    disabled: {
      opacity: 'disabled:opacity-50',
      cursor: 'disabled:cursor-not-allowed'
    },
    transition: {
      property: 'transition-colors',
      duration: 'duration-100'
    }
  }
}

/** Primary button config */
const PrimaryButtonConfig = (): ComponentConfig => {
  return {
    ...ButtonBaseConfig(),
    textColor: 'text-white',
    bgColor: 'bg-blue-600',
    hover: {
      bgColor: 'hover:bg-blue-600/90'
    },
    focus: {
      border: 'focus:outline',
      outlineWidth: 'focus:outline-1',
      outlineColor: 'focus:outline-blue-600',
      outlineOffsetWidth: 'focus:outline-offset-2'
    },
    active: {
      bgColor: 'active:bg-blue-700/90'
    }
  }
}

/** Secondary button config */
const SecondaryButtonConfig = (): ComponentConfig => {
  return {
    ...ButtonBaseConfig(),
    ringWidth: 'ring-1',
    ringColor: 'ring-gray-300',
    ring: 'ring-inset',
    bgColor: 'bg-inherit',
    textColor: 'text-gray-800',
    backdropBlur: 'backdrop-blur-xs',
    dark: {
      bgColor: 'dark:bg-inherit',
      textColor: 'dark:text-gray-200',
      ringColor: 'dark:ring-gray-700/90'
    },
    hover: {
      bgColor: 'hover:bg-gray-300/30',
      dark: {
        bgColor: 'hover:dark:bg-gray-700/30'
      }
    },
    focus: {
      ringColor: 'focus:ring-gray-400/90',
      border: 'focus:outline',
      ringWidth: 'focus:ring-0',
      outlineWidth: 'focus:outline-1',
      outlineColor: 'focus:outline-gray-500/80',
      dark: {
        ringColor: 'focus:dark:ring-gray-600'
      }
    },
    active: {
      bgColor: 'active:bg-gray-300/60',
      dark: {
        bgColor: 'active:dark:bg-gray-700/60'
      }
    }
  }
}

/** Tonal button config */
const TonalButtonConfig = (): ComponentConfig => {
  return {
    ...ButtonBaseConfig(),
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-600/10',
    hover: {
      bgColor: 'hover:bg-blue-600/15'
    },
    backdropBlur: 'backdrop-blur-xs',
    active: {
      bgColor: 'active:bg-blue-600/25'
    },
    focus: {
      border: 'focus:outline',
      outlineWidth: 'focus:outline-1',
      outlineColor: 'focus:outline-blue-500/80',
    }
  }
}

/** Text button config */
const TextButtonConfig = (): ComponentConfig => {
  return {
    ...ButtonBaseConfig(),
    boxShadow: 'shadow-none',
    textColor: 'text-gray-700',
    dark: {
      textColor: 'dark:text-gray-300'
    },
    hover: {
      textColor: 'hover:text-gray-900',
      dark: {
        textColor: 'hover:dark:text-gray-100',
      }
    },
    focus: {
      border: 'focus:outline',
      borderStyle: 'focus:border-dotted',
      outlineWidth: 'focus:outline-1',
      outlineColor: 'focus:outline-gray-500/80',
    }
  }
}

const DefaultConfig = (): ButtonConfig => {
  return {
    ...ButtonSizeConfig(),
    primary: PrimaryButtonConfig(),
    secondary: SecondaryButtonConfig(),
    tonal: TonalButtonConfig(),
    text: TextButtonConfig(),
    fab: {
      boxShadow: 'shadow-lg'
    }
  }
}

export const GetButtonConfig = (customization?: Partial<ButtonConfig>): ButtonConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * Button config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonConfig(customization?: Partial<ButtonConfig>): Provider {
  return {
    provide: BUTTON_CONFIG,
    useValue: GetButtonConfig(customization)
  }
};
