import { Config } from "../../core/types/config";

/** Dropdown config key */
export const DropdownConfigKey = 'DropdownConfigKey';

/** Dropdown config */
export type DropdownConfig = Partial<Config>
export const DropdownConfig: DropdownConfig = {
  display: 'grid',
  textAlign: 'text-start',
  padding: 'py-1',
  zIndex: 'z-10',
  width: 'min-w-52',
  overflow: 'overflow-hidden',
  position: {
    type: 'absolute',
    right: 'right-0',
    top: 'top-12'
  },
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  theme: {
    light: {
      bgColor: 'bg-white',
      borderColor: 'border-neutral-200'
    },
    dark: {
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700'
    }
  }
}
