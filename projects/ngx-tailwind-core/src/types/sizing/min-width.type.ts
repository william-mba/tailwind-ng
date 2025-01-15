import { DynamicSpacing } from "../dynamic-spacing.type";
import { Spacing } from "../spacing.type";

export type MinWidth =
  | `min-w-${Spacing}`
  | `min-w-${DynamicSpacing}`
