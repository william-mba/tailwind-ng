import { ConfigValue } from "./config.type";

export type FullyOptional<T> = {
  [P in keyof T]?: T[P] extends ConfigValue ? FullyOptional<T[P]> : T[P]
}
