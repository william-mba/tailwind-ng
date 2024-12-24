import { Provider } from '@angular/core';
import { ConfigType } from '../../../core/types/config.type';
import { InjectionTokenFactory } from '../../../core/shared/injection-token.factory';
import { mergeConfig } from '../../../config/config.helper';
import { FullyOptional } from '../../../core/types/fully-optional.type';

export interface InputConfig extends ConfigType { };

const DefaultConfig = (): InputConfig => {
  return {
    borderRadius: 'rounded-md',
    borderStyle: 'border-none',
    outlineStyle: 'outline-none',
    ringWidth: 'ring-1',
    ringColor: 'ring-gray-300',
    ring: 'ring-inset',
    fontSize: 'text-sm',
    lineHeight: 'leading-6',
    backdropBlur: 'backdrop-blur-xs',
    padding: {
      y: 'py-1.5',
      x: 'px-3'
    },
    width: 'w-full',
    bgColor: 'bg-transparent',
    dark: {
      ringColor: 'dark:ring-gray-700'
    },
    focus: {
      borderRadius: 'focus:rounded-md',
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
    }
  }
};
export const InputConfig = (customization?: FullyOptional<InputConfig>): InputConfig => {
  return !customization ? DefaultConfig() : mergeConfig({ target: DefaultConfig(), source: [customization] });
};

/**
 * @ngxtw Input component config
 */
export const INPUT_CONFIG = InjectionTokenFactory.create(InputConfig(), 'INPUT_CONFIG');

/**
 * Input component config provider
 */
export function provideInputConfig(customization?: FullyOptional<InputConfig>): Provider {
  return {
    provide: INPUT_CONFIG,
    useValue: InputConfig(customization)
  };
}
