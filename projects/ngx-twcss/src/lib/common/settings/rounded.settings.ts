import { RoundedLeft, RoundedTop, RoundedRight, RoundedBottom } from "../types/borders/border-radius";

export interface RoundedSettings {
  /**left */
  l?: RoundedLeft,
  /**top */
  t?: RoundedTop,
  /**right */
  r?: RoundedRight,
  /**bottom */
  b?: RoundedBottom
}

export const RoundedSettings: RoundedSettings = {}
