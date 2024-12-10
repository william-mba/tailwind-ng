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

type MarginSpacing = Spacing | 'auto'

export type MarginRight = `mr-${MarginSpacing}`

export type MarginLeft = `ml-${MarginSpacing}`

export type MarginTop = `mt-${MarginSpacing}`

export type MarginBottom = `mb-${MarginSpacing}`

export type MarginX = `mx-${MarginSpacing}`

export type MarginY = `my-${MarginSpacing}`

export type MarginSize = `m-${MarginSpacing}`
