import { Spacing } from "../../spacing.type";

export type Inset =
  | 'inset-auto'
  | 'inset-full'
  | '-inset-auto'
  | '-inset-full'
  | `inset-${Spacing}`
  | `-inset-${Spacing}`;
