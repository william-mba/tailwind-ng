import { Spacing } from "../spacing.type";

export type Padding = Partial<{
  x?: PaddingX
  y?: PaddingY
  top?: PaddingTop
  right?: PaddingRight
  bottom?: PaddingBottom
  left?: PaddingLeft
  size?: PaddingSize
}> | PaddingSize | PaddingX | PaddingY | PaddingTop | PaddingRight | PaddingBottom | PaddingLeft;

export type PaddingRight = `pr-${Spacing}`

export type PaddingLeft = `pl-${Spacing}`

export type PaddingTop = `pt-${Spacing}`

export type PaddingBottom = `pb-${Spacing}`

export type PaddingX = `px-${Spacing}`

export type PaddingY = `py-${Spacing}`

export type PaddingSize = `p-${Spacing}`
