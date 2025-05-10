import { ArrowLeftKey, isArrowLeft } from './is-arrow-left';
import { ArrowUpKey, isArrowUp } from './is-arrow-up';

export type ArrowUpOrLeftKey = ArrowUpKey | ArrowLeftKey;
export function isArrowUpOrLeft(
	key: ArrowUpOrLeftKey | (string & {}),
): key is ArrowUpOrLeftKey {
	return isArrowUp(key) || isArrowLeft(key);
}
