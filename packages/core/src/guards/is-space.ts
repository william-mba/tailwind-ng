export type SpaceKey = ' '
export function isSpace(key: string): key is SpaceKey {
  return key === ' '
}
