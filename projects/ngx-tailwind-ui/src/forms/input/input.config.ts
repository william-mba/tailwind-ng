import { Provider } from '@angular/core';
import { INPUT_CONFIG, mergeConfig, InputConfig } from "@ngx-tailwind/core";

const DefaultConfig = (): InputConfig => {
  return {
    radius: 'rounded-md',
    borderStyle: 'border-none',
    outlineStyle: 'outline-none',
    ringWidth: 'ring-1',
    ringColor: 'ring-gray-300',
    ring: 'ring-inset',
    fontSize: 'text-sm',
    lineHeight: 'leading-6',
    backdropBlur: 'backdrop-blur-xs',
    paddingX: 'px-3',
    paddingY: 'py-1.5',
    width: 'w-full',
    bgColor: 'bg-transparent',
    dark: {
      ringColor: 'dark:ring-gray-700'
    },
    focus: {
      radius: 'focus:rounded-md',
      borderColor: 'focus:border-transparent',
      ringColor: 'focus:ring-indigo-600',
      ringWidth: 'focus:ring-2',
      ring: 'focus:ring-inset'
    },
    disabled: {
      opacity: 'disabled:opacity-70',
      cursor: 'disabled:cursor-not-allowed',
      bgColor: 'disabled:bg-black/5',
      dark: {
        bgColor: 'disabled:dark:bg-white/10',
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

export const GetInputConfig = (customization?: Partial<InputConfig>): InputConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 * Input component config provider
 */
export function provideInputConfig(customization?: Partial<InputConfig>): Provider {
  return {
    provide: INPUT_CONFIG,
    useValue: GetInputConfig(customization)
  };
}
