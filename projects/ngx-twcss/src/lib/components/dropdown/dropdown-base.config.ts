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
      bgColor: 'bg-neutral-100',
      borderColor: 'border-neutral-200',
      hover: {
        bgColor: 'hover:bg-neutral-200'
      },
      focus: {
        borderColor: 'focus:border-neutral-400'
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700',
      hover: {
        bgColor: 'dark:hover:bg-neutral-700'
      },
      focus: {
        borderColor: 'dark:focus:border-neutral-500'
      }
    }
  }
};
