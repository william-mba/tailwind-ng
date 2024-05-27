import { PaddingLeft, PaddingTop, PaddingRight, PaddingBottom, PaddingX, PaddingY } from "../types/spacing/padding";

export interface PaddingSettings {
  /**left */
  l?: PaddingLeft,
  /**top */
  t?: PaddingTop,
  /**right */
  r?: PaddingRight,
  /**bottom */
  b?: PaddingBottom,
  /**horizontal */
  x?: PaddingX,
  /**vertical */
  y?: PaddingY
}

export const PaddingSettings: PaddingSettings = {}
