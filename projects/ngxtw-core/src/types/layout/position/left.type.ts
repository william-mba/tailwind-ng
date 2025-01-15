import { Spacing } from "../../spacing.type";

export type Left =
  | 'left-auto'
  | 'left-full'
  | '-left-auto'
  | '-left-full'
  | `left-${Spacing}`
  | `-left-${Spacing}`;
