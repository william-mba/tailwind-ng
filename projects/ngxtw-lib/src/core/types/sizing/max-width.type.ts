import { Spacing } from "../spacing.type";

export type MaxWidth =
  | 'max-w-screen'
  | 'max-w-svh'
  | 'max-w-lvh'
  | 'max-w-dvh'
  | 'max-w-svw'
  | 'max-w-lvw'
  | 'max-w-dvw'
  | 'max-w-min'
  | 'max-w-max'
  | 'max-w-fit'
  | `max-w-${Spacing}`
