import { Display } from "./layout/display"
import { Overflow } from "./layout/overflow"
import { Position } from "./layout/position"

export type Layout = {
  display: Display,
  overflow: Overflow,
  position: Position
}
