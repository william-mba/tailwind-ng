import { Bottom } from "./position/bottom.type"
import { Inset } from "./position/inset.type"
import { InsetX } from "./position/inset-x.type"
import { InsetY } from "./position/inset-y.type"
import { Left } from "./position/left.type"
import { Right } from "./position/right.type"
import { Top } from "./position/top.type"

export type PositionType =
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'

/**Utilities for controlling how an element is positioned in the DOM.
 * @see https://tailwindcss.com/docs/position
 */
export type Position = PositionType | Partial<Placement> & {
  type: PositionType
} | Placement

/**Utilities for controlling the placement of positioned elements.
 * @see https://tailwindcss.com/docs/top-right-bottom-left
 */
export type Placement = {
  top: Top,
  right: Right,
  bottom: Bottom,
  left: Left,
  inset: Inset | InsetX | InsetY
} | Top
  | Right
  | Bottom
  | Left
  | Inset
  | InsetX
  | InsetY

export type OverlayPosition = Partial<{
  top: Top,
  right: Right,
  bottom: Bottom,
  left: Left,
  inset: Inset | InsetX | InsetY
}>
