import { StyleConfig } from "../../../../core/types/style-config.type"

/**Dialog content config */
export interface DialogContentConfig extends Partial<StyleConfig> {}
export const DialogContentConfig: DialogContentConfig = {
  display: 'flex',
  gap: 'gap-2',
  flexDirection: 'flex-col',
  textAlign: 'text-center',
  sm: {
    textAlign: 'sm:text-left',
  },
  textColor: 'text-gray-900',
  dark: {
    textColor: 'dark:text-gray-100'
  }
}
