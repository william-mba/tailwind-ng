import { BaseConfig } from "../../configs/base.config"

export type ButtonBaseConfig = Partial<BaseConfig>

export const ButtonBaseConfig: ButtonBaseConfig = {
  ...BaseConfig,
  textWrap: 'text-nowrap',
  overflow: 'overflow-hidden',
  userSelect: 'select-none'
}
