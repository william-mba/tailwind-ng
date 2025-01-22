import { Provider } from '@angular/core';
import { CHECKBOX_CONFIG, mergeConfig, CheckboxConfig } from "@tailwind-ng/core";

const DefaultConfig = (): CheckboxConfig => {
  return {
    container: {
      position: 'relative',
      display: 'flex',
      textColor: 'text-white',
      notFirst: {
        display: '*:not-first:hidden',
        inset: '*:not-first:inset-0',
        position: '*:not-first:absolute',
        placeSelf: '*:not-first:place-self-center',
        pointerEvents: '*:not-first:pointer-events-none'
      }
    },
    input: {
      is: 'peer',
      size: 'size-4',
      radius: 'rounded-sm',
      appearance: 'appearance-none',
      borderWidth: 'border-1',
      borderColor: 'border-black/15',
      dark: {
        borderColor: 'dark:border-white/15',
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
      focusVisible: {
        outlineWidth: 'focus-visible:outline-2',
        outlineOffsetWidth: 'focus-visible:outline-offset-2',
        outlineColor: 'focus-visible:outline-blue-600',
      },
      indeterminate: {
        borderColor: 'indeterminate:border-blue-600',
        bgColor: 'indeterminate:bg-blue-600',
      }
    }
  }
};

export const GetCheckboxConfig = (customization?: Partial<CheckboxConfig>): CheckboxConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
};

/**
 * Provides the input radio config's token
 */
export function provideCheckboxConfig(customization?: Partial<CheckboxConfig>): Provider {
  return {
    provide: CHECKBOX_CONFIG,
    useValue: GetCheckboxConfig(customization)
  };
}
