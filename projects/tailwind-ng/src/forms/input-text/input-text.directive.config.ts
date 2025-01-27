import { Provider } from '@angular/core';
import { INPUT_CONFIG, mergeConfig, InputTextConfig } from "@tailwind-ng/core";

const DefaultConfig = (): InputTextConfig => {
  return {
    radius: 'rounded-md',
    outlineStyle: 'outline-none',
    ring: 'ring-inset',
    ringWidth: 'ring-1',
    ringColor: 'ring-black/15',
    dark: {
      ringColor: 'dark:ring-white/15'
    },
    fontSize: 'text-sm',
    lineHeight: 'leading-6',
    backdropBlur: 'backdrop-blur-xs',
    paddingX: 'px-3',
    paddingY: 'py-1.5',
    width: 'w-full',
    bgColor: 'bg-transparent',
    focus: {
      radius: 'focus:rounded-md',
      borderColor: 'focus:border-transparent',
      ringColor: 'focus:ring-indigo-600',
      ringWidth: 'focus:ring-2',
      ring: 'focus:ring-inset'
    },
    disabled: {
      bgColor: 'disabled:bg-black/5',
      dark: {
        bgColor: 'disabled:dark:bg-white/5',
      }
    },
    placeholder: {
      textColor: 'placeholder:text-gray-400',
      dark: {
        textColor: 'placeholder:dark:text-gray-600'
      }
    },
    invalid: {
      ringColor: 'invalid:ring-red-600/60',
      focus: {
        ringColor: 'invalid:focus:ring-red-600/60'
      }
    },
    dataActive: {
      ringColor: 'data-active:ring-indigo-600',
      ringWidth: 'data-active:ring-2',
    }
  }
};

export const GetInputConfig = (customization?: Partial<InputTextConfig>): InputTextConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 * Input component config provider
 */
export function provideInputConfig(customization?: Partial<InputTextConfig>): Provider {
  return {
    provide: INPUT_CONFIG,
    useValue: GetInputConfig(customization)
  };
}
