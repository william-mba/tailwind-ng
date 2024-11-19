import { Provider } from "@angular/core";
import { StyleConfig } from "../../../core/types/style-config.type";
import { mergeConfig } from "../../../core/utils/config.util";
import { InjectionTokenFactory } from "../../../core/tokens/injection-token-factory";

export interface ComboboxItemConfig extends Partial<StyleConfig>{};
const ComboboxItemConfig: ComboboxItemConfig = {
  height: 'h-fit',
  padding: {
    x: 'px-4',
    y: 'py-2'
  },
  cursor: 'cursor-pointer',
  position: 'relative',
  display: 'flex',
  gap: 'gap-1',
  alignItem: 'items-center',
  hover: {
    textColor: 'hover:text-white',
    bgColor: 'hover:bg-blue-600',
    fontWeight: 'hover:font-bold'
  }
}
export const COMBOBOX_ITEM_CONFIG = InjectionTokenFactory.create(ComboboxItemConfig, 'COMBOBOX_ITEM_CONFIG');

export function provideComboboxItemConfig(config: Partial<ComboboxItemConfig> = {}): Provider {
  return {
    provide: COMBOBOX_ITEM_CONFIG,
    useValue: mergeConfig({ target: ComboboxItemConfig, source: [config] })
  }
}
