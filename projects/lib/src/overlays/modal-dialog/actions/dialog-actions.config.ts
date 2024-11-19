import { StyleConfig } from "../../../core/types/style-config.type"

/**Dialog actions config */
export interface DialogActionsConfig extends Partial<StyleConfig> {}
export const DialogActionsConfig: DialogActionsConfig = {
  display: 'flex',
  gap: 'gap-4',
  flexDirection: 'flex-col',
  padding: {
    size: 'p-6',
    y: 'py-4',
  },
  sm: {
    boxShadow: 'sm:shadow-md',
    flexDirection: 'sm:flex-row-reverse'
  }
}
