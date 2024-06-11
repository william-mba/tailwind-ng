import { BorderRadius } from "../core/types/borders/border-radius"
import { Display } from "../core/types/layout/display"
import { Theme } from "../core/types/theme"
import { FontWeight } from "../core/types/typography/font-weight"

export type BaseConfig = {
  display: Partial<Display>,
  borderRadius: BorderRadius,
  fontWeight: FontWeight,
  theme?: Partial<Theme> | {
    light: Partial<Theme>,
    dark: Partial<Theme>,
  }
}

export const BaseConfig: BaseConfig = {
  display: {
    type: 'inline-flex',
    justifyContent: 'justify-center',
    alignItem: 'items-center',
    gap: 'gap-1.5',
  },
  borderRadius: 'rounded-lg',
  fontWeight: 'font-semibold',
}
