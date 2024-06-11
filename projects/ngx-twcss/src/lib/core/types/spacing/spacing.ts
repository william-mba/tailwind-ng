import { Margin } from "./margin"
import { Padding } from "./padding"

export type Spacing = {
  padding: Partial<Padding>
  margin: Partial<Margin>
}
