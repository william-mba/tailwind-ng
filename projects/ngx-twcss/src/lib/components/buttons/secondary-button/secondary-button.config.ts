import { ButtonBaseConfig } from "../button-base.config";

export const SecondaryButtonConfigKey = 'SecondaryButtonConfigKey';

export type SecondaryButtonConfig = Partial<ButtonBaseConfig>;

export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...ButtonBaseConfig,
  borderWidth: 'border',
  userSelect: "select-text",
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
}
