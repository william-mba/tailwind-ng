import { Provider } from '@angular/core';
import { CHECKBOX_CONFIG, mergeConfig, CheckboxConfig } from "@tailwind-ng/core";

const DefaultConfig = (): CheckboxConfig => {
  return {
    is: 'peer',
    size: 'size-4',
    radius: 'rounded-sm',
    appearance: 'appearance-none',
    borderWidth: 'border-1',
    borderColor: 'border-black/20',
    dark: {
      borderColor: 'dark:border-white/20',
    },
    forcedColors: {
      appearance: 'forced-colors:appearance-none'
    },
    disabled: {
      bgColor: 'disabled:bg-black/5',
      dark: {
        bgColor: 'disabled:dark:bg-white/5'
      }
    },
    checked: {
      borderColor: 'checked:border-blue-600',
      bgColor: 'checked:bg-blue-600',
    },
    focus: {
      outlineWidth: 'focus:outline-2',
      outlineOffsetWidth: 'focus:outline-offset-2',
      outlineColor: 'focus:outline-blue-600',
    },
    indeterminate: {
      borderColor: 'indeterminate:border-blue-600',
      bgColor: 'indeterminate:bg-blue-600',
    }
  }
};

/**
 * Returns the Checkbox component default config.
 */
export const GetCheckboxConfig = (customization?: Partial<CheckboxConfig>): CheckboxConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 * Provides the Checkbox component config.
 */
export function provideCheckbox(customization?: Partial<CheckboxConfig>): Provider {
  return {
    provide: CHECKBOX_CONFIG,
    useValue: GetCheckboxConfig(customization)
  };
}
