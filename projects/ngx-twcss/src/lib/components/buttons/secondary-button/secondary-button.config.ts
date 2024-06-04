import { BorderWidth } from "../../../core/types/borders/border-width";
import { BaseButtonConfig } from "../base-button.config";

export const SecondaryButtonConfigKey = 'SecondaryButtonConfigKey';

export interface SecondaryButtonConfig extends Partial<BaseButtonConfig> {
  border: BorderWidth
}

export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...BaseButtonConfig,
  border: 'border',
  theme: {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      modifier: {
        hover: {
          bgColor: 'hover:bg-slate-100'
        },
        focus: {
          borderColor: 'focus:border-slate-400'
        }
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-slate-900',
      borderColor: 'dark:border-slate-700',
      modifier: {
        hover: {
          bgColor: 'dark:hover:bg-slate-800'
        },
        focus: {
          borderColor: 'dark:focus:border-slate-500'
        }
      }
    }
  }
}
