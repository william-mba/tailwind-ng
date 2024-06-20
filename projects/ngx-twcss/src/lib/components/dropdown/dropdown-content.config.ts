import { DivideWidth } from "../../core/types/borders/divide-width";
import { Position } from "../../core/types/layout/position";
import { DropdownBaseConfig } from "./dropdown-base.config";

/**Dropdown content config
 * @package ngx-twcss
 */
export type DropdownContentConfig = Partial<DropdownBaseConfig> & {
  position: Partial<Position>,
  divideWidth: DivideWidth
}

export const DropdownContentConfig: DropdownContentConfig = {
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  theme: {
    light: {
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      divideColor: 'divide-slate-200'
    },
    dark: {
      bgColor: 'dark:bg-slate-900',
      borderColor: 'dark:border-slate-700',
      divideColor: 'dark:divide-slate-700'
    }
  },
  extends: {
    zIndex: 'z-50',
    marginTop: 'mt-4',
    paddingY: 'py-1',
    width: 'min-w-full'
  },
  position: {
    type: 'absolute'
  },
  divideWidth: 'divide-y'
}
