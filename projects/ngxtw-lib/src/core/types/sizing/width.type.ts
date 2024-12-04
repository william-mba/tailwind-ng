import { Spacing } from "../spacing.type";
import { MaxWidth } from "./max-width.type";
import { MinWidth } from "./min-width.type";

export type Width =
  | 'w-screen'
  | 'w-svh'
  | 'w-lvh'
  | 'w-dvh'
  | 'w-svw'
  | 'w-lvw'
  | 'w-dvw'
  | 'w-min'
  | 'w-max'
  | 'w-fit'
  | `w-${Spacing}`
  | MinWidth
  | MaxWidth
