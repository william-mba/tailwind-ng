import { BaseConfig } from "../../configs/base.config"
import { UserSelect } from "../../core/types/interactivity/user-select"
import { Overflow } from "../../core/types/layout/overflow"
import { TextWrap } from "../../core/types/typography/text-wrap"

export type BaseButtonConfig = Partial<BaseConfig> & {
  textWrap: TextWrap,
  overflow: Overflow,
  userSelect: UserSelect
}

export const BaseButtonConfig: BaseButtonConfig = {
  ...BaseConfig,
  textWrap: 'text-nowrap',
  overflow: 'overflow-hidden',
  userSelect: 'select-none'
}
