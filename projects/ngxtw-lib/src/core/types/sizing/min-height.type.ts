import { Spacing } from "../spacing.type";

export type MinHeight =
  | 'min-h-screen'
  | 'min-h-svh'
  | 'min-h-lvh'
  | 'min-h-dvh'
  | 'min-h-svw'
  | 'min-h-lvw'
  | 'min-h-dvw'
  | 'min-h-min'
  | 'min-h-max'
  | 'min-h-fit'
  | 'min-h-full'
  | `min-h-${Spacing}`
