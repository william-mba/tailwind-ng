import { Spacing } from "../../spacing.type";

export type InsetY =
  | 'inset-y-auto'
  | 'inset-y-full'
  | '-inset-y-auto'
  | '-inset-y-full'
  | `inset-y-${Spacing}`
  | `-inset-y-${Spacing}`;
