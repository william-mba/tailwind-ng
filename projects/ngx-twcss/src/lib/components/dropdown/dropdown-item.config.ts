import { Width } from "../../core/types/sizing/width";
import { TextAlign } from "../../core/types/typography/text-align";
import { DropdownBaseConfig } from "./dropdown-base.config";

/**Dropdown item config
 * @package ngx-twcss
 */
export type DropdownItemConfig = Partial<DropdownBaseConfig> & {
  textAlign: TextAlign,
  width: Width
}

export const DropdownItemConfig: DropdownItemConfig = {
  textAlign: 'text-start',
  width: 'w-full',
  borderRadius: 'rounded-none',
  borderWidth: 'border-0',
  display: {
    type: 'block'
  },
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
