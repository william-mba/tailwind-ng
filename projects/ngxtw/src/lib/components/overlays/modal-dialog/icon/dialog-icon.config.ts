import { ElementConfig } from '../../../../core/types/element.config';

/**Dialog icon config */
export type DialogIconConfig = Partial<ElementConfig>
export const DialogIconConfig: DialogIconConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  size: 'size-12',
  margin: 'mx-auto',
  borderRadius: 'rounded-full',
  sm: {
    shrink: 'shrink-0',
    size: 'sm:size-10',
  },
  theme: {
    bgColor: 'bg-red-100',
    dark: {
      bgColor: 'dark:bg-red-700',
      bgOpacity: 'dark:bg-opacity-50'
    }
  }
}
