import { Bottom } from "./position/bottom"
import { Inset } from "./position/inset"
import { InsetX } from "./position/inset-x"
import { InsetY } from "./position/inset-y"
import { Left } from "./position/left"
import { Right } from "./position/right"
import { Top } from "./position/top"

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
}

/**Utilities for controlling the placement of positioned elements.
 * @see https://tailwindcss.com/docs/top-right-bottom-left
 */
export type Placement = {
  top: Top,
  right: Right,
  bottom: Bottom,
  left: Left,
  inset: Inset | InsetX | InsetY
}
