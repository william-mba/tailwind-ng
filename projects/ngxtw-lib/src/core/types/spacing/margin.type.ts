import { Spacing } from "../spacing.type";

export type Margin = Partial<{
  x: MarginX
  y: MarginY
  top: MarginTop
  right: MarginRight
  bottom: MarginBottom
  left: MarginLeft
  size: MarginSize
}> | MarginSize | MarginX | MarginY | MarginTop | MarginRight | MarginBottom | MarginLeft;


export type MarginRight = `mr-${Spacing}`

export type MarginLeft = `ml-${Spacing}`

export type MarginTop = `mt-${Spacing}`

export type MarginBottom = `mb-${Spacing}`

export type MarginX = `mx-${Spacing}`

export type MarginY = `my-${Spacing}`

export type MarginSize = `m-${Spacing}`
