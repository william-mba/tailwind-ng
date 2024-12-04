import { Spacing } from "../spacing.type";

export type MinWidth =
  | 'min-w-screen'
  | 'min-w-svh'
  | 'min-w-lvh'
  | 'min-w-dvh'
  | 'min-w-svw'
  | 'min-w-lvw'
  | 'min-w-dvw'
  | 'min-w-min'
  | 'min-w-max'
  | 'min-w-fit'
  | `min-w-${Spacing}`
