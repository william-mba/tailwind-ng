import { Spacing } from "../../spacing.type";

export type InsetX =
  | 'inset-x-auto'
  | 'inset-x-full'
  | '-inset-x-auto'
  | '-inset-x-full'
  | `inset-x-${Spacing}`
  | `-inset-x-${Spacing}`;
