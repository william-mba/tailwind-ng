import { Spacing } from "../spacing.type";

export type MaxHeight =
  | 'max-h-screen'
  | 'max-h-svh'
  | 'max-h-lvh'
  | 'max-h-dvh'
  | 'max-h-svw'
  | 'max-h-lvw'
  | 'max-h-dvw'
  | 'max-h-min'
  | 'max-h-max'
  | 'max-h-fit'
  | `max-h-${Spacing}`
