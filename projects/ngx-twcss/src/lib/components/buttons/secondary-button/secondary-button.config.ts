import { BorderWidth } from "../../../common/types/borders/border-width";
import { BaseButtonConfig } from "../button.config";

export const SecondaryButtonKey = 'SecondaryButton';

export interface SecondaryButtonConfig extends Partial<BaseButtonConfig> {
  border: BorderWidth
}

export const SecondaryButtonConfig: SecondaryButtonConfig = {
  ...BaseButtonConfig,
  border: 'border',
  theme: {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-black',
      bgOpacity: 'bg-opacity-0',
      borderColor: 'border-black',
      borderOpacity: 'border-opacity-15',
      modifier: {
        hover: {
          bgColor: 'hover:bg-gray-500',
          bgOpacity: 'hover:bg-opacity-5'
        },
        focus: {
          borderOpacity: 'focus:border-opacity-30'
        }
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-white',
      bgOpacity: 'dark:bg-opacity-10',
      borderColor: 'dark:border-white',
      borderOpacity: 'dark:border-opacity-10',
      modifier: {
        hover: {
          bgColor: 'dark:hover:bg-white',
          bgOpacity: 'dark:hover:bg-opacity-20',
        },
        focus: {
          borderOpacity: 'dark:focus:border-opacity-20'
        }
      }
    }
  }
}
