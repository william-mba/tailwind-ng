import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../../core/types/element.config";
import { mergeConfigs } from "../../../../core/helpers/config.helper";

export type ComboboxItemConfig = Partial<ElementConfig>;
const ComboboxItemConfig: ComboboxItemConfig = {
  height: 'h-fit',
  padding: {
    x: 'px-4',
    y: 'py-2'
  },
  cursor: 'cursor-pointer',
  position: 'relative',
  display: {
    type: 'flex',
    gap: 'gap-1',
    alignItem: 'items-center'
  },
  theme: {
    hover: {
      textColor: 'hover:text-white',
      bgColor: 'hover:bg-blue-600',
      fontWeight: 'hover:font-bold'
    }
  }
}
export const COMBOBOX_ITEM_CONFIG = new InjectionToken<ComboboxItemConfig>('Combobox item config');
export const provideComboboxItemConfig = (config?: Partial<ComboboxItemConfig>): Provider => {
  return {
    provide: COMBOBOX_ITEM_CONFIG,
    useValue: mergeConfigs(ComboboxItemConfig, config)
  }
}
