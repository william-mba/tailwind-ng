import { BorderWidth } from "../../common/types/borders/border-width"
import { Gap } from "../../common/types/flex-n-grid/gap"
import { UserSelect } from "../../common/types/interactivity/user-select"
import { Overflow } from "../../common/types/layout/overflow"
import { TextWrap } from "../../common/types/typography/text-wrap"
import { BaseSettings } from "../../common/settings/base.settings"

export interface BaseButtonSettings extends BaseSettings {
  gap?: Gap,
  textWrap?: TextWrap,
  overflow?: Overflow,
  userSelect?: UserSelect
}

export interface SoftButtonSettings extends BaseButtonSettings { }

export interface SecondaryButtonSettings extends BaseButtonSettings {
  border?: BorderWidth
}

export const BaseButtonSettings: BaseButtonSettings = {
  gap: 'gap-2',
  display: 'inline-flex',
  textWrap: 'text-nowrap',
  hAlign: 'justify-center',
  vAlign: 'items-center',
  userSelect: 'select-none',
  fontWeight: 'font-semibold',
  overflow: 'overflow-hidden'
}

export const SoftButtonSettings: SoftButtonSettings = {
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

export const SecondaryButtonSettings: SecondaryButtonSettings = {
  border: 'border',
  theme: {
    light: {
      textColor: 'text-black',
      borderColor: 'border-black',
      borderOpacity: 'border-opacity-15',
      modifier: {
        hover: {
          bgColor: 'hover:bg-black',
          bgOpacity: 'hover:bg-opacity-5',
          borderOpacity: 'hover:border-opacity-25'
        },
        focus: {
          borderOpacity: 'focus:border-opacity-30'
        }
      }
    },
    dark: {
      textColor: 'dark:text-white',
      borderColor: 'dark:border-white',
      borderOpacity: 'dark:border-opacity-15',
      modifier: {
        hover: {
          bgColor: 'dark:hover:bg-white',
          bgOpacity: 'dark:hover:bg-opacity-5',
        },
        focus: {
          borderOpacity: 'dark:focus:border-opacity-30'
        }
      }
    }
  }
}
