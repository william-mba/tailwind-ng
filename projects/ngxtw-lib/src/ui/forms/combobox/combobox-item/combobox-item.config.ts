import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../../core/shared/injection-token.factory";
import { mergeConfig } from "../../../../config/config.helper";
import { ConfigType } from "../../../../core/types/config.type";

export interface ComboboxItemConfig extends ConfigType { };
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
