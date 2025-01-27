import { Provider } from '@angular/core';
import { INPUT_RADIO_CONFIG, mergeConfig, InputRadioConfig } from "@tailwind-ng/core";

const DefaultConfig = (): InputRadioConfig => {
  return {
    size: 'size-4',
    position: 'relative',
    radius: 'rounded-full',
    appearance: 'appearance-none',
    borderWidth: 'border-1',
    borderColor: 'border-black/20',
    dark: {
      borderColor: 'dark:border-white/20',
    },
    forcedColors: {
      appearance: 'forced-colors:appearance-auto',
      before: {
        display: 'forced-colors:before:hidden',
      }
    },
    disabled: {
      bgColor: 'disabled:bg-black/5',
      dark: {
        bgColor: 'disabled:dark:bg-white/5'
      }
    },
    focus: {
      outlineWidth: 'focus:outline-2',
      outlineOffsetWidth: 'focus:outline-offset-2',
      outlineColor: 'focus:outline-blue-600',
    },
    checked: {
      borderColor: 'checked:border-blue-600',
      bgColor: 'checked:bg-blue-600',
      before: {
        position: 'checked:before:absolute',
        inset: 'checked:before:inset-1',
        radius: 'checked:before:rounded-full',
        bgColor: 'checked:before:bg-white'
      },
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
