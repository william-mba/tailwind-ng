import { DynamicSpacing } from "../dynamic-spacing.type";
import { Spacing } from "../spacing.type";

export type Height =
  | `h-${Spacing}`
  | `h-${DynamicSpacing}`
