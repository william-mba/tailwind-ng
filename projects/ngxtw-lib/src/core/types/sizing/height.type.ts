import { Spacing } from "../spacing.type";
import { MaxHeight } from "./max-height.type";
import { MinHeight } from "./min-height.type";

export type Height =
  | 'h-screen'
  | 'h-svh'
  | 'h-lvh'
  | 'h-dvh'
  | 'h-svw'
  | 'h-lvw'
  | 'h-dvw'
  | 'h-min'
  | 'h-max'
  | 'h-fit'
  | 'h-full'
  | MinHeight
  | MaxHeight
  | `h-${Spacing}`
