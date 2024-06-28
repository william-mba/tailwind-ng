import { BaseConfig } from '../../configs/base.config';

/**Modal Dialog config key */
export const ModalDialogConfigKey = 'ModalDialogConfigKey';

/**Modal Dialog config */
export type ModalDialogConfig = Partial<BaseConfig>;
export const ModalDialogConfig: ModalDialogConfig = {
  theme: {
    bgColor: 'bg-white'
  },
  position: 'relative',
  borderRadius: 'rounded-lg',
  overflow: 'overflow-hidden',
  textAlign: 'text-left',
  extend: 'shadow-xl sm:my-8 sm:w-full sm:max-w-lg'
}
