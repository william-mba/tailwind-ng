import { BaseConfig } from "../../configs/base.config"
import { UserSelect } from "../../core/types/interactivity/user-select"
import { Overflow } from "../../core/types/layout/overflow"
import { TextWrap } from "../../core/types/typography/text-wrap"

export type ButtonBaseConfig = Partial<BaseConfig> & {
  textWrap: TextWrap,
  overflow: Overflow,
  userSelect: UserSelect
}

export const ButtonBaseConfig: ButtonBaseConfig = {
  ...BaseConfig,
  textWrap: 'text-nowrap',
  overflow: 'overflow-hidden',
  userSelect: 'select-none'
}
