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
      bgColor: 'bg-neutral-100',
      borderColor: 'border-neutral-200',
      hover: {
        bgColor: 'hover:bg-neutral-200'
      }
    },
    dark: {
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700',
      hover: {
        bgColor: 'dark:hover:bg-neutral-700'
      }
    }
  }
}
