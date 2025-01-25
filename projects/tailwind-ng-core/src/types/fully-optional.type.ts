/**
 * Make all properties of T optional including nested properties.
 */
export type FullyOptional<T> = {
  [P in keyof T]?: T[P] extends Record<string, any> ? FullyOptional<T[P]> : T[P];
};
