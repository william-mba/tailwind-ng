import { StyleConfig } from "../../../core/types/style-config.type"

/**Dialog panel config */
export interface DialogPanelConfig extends Partial<StyleConfig> {}
export const DialogPanelConfig: DialogPanelConfig = {
  display: 'flex',
  gap: 'gap-4',
  position: 'relative',
  flexDirection: 'flex-col',
  padding: {
    size: 'p-6'
  },
  sm: {
    alignItem: 'sm:items-start',
    flexDirection: 'sm:flex-row',
  }
}
