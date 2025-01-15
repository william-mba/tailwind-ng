import { Spacing } from "../../spacing.type";

export type Top =
  | 'top-auto'
  | 'top-full'
  | '-top-auto'
  | '-top-full'
  | `top-${Spacing}`
  | `-top-${Spacing}`;
