import { ElementConfig } from '../../../../core/types/element.config';

/**Dialog actions config */
export type DialogActionsConfig = Partial<ElementConfig>
export const DialogActionsConfig: DialogActionsConfig = {
  display: {
    type: 'flex',
    gap: 'gap-4',
    flexDirection: 'flex-col',
  },
  padding: {
    size: 'p-6',
    y: 'py-4',
  },
  sm: {
    flexDirection: 'sm:flex-row-reverse'
  }
}
