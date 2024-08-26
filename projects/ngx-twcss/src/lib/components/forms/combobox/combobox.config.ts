import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";

export type ComboboxConfig = Partial<ElementConfig>;
const ComboboxConfig: ComboboxConfig = {
  width: 'w-64',
  borderRadius: 'rounded-md',
  borderWidth: 'ring',
  lineHeight: 'leading-6',
  inset: 'ring-inset',
  padding: {
    y: 'py-1.5',
    left: 'pl-3',
    right: 'pr-10'
  },
  shadow: 'shadow-sm',
  theme:{
    bgColor: 'bg-neutral-50',
    borderColor: 'ring-neutral-300',
    dark:{
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:ring-neutral-700'
    },
    focus: {
      borderWidth: 'focus:ring-2',
      borderColor: 'focus:ring-indigo-600',
      inset: 'focus:ring-inset'
    }
  }
}
/**
 * Combobox component config
 */
export const COMBOBOX_CONFIG = new InjectionToken<ComboboxConfig>('Combobox component config');

/**
 * Combobox component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export const provideComboboxConfig = (config?: Partial<ComboboxConfig>): Provider => {
  return {
    provide: COMBOBOX_CONFIG,
    useValue: mergeConfigs(ComboboxConfig, config)
  }
};
