import { BaseConfig } from "../../configs/base.config";
import { BorderWidth } from "../../core/types/borders/border-width";
import { UserSelect } from "../../core/types/interactivity/user-select";
import { TextWrap } from "../../core/types/typography/text-wrap";

export type DropdownBaseConfig = Partial<BaseConfig> & {
  textWrap: TextWrap,
  userSelect: UserSelect,
  borderWidth: BorderWidth
};

export const DropdownBaseConfig: DropdownBaseConfig = {
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  borderWidth: 'border',
  display: {
    type: 'inline-flex',
    justifyContent: 'justify-center',
    alignItem: 'items-center',
    gap: 'gap-1.5'
  },
  borderRadius: 'rounded-md',
  fontWeight: 'font-semibold',
  theme: {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-slate-100',
      borderColor: 'border-slate-200',
      hover: {
        bgColor: 'hover:bg-slate-200'
      },
      focus: {
        borderColor: 'focus:border-slate-400'
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-slate-800',
      borderColor: 'dark:border-slate-700',
      hover: {
        bgColor: 'dark:hover:bg-slate-700'
      },
      focus: {
        borderColor: 'dark:focus:border-slate-500'
      }
    }
  }
};
