import { Spacing } from "../spacing.type";

export type Size =
  | 'size-svh'
  | 'size-svw'
  | 'size-lvh'
  | 'size-lvw'
  | 'size-dvh'
  | 'size-dvw'
  | 'size-min'
  | 'size-max'
  | 'size-fit'
  | 'size-full'
  | `size-${Spacing}`
