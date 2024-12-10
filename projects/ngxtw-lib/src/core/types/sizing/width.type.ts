import { DynamicSpacing } from "../dynamic-spacing.type";
import { Spacing } from "../spacing.type";

export type Width =
  | 'w-1/2'
  | `w-${Spacing}`
  | `w-${DynamicSpacing}`
