import { Provider } from '@angular/core';
import { ConfigType } from '../../../core/types/config.type';
import { InjectionTokenFactory } from '../../../core/shared/injection-token.factory';
import { mergeConfig } from '../../../config/config.helper';

export interface InputConfig extends ConfigType { };

const InputConfig: InputConfig = {
  borderRadius: 'rounded-md',
  borderStyle: 'border-none',
  outlineStyle: 'outline-none',
  ringWidth: 'ring-1',
  ringColor: 'ring-gray-300',
  ring: 'ring-inset',
  fontSize: 'text-sm',
  lineHeight: 'leading-6',
  backdrop: 'backdrop-blur-xs',
  padding: {
    y: 'py-1.5',
    x: 'px-3'
  },
  width: 'w-full',
  boxShadow: 'shadow-sm',
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
};

/**
 * @ngxtw Input component config
 */
export const INPUT_CONFIG = InjectionTokenFactory.create(InputConfig, 'INPUT_CONFIG');

/**
 * Input component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideInputConfig(config: Partial<InputConfig> = {}): Provider {
  return {
    provide: INPUT_CONFIG,
    useValue: mergeConfig({ target: InputConfig, source: [config] })
  };
}
