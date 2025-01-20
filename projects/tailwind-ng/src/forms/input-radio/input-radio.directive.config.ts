import { Provider } from '@angular/core';
import { INPUT_RADIO_CONFIG, mergeConfig, InputRadioConfig } from "@tailwind-ng/core";

const DefaultConfig = (): InputRadioConfig => {
  return {
    position: 'relative',
    radius: 'rounded-full',
    size: 'size-4',
    appearance: 'appearance-none',
    borderWidth: 'border-1',
    borderColor: 'border-gray-300',
    dark: {
      borderColor: 'dark:border-gray-700',
    },
    before: {
      position: 'before:absolute',
      inset: 'before:inset-1',
      radius: 'before:rounded-full',
      bgColor: 'before:bg-white'
    },
    forcedColors: {
      appearance: 'forced-colors:appearance-auto',
      before: {
        display: 'forced-colors:before:hidden',
      }
    },
    disabled: {
      bgColor: 'disabled:bg-black/15',
      borderColor: 'disabled:border-transparent',
      dark: {
        bgColor: 'disabled:dark:bg-white/30'
      }
    },
    focusVisible: {
      outlineWidth: 'focus-visible:outline-2',
      outlineOffsetWidth: 'focus-visible:outline-offset-2',
      outlineColor: 'focus-visible:outline-blue-600',
    },
    notChecked: {
      before: {
        display: 'not-checked:before:hidden',
      }
    },
    checked: {
      borderColor: 'checked:border-blue-600',
      bgColor: 'checked:bg-blue-600',
    }
  }
};

export const GetInputRadioConfig = (customization?: Partial<InputRadioConfig>): InputRadioConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 * Provides the input radio config's token
 */
export function provideInputRadioConfig(customization?: Partial<InputRadioConfig>): Provider {
  return {
    provide: INPUT_RADIO_CONFIG,
    useValue: GetInputRadioConfig(customization)
  };
}
