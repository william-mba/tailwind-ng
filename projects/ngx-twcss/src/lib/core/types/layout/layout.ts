import { Display } from "./display"
import { Overflow } from "./overflow"
import { Position } from "./position"

export type Layout = {
  display: Partial<Display>,
  overflow: Overflow,
  position: Partial<Position>
}
