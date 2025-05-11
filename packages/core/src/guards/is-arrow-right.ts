export type ArrowRightKey = 'ArrowRight'
export function isArrowRight(
  key: ArrowRightKey | (string & {})
): key is ArrowRightKey {
  return key === 'ArrowRight'
}
