import { DropdownBaseConfig } from "./dropdown-base.config";

/**Dropdown item config
 * @package ngx-twcss
 */
export type DropdownItemConfig = Partial<DropdownBaseConfig>

export const DropdownItemConfig: DropdownItemConfig = {
  textAlign: 'text-start',
  width: 'w-full',
  borderRadius: 'rounded-none',
  borderWidth: 'border-0',
  display: 'block',
  theme: {
    light: {
      bgColor: 'bg-slate-100',
      borderColor: 'border-slate-200',
      hover: {
        bgColor: 'hover:bg-slate-200'
      }
    },
    dark: {
      bgColor: 'dark:bg-slate-800',
      borderColor: 'dark:border-slate-700',
      hover: {
        bgColor: 'dark:hover:bg-slate-700'
      }
    }
  }
}
