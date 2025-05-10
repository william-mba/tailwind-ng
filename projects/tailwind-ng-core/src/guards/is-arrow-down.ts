export type ArrowDownKey = 'ArrowDown';
export function isArrowDown(
	key: ArrowDownKey | (string & {}),
): key is ArrowDownKey {
	return key === 'ArrowDown';
}
