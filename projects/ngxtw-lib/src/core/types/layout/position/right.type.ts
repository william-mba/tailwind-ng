import { Spacing } from "../../spacing.type";

export type Right =
  | 'right-auto'
  | 'right-full'
  | '-right-auto'
  | '-right-full'
  | `right-${Spacing}`
  | `-right-${Spacing}`;
