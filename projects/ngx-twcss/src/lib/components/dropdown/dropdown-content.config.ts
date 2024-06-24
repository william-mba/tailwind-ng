import { DropdownBaseConfig } from "./dropdown-base.config";

/**Dropdown content config
 * @package ngx-twcss
 */
export type DropdownContentConfig = Partial<DropdownBaseConfig>

export const DropdownContentConfig: DropdownContentConfig = {
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  theme: {
    light: {
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200'
    },
    dark: {
      bgColor: 'dark:bg-slate-900',
      borderColor: 'dark:border-slate-700'
    }
  },
  extends: {
    zIndex: 'z-50',
    marginTop: 'mt-4',
    paddingY: 'py-1',
    width: 'min-w-full'
  },
  position: 'absolute'
}
