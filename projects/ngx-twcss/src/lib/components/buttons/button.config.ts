import { BaseConfig } from "../../common/configs/base.config"
import { Gap } from "../../common/types/flex-n-grid/gap"
import { UserSelect } from "../../common/types/interactivity/user-select"
import { Overflow } from "../../common/types/layout/overflow"
import { TextWrap } from "../../common/types/typography/text-wrap"

export interface BaseButtonConfig extends BaseConfig {
  gap: Gap,
  textWrap: TextWrap,
  overflow: Overflow,
  userSelect: UserSelect
}

export interface SoftButtonConfig extends BaseButtonConfig { }


export const BaseButtonConfig: Partial<BaseButtonConfig> = {
  ...BaseConfig,
  gap: 'gap-1.5',
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  overflow: 'overflow-hidden'
}

export const SoftButtonConfig: Partial<SoftButtonConfig> = {
  theme: {
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    modifier: {
      hover: {
        bgColor: 'bg-indigo-100'
      }
    }
  }
}

