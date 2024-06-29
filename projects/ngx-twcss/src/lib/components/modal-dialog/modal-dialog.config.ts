import { BaseConfig } from '../../configs/base.config';

/**Modal Dialog config key */
export const ModalDialogConfigKey = 'ModalDialogConfigKey';

/**Modal Dialog config */
export type ModalDialogConfig = Partial<BaseConfig>;
export const ModalDialogConfig: ModalDialogConfig = {
  position: 'relative',
  borderRadius: 'rounded-lg',
  overflow: 'overflow-hidden',
  textAlign: 'text-left',
  shadow: 'shadow-xl',
  extend: 'sm:my-8 sm:w-full sm:max-w-lg'
}
