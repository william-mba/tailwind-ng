import { ElementConfig } from '../../../core/types/element.config';

/**Dialog panel config */
export type DialogPanelConfig = Partial<ElementConfig>
export const DialogPanelConfig: DialogPanelConfig = {
  display: {
    type: 'flex',
    gap: 'gap-4',
    flexDirection: 'flex-col',
  },
  padding: {
    size: 'p-6'
  },
  sm: {
    flexDirection: 'sm:flex-row',
    alignItems: 'sm:items-start'
  }
}
