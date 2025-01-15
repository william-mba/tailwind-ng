import { Spacing } from "../spacing.type";

/**
 * [TailwindCSS - Translate](https://tailwindcss.com/docs/translate)
 */
export type TwTranslate =
  | `translate-none`
  | `translate-full`
  | `translate-x-full`
  | `translate-y-full`
  | `translate-z-full`
  | `-translate-full`
  | `-translate-x-full`
  | `-translate-y-full`
  | `-translate-z-full`
  | `translate-${number}`
  | `translate-x-${number}`
  | `translate-y-${number}`
  | `translate-z-${number}`
  | `-translate-${number}`
  | `-translate-x-${number}`
  | `-translate-y-${number}`
  | `-translate-z-${number}`
  | `translate-${Spacing}`
  | `translate-x-${Spacing}`
  | `translate-y-${Spacing}`
  | `translate-z-${Spacing}`
  | `-translate-${Spacing}`
  | `-translate-x-${Spacing}`
  | `-translate-y-${Spacing}`
  | `-translate-z-${Spacing}`
