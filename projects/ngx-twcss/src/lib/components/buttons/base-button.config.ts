import { BaseConfig } from "../../common/configs/base.config"
import { Gap } from "../../common/types/flex-n-grid/gap"
import { UserSelect } from "../../common/types/interactivity/user-select"
import { Overflow } from "../../common/types/layout/overflow"
import { TextWrap } from "../../common/types/typography/text-wrap"

export interface BaseButtonConfig extends Partial<BaseConfig> {
  gap: Gap,
  textWrap: TextWrap,
  overflow: Overflow,
  userSelect: UserSelect
}

export const BaseButtonConfig: BaseButtonConfig = {
  rounded: 'rounded-md',
  display: 'inline-flex',
  verticalAlign: 'items-center',
  horizontalAlign: 'justify-center',
  fontWeight: 'font-semibold',
  // base button
  gap: 'gap-1.5',
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  overflow: 'overflow-hidden'
}

