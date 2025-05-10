export type ArrowUpKey = 'ArrowUp';
export function isArrowUp(key: ArrowUpKey | (string & {})): key is ArrowUpKey {
	return key === 'ArrowUp';
}
