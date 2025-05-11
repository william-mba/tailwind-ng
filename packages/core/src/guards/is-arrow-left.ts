export type ArrowLeftKey = 'ArrowLeft'
export function isArrowLeft(
  key: ArrowLeftKey | (string & {})
): key is ArrowLeftKey {
  return key === 'ArrowLeft'
}
