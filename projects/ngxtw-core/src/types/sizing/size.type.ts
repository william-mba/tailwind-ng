import { DynamicSpacing } from "../dynamic-spacing.type";
import { Spacing } from "../spacing.type";

export type Size =
  | `size-${Spacing}`
  | `size-${DynamicSpacing}`
