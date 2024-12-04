import { Spacing } from "../../spacing.type";

export type Bottom =
  | 'bottom-auto'
  | 'bottom-full'
  | '-bottom-auto'
  | '-bottom-full'
  | `bottom-${Spacing}`
  | `-bottom-${Spacing}`;
