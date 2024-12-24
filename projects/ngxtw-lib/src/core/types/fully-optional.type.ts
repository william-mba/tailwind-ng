export type FullyOptional<T> = {
  [P in keyof T]?: T[P] extends object ? FullyOptional<T[P]> : T[P]
}
