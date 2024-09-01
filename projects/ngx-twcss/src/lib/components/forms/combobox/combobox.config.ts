import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";
import { ComboboxItemConfig, provideComboboxItemConfig } from "./combobox-item/combobox-item.config";

export type ComboboxConfig = Partial<ElementConfig>;
const ComboboxConfig: ComboboxConfig = {
  borderRadius: 'rounded-md',
  borderWidth: 'border-0',
  ringWidth: 'ring-1',
  lineHeight: 'leading-6',
  inset: 'ring-inset',
  padding: {
    y: 'py-1.5',
    left: 'pl-3',
    right: 'pr-10'
  },
  shadow: 'shadow-sm',
  theme: {
    bgColor: 'bg-neutral-50',
    borderColor: 'ring-neutral-300',
    dark: {
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
 * @param itemConfig The custom item config
 * @returns The configured provider
 */
export function provideComboboxConfig(config?: Partial<ComboboxConfig>, itemConfig?: Partial<ComboboxItemConfig>): Provider[] {
  return [{
    provide: COMBOBOX_CONFIG,
    useValue: mergeConfigs(ComboboxConfig, config)
  },
  provideComboboxItemConfig(itemConfig),
  ];
};
