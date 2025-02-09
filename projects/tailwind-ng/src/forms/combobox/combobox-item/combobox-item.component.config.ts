import { Provider } from "@angular/core";
import { COMBOBOX_ITEM_CONFIG, ComboboxItemConfig, mergeConfig } from "@tailwind-ng/core";

const DefaultConfig = (): ComboboxItemConfig => {
  return {
    height: 'h-fit',
    paddingX: 'px-4',
    paddingY: 'py-2',
    cursor: 'cursor-pointer',
    position: 'relative',
    display: 'flex',
    gap: 'gap-1',
    alignItems: 'items-center',
    hover: {
      textColor: 'hover:text-white',
      bgColor: 'hover:bg-blue-600',
      fontWeight: 'hover:font-bold'
    },
    dataSelected: {
      textColor: 'data-selected:text-white',
      bgColor: 'data-selected:bg-blue-600',
      fontWeight: 'data-selected:font-bold'
    },
    focus: {
      textColor: 'focus:text-white',
      bgColor: 'focus:bg-blue-700',
      fontWeight: 'focus:font-bold',
      outlineWidth: 'focus:outline-0',
    },
    dataVisualFocused: {
      textColor: 'data-visual-focused:text-white',
      bgColor: 'data-visual-focused:bg-blue-700',
      fontWeight: 'data-visual-focused:font-bold',
      outlineWidth: 'data-visual-focused:outline-0',
    }
  }
}
/**
 * Returns the combobox item configuration
 */
export const GetComboboxItemConfig = (customization?: Partial<ComboboxItemConfig>): ComboboxItemConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * @TailwindNG Combobox Item config provider.
 */
export function provideComboboxItem(customization?: Partial<ComboboxItemConfig>): Provider {
  return {
    provide: COMBOBOX_ITEM_CONFIG,
    useValue: GetComboboxItemConfig(customization)
  }
}
