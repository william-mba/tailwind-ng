import { Provider } from '@angular/core';
import { StyleConfig } from '../../../../ngxtw-lib/src/lib/core/types/style-config.type';
import { mergeConfig } from '../../core/utils/config.util';
import { InjectionTokenFactory } from '../../core/tokens/injection-token-factory';

export interface InputConfig extends Partial<StyleConfig> { };

const InputConfig: InputConfig = {
  borderRadius: 'rounded-md',
  borderWidth: 'border-0',
  fontSize: 'text-sm',
  ringWidth: 'ring-1',
  lineHeight: 'leading-6',
  borderType: 'ring-inset',
  padding: {
    y: 'py-1.5',
    x: 'px-3'
  },
  width: 'w-full',
  boxShadow: 'shadow-sm',
  bgColor: 'bg-transparent',
  ringColor: 'ring-gray-300',
  dark: {
    ringColor: 'dark:ring-gray-700'
  },
  focus: {
    ringWidth: 'focus:ring-2',
    borderType: 'focus:ring-inset',
    ringColor: 'focus:ring-indigo-600',
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
