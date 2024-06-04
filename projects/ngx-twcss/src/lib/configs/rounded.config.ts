import { RoundedLeft, RoundedTop, RoundedRight, RoundedBottom } from "../core/types/borders/border-radius"

export interface RoundedConfig {
  /**left */
  l?: RoundedLeft,
  /**top */
  t?: RoundedTop,
  /**right */
  r?: RoundedRight,
  /**bottom */
  b?: RoundedBottom
}

export const RoundedConfig: RoundedConfig = {}
