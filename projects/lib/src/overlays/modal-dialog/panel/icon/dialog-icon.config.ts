import { StyleConfig } from "../../../../core/types/style-config.type"

/**Dialog icon config */
export interface DialogIconConfig extends Partial<StyleConfig> {}
export const DialogIconConfig: DialogIconConfig = {
  display: 'flex',
  alignItem: 'items-center',
  justifyContent: 'justify-center',
  size: 'size-12',
  margin: 'mx-auto',
  borderRadius: 'rounded-full',
  sm: {
    flexShrink: 'sm:shrink-0',
    size: 'sm:size-10',
  },
  bgColor: 'bg-red-100',
  dark: {
    bgColor: 'dark:bg-red-700',
    bgOpacity: 'dark:bg-opacity-50'
  }
}
