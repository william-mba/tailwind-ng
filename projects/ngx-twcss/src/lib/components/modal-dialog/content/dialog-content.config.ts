import { ElementConfig } from '../../../core/types/element.config';

/**Dialog content config */
export type DialogContentConfig = Partial<ElementConfig>
export const DialogContentConfig: DialogContentConfig = {
  display: {
    type: 'flex',
    gap: 'gap-2',
    flexDirection: 'flex-col',
  },
  textAlign: 'text-center',
  sm: "sm:text-left",
  theme: {
    textColor: 'text-gray-900',
    dark: {
      textColor: 'dark:text-gray-100'
    }
  }
}
