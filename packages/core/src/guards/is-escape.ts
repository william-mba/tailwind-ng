export type EscapeKey = 'Escape' | 'Esc'
export function isEscape(key: string): key is EscapeKey {
  return key === 'Escape' || key === 'Esc'
}
