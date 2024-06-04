import { BaseConfig } from "../../configs/base.config";
import { Gap } from "../../core/types/flex-n-grid/gap";
import { UserSelect } from "../../core/types/interactivity/user-select";
import { TextWrap } from "../../core/types/typography/text-wrap";

export const DropdownConfigKey = 'DropdownConfigKey';

export interface DropdownConfig extends Partial<BaseConfig> { };

export const DropdownConfig: DropdownConfig = {
  theme: {
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    modifier: {
      hover: {
        bgOpacity: 'hover:bg-opacity-90'
      }
    }
  }
}

interface DropdownItemConfig extends Partial<BaseConfig> { };
interface DropdownContainerConfig extends Partial<BaseConfig> { };

const DropdownContainerConfig: DropdownContainerConfig = {};

/** Dropdown base
 * --------------
 * font-semibold (base)
 * rounded-md (base)
 * border
 * border-slate-200
 * focus:border-slate-400
 * dark:border-slate-700
 * dark:focus:border-slate-500
 * text-black
 * bg-slate-50
 * hover:bg-slate-100
 * dark:text-white
 * dark:bg-slate-900
 * dark:hover:bg-slate-800
 * px-4
 * py-2
 * text-base
 */

export interface DropdownBaseConfig extends Partial<BaseConfig> {
  gap: Gap,
  textWrap: TextWrap,
  userSelect: UserSelect
};

export const DropdownBaseConfig: DropdownBaseConfig = {
  rounded: 'rounded-md',
  display: 'inline-flex',
  verticalAlign: 'items-center',
  horizontalAlign: 'justify-center',
  fontWeight: 'font-semibold',
  // Dropdown base
  gap: 'gap-1.5',
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
};

/** Dropdown container
 * -------------------
 * justify-center (base)
 * font-semibold (base)
 * gap-1.5 (base)
 * text-nowrap (base)
 * select-none (base)
 * border (base)
 * text-black (base)
 * bg-slate-50 (base)
 * border-slate-200 (base)
 * hover:bg-slate-100 (base)
 * focus:border-slate-400 (base)
 * dark:text-white (base)
 * dark:bg-slate-900 (base)
 * dark:border-slate-700 (base)
 * dark:hover:bg-slate-800 (base)
 * dark:focus:border-slate-500 (base)
 * px-4 (base)
 * py-2 (base)
 * text-base (base)
 * rounded-md (base)
 * group
 * overflow-hidden- (base-button override)
 * relative
 *
 * Dropdown container label
 * ------------------------
 * inline-flex (base)
 * gap-1.5 (base-button)
 *
 * Dropdown
 * --------
 * invisible
 * group-focus:visible
 * absolute
 * top-8
 * right-0
 * mt-4
 * py-1
 * z-10
 * min-w-full
 * dark:border-slate-700 (base)
 * dark:bg-slate-900 (base)
 * bg-slate-50 (base)
 * rounded-md (base)
 * border (base)
 * *:block
 * divide-y
 * dark:divide-slate-800
 *
 * Dropdown item
 * ------------
 * items-center (base)
 * justify-center (base)
 * font-semibold (base)
 * gap-1.5 (base-button)
 * select-none (base-button)
 * text-black (base)
 * bg-slate-50 (base)
 * border-slate-200 (base)
 * hover:bg-slate-100 (base)
 * focus:border-slate-400 (base)
 * dark:text-white (base)
 * dark:bg-slate-900 (base)
 * dark:border-slate-700 (base)
 * dark:hover:bg-slate-800 (base)
 * dark:focus:border-slate-500 (base)
 * px-4 (base)
 * py-2 (base)
 * text-base (base)
 * inline-flex- (base override)
 * rounded- (base override)
 * border- (base override)
 * text-start
 * w-full
 *
 * */
