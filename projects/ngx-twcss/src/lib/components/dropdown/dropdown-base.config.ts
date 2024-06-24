import { BaseConfig } from "../../configs/base.config";

export type DropdownBaseConfig = Partial<BaseConfig>;

export const DropdownBaseConfig: DropdownBaseConfig = {
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  borderWidth: 'border',
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
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
